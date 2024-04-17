require('dotenv').config()

const { IgApiClient } = require('instagram-private-api')
const { get } = require('request-promise')
const getmediasource = require('./getmediasource')
const express = require('express')
const cors = require('cors')

const app = express()
const ig = new IgApiClient()

app.use(express.json())
app.use(cors())

app.options('/repost-image', cors())

/**
 * 
 * @param {array} images - list of image urls
 * @param {object} buffers - collected buffers
 * @returns buffers array
 */
async function createbuffer (images, buffers=[]) {

  const currentimage = Array.isArray(images) ? images.shift() : images

  if ( !currentimage ) return buffers

  const imageBuffer = await get({
    url: currentimage,
    encoding: null,
  })

  if ( !Array.isArray(images) ) return imageBuffer

  buffers.push(imageBuffer)

  return createbuffer(images, buffers)

}

/**
 * login to instagram
 */
async function login () {

  console.log('Login...')

  ig.state.generateDevice(process.env.IG_USERNAME)

  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD)

  console.log(`Welcome, ${process.env.IG_USERNAME}`)

}

/**
 * post video to instagram
 * @param {buffer} video - video buffer
 * @param {buffer} coverImage - thumbnail buffer
 * @param {string} caption - caption string
 */
async function postvideo (video, coverImage, caption ) {

  await login()

  console.log('Publishing new video...')

  try {
    await ig.publish.video({
      file: video,
      video: video,
      coverImage,
      caption,
    })
    console.log('New video published successfully!')
    return true
  } catch (e) {
    console.error('Failed to publish the video. Try to post manually')
    console.error(e)
    return false
  }

}

/**
 * post image to instagram
 * @param {string} imageurls - image source url
 * @param {string} caption - post caption
 * @returns undefined
 */
async function postimage(imageurls, caption) {
  
  await login()

  console.log('Preparing buffers...')

  const imagebuffers = await createbuffer(imageurls)
  const items = imagebuffers.map(buffer => ({ file: buffer }))
  const albumoptions = { items, caption }
  
  console.log('Publishing', items.length, 'images...')

  try {
    if ( items.length == 1 ) await ig.publish.photo({
      file: imagebuffers[0],
      caption
    })
    else await ig.publish.album(albumoptions)
    console.log(items.length == 1 ? 'Single post' : 'Album', 'published successfully!')
  } catch (e) {
    console.error('Failed to publish the post. Try another one')
    console.error(e)
  }
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/download-media', async (req, res) => {
  try {
    const url = req.body.url
    console.log('Getting media form', url)
    getmediasource(url).then(async data => {
      res.end(JSON.stringify({ ok: true, media: data.video }))
    })
  } catch (e) {
    return console.log(e)
  }
})

app.post('/repost-image', async (req, res) => {
  try {
    const images = req.body.images
    const caption = req.body.caption
    await postimage(images, caption)
    res.end(JSON.stringify({ posted: true }))
  } catch (e) {
    console.log('Error!')
    console.log(e)
  }
})

app.post('/repost-video', (req, res) => {
  const { url, thumbnail } = req.body
  try {
    getmediasource(url).then(async data => {
      const coverImage = await createbuffer(thumbnail)
      const videobuffer = await createbuffer(data.video)
      const caption = data.caption.split('\n').slice(1).join('\n').trim()
      data.ok = await postvideo(videobuffer, coverImage, caption)
      res.end(JSON.stringify(data))
    })
  } catch (e) {
    console.log('Error!')
    console.log(e)
  }
})

app.listen(4120, _ => console.log('Server running on port 4120'))
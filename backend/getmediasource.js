const axios = require('axios');
const { parse } = require("node-html-parser")

async function getPostLink(url) {

  url = url + 'embed' + '/captioned';

  console.log('Url:', url, url.replace('/p/', '/reel/'))

  let res = axios.get(url.replace('/p/', '/reel/')).then(async (response) => {

    const root = parse(response.data);

    let video = "";

    if (response.data.search("video_url") != -1) video = getVideoLinkFromHtml(response.data)
    else video = root.querySelector('img.EmbeddedMediaImage').getAttribute("src")

    while (video.search("&amp;") != -1) video = video.replace("&amp;", "&")

    let caption = await getCaptionFromHtml(response.data)

    return { video, caption }
  })

  return res;
}

async function getCaptionFromHtml(html) {

  const root = parse(html)

  let caption = root.querySelector('.Caption')?.text

  if( caption == undefined ) caption = "No caption"

  caption = caption.split('View all')[0]

  return caption;
}

function getVideoLinkFromHtml(html) {

  let crop = "{\"" + html.substring(html.search("video_url"), html.search("video_url") + 1000).replace(/\\\\\\/g, '').replace(/\\/g, '');

  crop = crop.substring(0, crop.search(",")) + "}"
  
  return JSON.parse(crop).video_url;
}

function getvideosource (url) {
  return new Promise(resolve => {
    axios.get(url+'embed/captioned').then(response => {
      const html = response.data.replace(/\\/g, '')
      const video = html.split('video_url')?.[1]?.split('"')?.[2]
      const caption = html.split('"caption":"')?.[1]?.split('","')?.[0]
      const comments = html.split('comments_count":')?.[1]?.split('"')?.[0]
      const likes = html.split('likes_count":')?.[1]?.split('"')?.[0]
      console.log(likes, comments, caption, video)
      resolve({ video, caption, comments, likes })
    })
  })
}

module.exports = async function (instagramPostLink) {
  return await getPostLink(instagramPostLink);
}
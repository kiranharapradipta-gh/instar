function showfakeverified () {

  const pathname = window.location.pathname

  const ishome = pathname == '/'
  const isprofile = pathname.split('/')?.[2] == ''
  const ischat = pathname.split('/')?.[1] == 'direct'
  const ispost = pathname.split('/')?.[1] == 'p'

  const editbutton = document.querySelector('div.x9f619.xjbqb8w.xfex06f.x3pnbk8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.xs83m0k.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div > div:nth-child(1) > a')
  const verifiedatmypost = document.querySelector('header > div._aaqy._aaqz > div._aar0._aar1 > div > div > div > div')
  const verifiedatmypostagain = document.querySelector('li > div > div > div._a9zr > h2 > div:nth-child(2)')

  const namecontaineratprofile = document.querySelector('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1h5jrl4.x1uhb9sk.x6ikm8r.x10wlt62.x1c4vz4f.xs83m0k.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1')
  const namecontainerathome = document.querySelector('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1pi30zi.x1swvt13.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div > div > div > div > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.x1iyjqo2.xs83m0k.xeuugli.x1qughib.x6s0dn4.x1a02dak.x1q0g3np.xdl72j9 > div > div > div')
  const namecontaineratchat = document.querySelector('div.x1i10hfl.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.x6s0dn4.x78zum5.xs83m0k.xeuugli.x1d5wrs8 > div.x6s0dn4.x78zum5.x1q0g3np.x2lah0s.xl56j7k')
  const namecontaineratpost = document.querySelector('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1iyjqo2.x2lwn1j.xeuugli.x1q0g3np.xqjyukv.x6s0dn4.x1oa3qoh.x1nhvcw1 > div > div:nth-child(1) > div > div > span > span > div > a > div > div')
  const namecontaineratmypost = document.querySelector('header > div._aaqy._aaqz > div._aar0._aar1 > div > div > div')
  const namecontaineratmypostagain = document.querySelector('li > div > div > div._a9zr > h2')

  const verifiedelement = document.createElement('div')

  verifiedelement.setAttribute('class', 'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1gslohp x1i64zmx x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1')
  verifiedelement.innerHTML = `
    <svg aria-label="Verified" class="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="18" role="img" viewBox="0 0 40 40" width="18">
      <title>Verified</title>
      <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path>
    </svg>
  `

  const verified = document.querySelector('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1gslohp.x1i64zmx.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1')

  try {
    if ( isprofile && !verified ) namecontaineratprofile?.appendChild(verifiedelement)
    if ( ishome && !verified ) namecontainerathome?.appendChild(verifiedelement)
    if ( ischat && !verified ) namecontaineratchat?.appendChild(verifiedelement)
    if ( ispost && !verified ) namecontaineratpost?.appendChild(verifiedelement)
    if ( editbutton ) {
      if ( !verifiedatmypost ) namecontaineratmypost?.appendChild(verifiedelement)
      if ( !verifiedatmypostagain ) {
        namecontaineratmypostagain?.appendChild(verifiedelement)
        namecontaineratmypostagain?.setAttribute('style', 'margin-right: 10px;') // .style?.marginRight = '10px'
      }
    }
  } catch (e) {
    console.warn('Page not ready!')
  }

}

setInterval(showfakeverified, 1000)

let collected, allpost, maininterval, rowcontainer, limit, filter

async function hold (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

maininterval = setInterval(checkifsorterandrepostbuttonexists, 100)

function checkifsorterandrepostbuttonexists () {
  // profile header exists mean, the client is in the user profile page
  const profileheader = document.querySelector('section > main > div > header')

  // there's no repost and sorter button parents mean the client is not in the user profile
  if ( !profileheader ) return

  // partent element of like, comment, and share buttons after comment list in the post pop up
  const repostbuttonparent = document.querySelector('span.x972fbf.xcfux6l.x1qhh985.xm0m39n.x1rg5ohu.xln7xf2.xk390pu.xdj266r.x1sre0sj.xat24cr.x1gryazu.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x11njtxf')

  const repostbutton = document.querySelector('#instar-repost-button')
  const sorterbutton = document.querySelector('#instar-sorter-button')
  
  // repost button's parent exists but there's no repost button. the client is not opening the post yet. keep interval and wait for it
  if ( repostbuttonparent && !repostbutton ) appendrepostbutton()
  
  // sorter button's parent exists but there's no sorter button mean it's not appended yet, so append it
  if ( !sorterbutton ) appendsorterbutton()

  // if client open the post, repost button should be showed after save button. then, stop the interval and create another interval for checking if post closed
  if ( repostbutton ) {
    if ( maininterval ) clearInterval(maininterval)
    maininterval = setInterval(checkifpostclosed, 100)
  }
}

function checkifpostclosed () {
  const repostbutton = document.querySelector('#instar-repost-button')

  // if there's no repost button mean, 
  if ( !repostbutton ) {
    clearInterval(maininterval)
    maininterval = setInterval(checkifsorterandrepostbuttonexists, 100)
  }

}

async function loopboxes (box, storage=[]) {

  /**
   * row class: _ac7v xzboxd6 xras4av xgc1b0m
   */

  if ( storage.length >= limit ) return storage

  const currentbox = box ?? document.querySelector(`section > main > div > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(1)`)

  if ( !currentbox ) return storage

  let nextbox = currentbox.nextElementSibling

  const username = window.location.pathname.split('/')?.[1]
  const boxlink = currentbox.firstElementChild

  // if ( !boxlink ) return await loopboxes(nextbox, storage)

  const linkhref = boxlink?.getAttribute('href')
  const linktype = linkhref?.split('/')?.[1]

  const key = linkhref?.split('/')[2]

  const localitem = localStorage.getItem(username)

  let info

  if ( key && localitem ) try {
    info = JSON.parse(localitem)[key]
  } catch (e) {
    console.log('Failed to parse local item')
  }
  
  if ( key && linkhref && !info ) try {
    const newinfodata = await fetchinfo(linkhref)
    if ( !newinfodata ) return await loopboxes(nextbox, storage)

    let userdatajson = localStorage.getItem(username)

    if ( !userdatajson ) userdatajson = '{}'

    const userdata = JSON.parse(userdatajson)

    userdata[key] = newinfodata

    const updateduserdatajson = JSON.stringify(userdata)

    localStorage.setItem(username, updateduserdatajson)
    info = newinfodata
  } catch (e) {
    console.error('Failed to fetch post info')
    throw new Error(e)
  }

  const likes = info?.likes
  const comments = info?.comments
  
  if ( (likes || comments) && ((filter == linktype) || !filter || filter == 'all') ) {
    storage.push({
      id: key,
      likes: parseInt(likes),
      comments: parseInt(comments),
      element: currentbox
    })
    console.log('Progress:', storage.length + '/' + (limit > allpost ? allpost : limit), key, 'has', likes, 'likes and', comments, 'comments', info)
  } else console.log('Skipping this box')

  if ( nextbox ) return await loopboxes(nextbox, storage)

  console.log('Next row')

  const nextrow = currentbox.parentElement.nextElementSibling

  if ( nextrow ) return await loopboxes(nextrow.firstElementChild, storage)

  console.log('Scrolling...')
  
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })

  let nextrowafterscroll, intervalwaitingfornexrow, end
  
  const timeoutfornextrow = setTimeout(_ => end = true, 5000)
  
  await new Promise(resolve => {
    intervalwaitingfornexrow = setInterval(_ => {
      nextrowafterscroll = currentbox.parentElement.nextElementSibling
      if ( nextrowafterscroll || end ) {
        clearInterval(intervalwaitingfornexrow)
        clearTimeout(timeoutfornextrow)
        resolve()
      } else {
        console.log('Waiting for next row...')
      }
    }, 1000)
  })

  console.log('Next row after scroll')

  return end ? storage : await loopboxes(nextrowafterscroll.firstElementChild, storage)

}

async function populaterowcontainer (data, rowcontainer, row, lcr=0) {

  const currentdata = data.shift()

  if ( !currentdata ) return

  if ( lcr == 0 ) {
    row = document.createElement('div')
    row.setAttribute('class', '_ac7v xzboxd6 xras4av xgc1b0m')
    rowcontainer.appendChild(row)
  }

  const element = currentdata.element
  const overlay = document.createElement('div')
  const likes = currentdata.likes.toString().split('').reverse().join('').replace('000000', 'M').replace('000', 'K').split('').reverse().join('')
  const comments = currentdata.comments.toString().split('').reverse().join('').replace('000000', 'M').replace('000', 'K').split('').reverse().join('')

  overlay.setAttribute('class', '_ac2d')
  overlay.setAttribute('style', "background: rgba(0, 0, 0, 0.3);")
  overlay.innerHTML = `
  <ul class="_abpo" style="display: block; position: relative; top: 10px; left: 10px;">
    <li class="_abpm">
      <span class="x1xlr1w8" dir="auto" style="position: relative; top: 4px;">
        <span class="html-span xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1hl2dhg x16tdsg8 x1vvkbs">${likes}</span>
      </span>
      <span class="_abpn _9-j_"></span>
    </li>
    <li class="_abpm">
      <span class="x1xlr1w8" dir="auto" style="position: relative; top: 4px;">
        <span class="html-span xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1hl2dhg x16tdsg8 x1vvkbs">${comments}</span>
      </span>
      <span class="_abpn _9-k0"></span>
    </li>
  </ul>
  `

  element.firstElementChild.appendChild(overlay)

  row.appendChild(element)

  lcr++

  if ( lcr == 3 ) lcr = 0

  return populaterowcontainer(data, rowcontainer, row, lcr)

}

async function resetsorted (rowsarray) {

  const currentrow = rowsarray.pop()

  if ( !currentrow ) return console.log('Post order reseted')

  const overlays = currentrow.querySelectorAll('div > a > div._ac2d')

  for ( let overlay of overlays ) overlay.remove()

  const mainchild = document.querySelector('section > main > div')
  const rowcontainer = mainchild.lastElementChild.firstElementChild

  rowcontainer.prepend(currentrow)

  return await resetsorted(rowsarray)

}

async function sort (field) {

  /**
  * commentlistcontainer: div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul
  * commenter:            ul > div > li > div > div > div._a9zr > h3 > div > span > div > a
  * replyexpander:        ul > li > ul > li > div > button
  * loadmorecomments:     div > div > li > div > button
  * hiddencomments:       div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.x16n37ib > div > div > div
  */

  const sorted = document.querySelector('#sorted')

  if ( sorted ) {
    const sortedrows = sorted.querySelectorAll('div._ac7v.xzboxd6.xras4av.xgc1b0m')
    const divider = sorted?.parentElement?.parentElement?.querySelector('hr')
    const rowsarray = [...sortedrows]

    resetsorted(rowsarray)

    // for ( let sortedrow of sortedrows ) sortedrow.remove()

    sorted?.parentElement?.remove()
    divider?.remove()

    console.log('Reseting...')

    await hold(1000)

    return sort(field)
  }


  const starttime = performance.now()

  const allpostelement = document.querySelector('header > section > ul > li:nth-child(1)')
  
  allpost = parseInt(allpostelement.innerText.split(' ')[0].replace(',', '').replace('.', ''))
  limit = localStorage.getItem('limit') ?? 999999
  filter = localStorage.getItem('filter')

  console.log('Sorting', (limit > allpost ? allpost : limit) + '/' + allpost, 'posts by', field)

  const boxes       = await loopboxes()

  if ( !boxes ) return console.error('Cannot sort posts!')

  const sortedboxes = boxes.sort((a, b) => b[field] - a[field])

  window.scrollTo({ top: 0, behavior: 'smooth' })
  
  const tablist       = document.querySelector('div.x6s0dn4.x5ur3kl.x13fuv20.x178xt8z.x1w9h7q7.x78zum5.x1pg5gke.x1s688f.xl56j7k.x1r0g7yl.x2b8uid.xtvhhri')
  const div           = document.createElement('div')
  const rowcontainer  = div.cloneNode(true)
  
  rowcontainer.setAttribute('id', 'sorted')
  rowcontainer.setAttribute('style', 'display: flex; flex-direction: column; padding-bottom: 0px; padding-top: 0px; position: relative;')
  div         .appendChild(rowcontainer)
  tablist     .insertAdjacentElement('afterend', div)

  await populaterowcontainer(sortedboxes, rowcontainer)

  const hr = document.createElement('hr')

  hr.style.borderColor = 'white'
  hr.style.height  = '4px'
  hr.style.marginBottom = '12px'

  rowcontainer.appendChild(hr)
  div.insertAdjacentElement('afterend', hr)

  const originalrows = document.querySelectorAll('section > main > div > div:nth-child(6) > div > div')

  console.log('Removing elements that has no childs')
  
  for ( let originalrow of originalrows ) {
    if ( !originalrow.firstElementChild ) originalrow.remove()
  }

  const endtime = performance.now()
  const elapsedtime = endtime - starttime

  return console.log('Sorting', (limit > allpost ? allpost : limit) + '/' + allpost, 'posts by', field, 'finished in', elapsedtime, 'miliseconds')
}

async function fetchinfo (pathname) {

  const response = await fetch(pathname)
  const text = await response.text()

  const username = text.split('(&#064;')?.[1]?.split(')')?.[0]

  if ( !username ) return

  const time = text.split(' ' + username)?.[1]?.split(':')?.[0]?.replace('on', '')?.trim()
  
  let [likes, comments] = text.split('name="description" content="')?.[1]?.split('-')?.[0]?.trim()?.split(', ')

  likes = likes.split(' ')?.[0]?.replace(/,/g, '').toLowerCase().replace('k', '000').replace('m', '000000').replace('rb', '000').replace('jt', '000000')
  comments = comments.split(' ')?.[0]?.replace(/,/g, '').toLowerCase().replace('k', '000').replace('m', '000000').replace('rb', '000').replace('jt', '000000')

  if ( !likes ) console.log('Text:', text)

  return { username, time, likes, comments }

}

// appending the repost button right after share button in the client action section
async function appendrepostbutton () {

  const fakesorterbuttoncreated = document.querySelector('#fake-instar-sorter-button')
  const followbutton = document.querySelector('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1i64zmx.x1n2onr6.x1plvlek.xryxfnj.x1iyjqo2.x2lwn1j.xeuugli.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > button')

  if ( !followbutton && fakesorterbuttoncreated ) return

  const videotag = document.querySelector('article > div > div._aatk._aatl > div > div > div > div > div > div > div > video')
  
  videotag ?. setAttribute('controls', 'true')
  videotag ?. nextElementSibling ?. setAttribute('hidden', 'true')
  
  const repostbuttonparent = document.querySelector('span.x972fbf.xcfux6l.x1qhh985.xm0m39n.x1rg5ohu.xln7xf2.xk390pu.xdj266r.x1sre0sj.xat24cr.x1gryazu.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x11njtxf')
  const repostbutton = document.createElement('div')
  const downloadbutton = repostbutton.cloneNode(true)
  const copybutton = repostbutton.cloneNode(true)
  const updatebutton = repostbutton.cloneNode(true)

  repostbutton.innerHTML = `
  <div aria-disabled="false" role="button" tabindex="0" style="cursor: pointer;">
    <div class="x1i10hfl x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x6s0dn4 xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x1ypdohk x78zum5 xl56j7k x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xcdnw81" role="button" tabindex="0">
      <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k">
        <svg aria-label="Repost" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" role="img" width="24" height="24" viewBox="0 0 18 18">
          <title>Repost</title>
          <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z"/>
        </svg>
      </div>
    </div>
  </div>
  `
  repostbutton.addEventListener('click', async e => {
    console.log('Repost...')
    await repost()
  })

  downloadbutton.innerHTML = `
  <div aria-disabled="false" role="button" tabindex="0" style="cursor: pointer;">
    <div class="x1i10hfl x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x6s0dn4 xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x1ypdohk x78zum5 xl56j7k x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xcdnw81" role="button" tabindex="0">
      <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k">
        <svg aria-label="Download media" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" role="img" width="24" height="24" viewBox="0 0 18 18">
          <title>Download media</title>
          <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"/>
          <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"/>
        </svg>
      </div>
    </div>
  </div>
  `
  downloadbutton.addEventListener('click', async e => {
    console.log('Downloading media...')
    const href = window.location.href + 'embed/captioned'
    const res = await fetch(href)
    const text = await res.text()
    const video = text.split('video_url')?.[1]?.split('"')?.[2].replace(/\\/g, '')
    console.log('URL:', video)
    const filename = window.location.pathname.split('/')[2] + '.mp4'
    await new Promise(resolve => {
      chrome.runtime.sendMessage({ action: "downloadmedia", url: video, filename: filename }, function(response) {
        if (response && response.success) {
          console.log('File downloaded')
          resolve()
        } else {
          console.error("Failed to initiate download");
        }
      })
    })
  })

  copybutton.innerHTML = `
  <div aria-disabled="false" role="button" tabindex="0" style="cursor: pointer;">
    <div class="x1i10hfl x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x6s0dn4 xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x1ypdohk x78zum5 xl56j7k x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xcdnw81" role="button" tabindex="0">
      <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k">
        <svg aria-label="Copy caption" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" role="img" width="24" height="24" viewBox="0 0 18 18">
          <title>Copy caption</title>
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
        </svg>
      </div>
    </div>
  </div>
  `
  copybutton.addEventListener('click', async e => {
    console.log('copying caption...')
    const captionelement = document.querySelector('li > div > div > div._a9zr > div._a9zs > h1')
    const caption = captionelement?.innerText
    if ( captionelement ) {
      console.log('Copying caption to clipboard')
      navigator.clipboard.writeText(caption)
    }
  })

  updatebutton.innerHTML = `
  <div aria-disabled="false" role="button" tabindex="0" style="cursor: pointer;">
    <div class="x1i10hfl x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x6s0dn4 xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x1ypdohk x78zum5 xl56j7k x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xcdnw81" role="button" tabindex="0">
      <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k">
        <svg aria-label="Reload data" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" role="img" width="24" height="24" viewBox="0 0 18 18">
          <title>Reload data</title>
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
        </svg>
      </div>
    </div>
  </div>
  `
  updatebutton.addEventListener('click', async e => {
    console.log('Updating data...')
    const username = window.location.pathname.split('/')?.[1]
    localStorage.removeItem(username)
  })

  repostbutton.setAttribute('id', 'instar-repost-button')
  repostbutton.setAttribute('class', 'instar-repost-button')
  repostbutton.setAttribute('style', 'display: flex; align-items: center; cursor: pointer;')

  downloadbutton.setAttribute('id', 'instar-download-button')
  downloadbutton.setAttribute('class', 'instar-download-button')
  downloadbutton.setAttribute('style', 'display: flex; align-items: center; cursor: pointer;')

  copybutton.setAttribute('id', 'instar-copy-button')
  copybutton.setAttribute('class', 'instar-copy-button')
  copybutton.setAttribute('style', 'display: flex; align-items: center; cursor: pointer;')

  updatebutton.setAttribute('id', 'instar-copy-button')
  updatebutton.setAttribute('class', 'instar-copy-button')
  updatebutton.setAttribute('style', 'display: flex; align-items: center; cursor: pointer;')
  
  repostbuttonparent.setAttribute('style', 'display: flex; justify-content: flex-end; padding-right: 10px;')
  
  repostbuttonparent.appendChild(repostbutton)

  if ( videotag ) repostbuttonparent.appendChild(downloadbutton)

  repostbuttonparent.appendChild(copybutton)
  repostbuttonparent.appendChild(updatebutton)
}

async function appendsorterbutton () {

  // taking follow button
  const sorterparent = document.querySelector('main > div > header > section > div.xxz05av.xkfe5hh') // define sorter parent
  const originalfollowbutton = document.querySelector('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1i64zmx.x1n2onr6.x1plvlek.xryxfnj.x1iyjqo2.x2lwn1j.xeuugli.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > button')

  if ( !originalfollowbutton ) {
    const fakesorterbuttoncreated = document.querySelector('#fake-instar-sorter-button')

    if ( fakesorterbuttoncreated ) return

    const profilecontainer = document.querySelector('section > main > div')

    profilecontainer.style.maxWidth = '1000px'
    
    // alert('Sorry, You cannot use it right now :( Self arranger feature of Instar is being developed :)')

    const fakesorterbutton = document.createElement('div')
    
    fakesorterbutton.setAttribute('id', 'fake-instar-sorter-button')
    fakesorterbutton.setAttribute('style', 'display: none;')
    document.body.appendChild(fakesorterbutton)

    return
  }

  const likessorterbutton = document.createElement('div') // new elements for like sorter
  const likessorterbuttonchild = originalfollowbutton.cloneNode(true); // cloning follow button for like sorter child
  const commentssorterbutton = document.createElement('div') // new elements for comments sorter
  const commentssorterbuttonchild = originalfollowbutton.cloneNode(true); // cloning follow button for comments sorter child
  const limitsorterbutton = document.createElement('div')
  const filtersorterbutton = document.createElement('div')
  const updatedatabutton = document.createElement('div')
  
  // setting attributes and content of likes sorter
  likessorterbutton.setAttribute('class', 'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1i64zmx x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1')
  likessorterbutton.setAttribute('style', 'position: relative; right: 8px;')
  likessorterbuttonchild.innerHTML = 'Sort likes'
  likessorterbuttonchild.setAttribute('id', 'likes-sorter-button')
  likessorterbuttonchild.addEventListener('click', async e => {
    await sort('likes')
  })
  likessorterbutton.appendChild(likessorterbuttonchild) // append likes sorter child into likes shorter button

  // setting attributes and content of comments sorter
  commentssorterbutton.setAttribute('class', 'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1i64zmx x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1')
  commentssorterbutton.setAttribute('style', 'position: relative; right: 8px;')
  commentssorterbuttonchild.innerHTML = 'Sort comments'
  commentssorterbuttonchild.setAttribute('id', 'comments-sorter-button')
  commentssorterbuttonchild.addEventListener('click', async e => {
    await sort('comments')
  })
  commentssorterbutton.appendChild(commentssorterbuttonchild) // append comments sorter child into comments shorter button

  const currentlimit = localStorage.getItem('limit')

  // setting attributes and content of comments sorter
  limitsorterbutton.setAttribute('class', 'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1i64zmx x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1')
  limitsorterbutton.setAttribute('style', 'position: relative; right: 8px;')
  limitsorterbutton.innerHTML = `
  <select name="" id="sorter-limiter">
    <option value="999999">Unlimited</option>
    <option value="3" ${currentlimit == 3 ? 'selected':''}>Top 3</option>
    <option value="6" ${currentlimit == 6 ? 'selected':''}>Top 6</option>
    <option value="9" ${currentlimit ==  9 ? 'selected':''}>Top 9</option>
    <option value="12" ${currentlimit == 12 ? 'selected':''}>Top 12</option>
    <option value="15" ${currentlimit == 15 ? 'selected':''}>Top 15</option>
    <option value="18" ${currentlimit == 18 ? 'selected':''}>Top 18</option>
    <option value="21" ${currentlimit == 21 ? 'selected':''}>Top 21</option>
    <option value="24" ${currentlimit == 24 ? 'selected':''}>Top 24</option>
    <option value="27" ${currentlimit == 27 ? 'selected':''}>Top 27</option>
    <option value="30" ${currentlimit == 30 ? 'selected':''}>Top 30</option>
  </select>
  `

  filtersorterbutton.setAttribute('class', 'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1i64zmx x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1')
  filtersorterbutton.setAttribute('style', 'position: relative; right: 8px;')
  filtersorterbutton.innerHTML = `
  <select name="" id="sorter-filter">
    <option value="all" selected>All</option>
    <option value="p">Images</option>
    <option value="reel">Videos</option>
  </select>
  `

  updatedatabutton.setAttribute('class', 'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1i64zmx x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1')
  updatedatabutton.setAttribute('style', 'position: relative; right: 8px;')
  updatedatabutton.innerHTML = `
  <button id="sorter-updater">
    <svg aria-label="Reload data" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" role="img" width="20" height="20" viewBox="0 0 15 15">
      <title>Reload data</title>
      <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
    </svg>
  </button>
  `

  sorterparent.setAttribute('id', 'instar-sorter-button')
  sorterparent.setAttribute('style', 'display: flex; margin-top: 10px;')
  sorterparent.appendChild(likessorterbutton)
  sorterparent.appendChild(commentssorterbutton)
  sorterparent.appendChild(limitsorterbutton)
  sorterparent.appendChild(filtersorterbutton)
  sorterparent.appendChild(updatedatabutton)

  const sorterlimiter = document.querySelector('#sorter-limiter')

  sorterlimiter.setAttribute('class', ' _acan _acap _acas _aj1- _ap30')
  sorterlimiter.addEventListener('change', function () {
    alert('limit changed to ' + this.value)
    localStorage.setItem('limit', parseInt(this.value))
  })

  const sorterfilter = document.querySelector('#sorter-filter')

  sorterfilter.setAttribute('class', ' _acan _acap _acas _aj1- _ap30')
  sorterfilter.addEventListener('change', function () {
    alert('Filter by ' + (this.value == 'p' ? 'images' : this.value == 'all' ? 'All' : 'videos'))
    localStorage.setItem('filter', this.value)
  })

  const sorterupdater = document.querySelector('#sorter-updater')
  sorterupdater.setAttribute('class', ' _acan _acap _acas _aj1- _ap30')
  sorterupdater.addEventListener('click', function () {
    console.log('Updating data')
    const username = window.location.pathname.split('/')?.[1]
    localStorage.removeItem(username)
    localStorage.setItem(username, '{}')
    console.log('Oldest data cleared!')
  })
}

async function collectimages (srcs=[]) {

  const imgs = document.querySelectorAll('div > div > div > div > div._aagv > img')
  
  for ( let img of imgs ) {
    const src = img.getAttribute('src')
    if ( !srcs.includes(src) ) srcs.push(src)
  }

  const nextimagebutton = document.querySelector('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x10l6tqk.x1ey2m1c.x13vifvy.x17qophe.xds687c.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div > button[aria-label="Next"]')

  await hold(1000)

  if ( nextimagebutton ) {
    nextimagebutton.click()
    return collectimages(srcs)
  }

  return srcs
}

async function repostimage () {

  const collectedimages = await collectimages()
  const caption = document.querySelector('div._a9zs > h1').innerText

  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ images: collectedimages, caption })
  }

  const response = await fetch('http://localhost:4120/repost-image', options)
  const json = await response.json()

  console.log('JSON:', json)

  alert('Finished!')

}

async function repostvideo () {

  const likeselement = document.querySelector('section.x12nagc.x182iqb8.x1pi30zi.x1swvt13 > div > div > span > a')
  const likeshref = likeselement.getAttribute('href')
  const postid = likeshref.split('/')[2]
  const boxatag = document.querySelector(`a[href="/reel/${postid}/"]`)
  const boximgtag = boxatag.querySelector('img')
  const thumbnail = boximgtag.getAttribute('src')
  const captionelement = document.querySelector('li > div > div > div._a9zr > div._a9zs > h1')
  const caption = captionelement?.innerText?.split('\n\n')?.slice(1)?.join('\n\n') ?? ''

  const url = window.location.href.split('?')[0]

  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url, thumbnail, caption })
  }

  console.log('Publishing video')

  const response = await fetch('http://localhost:4120/repost-video', options)
  const json = await response.json()

  console.log('JSON:', json)

  alert('Finished!')

}

async function manualpost (videourl) {

  console.log('Trying manual post')

  const captionelement = document.querySelector('li > div > div > div._a9zr > div._a9zs > h1')
  const caption = captionelement?.innerText?.split('\n\n')?.slice(1)?.join('\n\n') ?? ''
  
  if ( captionelement ) {
    console.log('Copying caption to clipboard')
    navigator.clipboard.writeText(caption)
  }
  const filename = window.location.pathname.split('/')[2] + '.mp4'
  await new Promise(resolve => {
    chrome.runtime.sendMessage({ action: "downloadmedia", url: videourl, filename: filename }, function(response) {
      // Callback to indicate that the download is complete
      if (response && response.success) {
        console.log('File downloaded')
        resolve()
      } else {
        console.error("Failed to initiate download");
      }
    })
  })

  // =====================

  const xbuttonfirst = document.querySelector('div.x160vmok.x10l6tqk.x1eu8d0j.x1vjfegm > div')

  xbuttonfirst.click()

  await hold(1000)

  const createbutton = document.querySelector('div.x1iyjqo2.xh8yej3 > div:nth-child(7) > div > span > div > a')

  createbutton.click()

  await hold(1000)

  const selectfromcomputerbutton = document.querySelector('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.xqui205.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x6s0dn4.x1oa3qoh.x1nhvcw1 > div > button')

  selectfromcomputerbutton.click()

  await hold(1000)

  const cropbutton = document.querySelector('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1xmf6yo.x1emribx.x1e56ztr.x1i64zmx.x10l6tqk.x1ey2m1c.x17qophe.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div > div:nth-child(2) > div > button')

  cropbutton.click()

  await hold(1000)

  const originalbutton = document.querySelector('div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1y1aw1k.x1sxyh0.xwib8y2.xurb0ha.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div > div:nth-child(1)')

  originalbutton.click()

  await hold(1000)

  const nexttoeditbutton = document.querySelector('div > div > div > div > div > div > div > div._ap97 > div > div > div > div._ac7b._ac7d > div > div')

  nexttoeditbutton.click()

  await hold(1000)

  const nexttocaptioninputbutton = document.querySelector('div > div > div > div > div > div > div > div._ap97 > div > div > div > div._ac7b._ac7d > div > div')

  nexttocaptioninputbutton.click()

  await hold(1000)

  await new Promise(resolve => {
    const intervalcheckingforcaption = setInterval(_ => {
      const captioncontent = document.querySelector('div > div > div > div._ac2p > div:nth-child(2) > div > div.x6s0dn4.x78zum5.x1n2onr6.xh8yej3 > div > p > span')
      if ( captioncontent ) {
        clearInterval(intervalcheckingforcaption)
        resolve()
      }
    })
  })

  const sharebutton = document.querySelector('div > div > div > div > div > div > div > div._ap97 > div > div > div > div._ac7b._ac7d > div > div')

  sharebutton.click()

  await new Promise(resolve => {
    const intevalcheckingforsuccess = setInterval(_ => {
      const successstatus = document.querySelector('div.x6s0dn4.x78zum5.x5yr21d.xl56j7k.x1n2onr6.xh8yej3 > div > div:nth-child(2) > div > span')
      if ( successstatus ) {
        clearInterval(intevalcheckingforsuccess)
        resolve()
      }
    })
  })

  const xbutton = document.querySelector('div.x160vmok.x10l6tqk.x1eu8d0j.x1vjfegm > div')

  xbutton.click()

  await hold(1000)

  window.location.reload()

}

async function repost () {

  const img = document.querySelector('div > div > div > div > div._aagv > img')

  return img ? repostimage() : repostvideo()
}
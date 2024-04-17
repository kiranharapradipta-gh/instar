/**
 * write scripts here
 */

const text = document.querySelector('div#text')
const hold = async ms => await new Promise(resolve => setTimeout(resolve, ms))
const abcd = 'abcdefghijklmnopqrstuvwxyz'

const texts = [
  'instagram: kiranharapradipta.ig',
  'facebook: kiranharapradipta.fb',
  'github: kiranharapradipta-gh',
  'npm: kiranharapradipta.npm'
]

/**
 * looping texts array
 * @param {number} x - for indexing texts array
 * @returns this
 */
async function looptext (x=0) {
  
  const currenttext = texts[x]

  if ( !currenttext ) return looptext(0)

  text.innerHTML = ''

  await writetext(currenttext)
  await hold(1000)
  await deletetext()
  await hold(1000)

  return looptext(x+1)

}

/**
 * writing text char by char
 * @param {string} currenttext - texts array with specified index
 * @param {text} written - text that written on div with id text
 * @param {number} x - for indexing current text
 * @returns this | typo | nothing
 */
async function writetext (currenttext, written='', x=0) {

  const currentchar = currenttext[x]
  const currentms = new Date().getSeconds()
  const repeater = Math.floor(Math.random() * 4) + 1

  if ( [0, 5].includes(parseInt(currentms.toString()[1])) ) await typo(written, repeater)

  written += currentchar

  if ( !currentchar ) return

  text.innerText = written

  await hold(100)

  return await writetext(currenttext, written, x+1)

}

/**
 * write random char
 * @param {string} written - written text
 * @param {number} repeater - how often should be typo
 * @param {number} x - for indexing written
 * @returns this | resolve
 */
async function typo (written, repeater, x=0) {

  const randomnumber = Math.floor(Math.random() * 10)

  text.innerText = written += abcd[randomnumber]

  await hold(100)

  if ( x < repeater ) return await typo(written, repeater, x+1)

  return await resolve(written, repeater)

}

/**
 * resolve typo by deleting the latest random char
 * @param {string} written - written text
 * @param {number} repeater - how often should be type
 * @param {number} x - for indexing written
 * @returns this | nothing
 */
async function resolve (written, repeater, x=0) {

  written = written.slice(0, -1)

  text.innerText = written

  await hold(100)

  if ( x < repeater ) return await resolve(written, repeater, x+1)

  return

}

/**
 * delete written text
 * @returns this | nothing
 */
async function deletetext () {
  
  const written = text.innerText

  if ( written == '' ) return

  text.innerText = written.slice(0, -1)

  await hold(40)

  return deletetext()

}

looptext()
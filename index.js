const express = require('express')
const Instagram = require('instagram-web-api')

require('dotenv').config()

const app = express()

const port = process.env.PORT || 4000

const logintoinstagram = _ => {
  
  const client = new Instagram({
    username: process.env.INSTAGRAMUSERNAME,
    password: process.env.INSTAGRAMPASSWORD
  })

  console.log(client)

  client.login().then(_ => {
    client.getProfile().then(console.log)
  })

  // client.login().then(_ => {
  //   console.log('Login finished')
  //   // client.getProfile().then(console.log)
  // })

  // const posttoinstagram = async _ => {
  //   await client.getPhotosByUsername({ username: process.env.INSTAGRAMUSERNAME }).then(res => console.log(res))
  // }

  // posttoinstagram()
}

logintoinstagram()

app.listen(port, _ => console.log(`Listening on port ${port}...`))
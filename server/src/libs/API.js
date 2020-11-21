import express from 'express'
import path from 'path'
import cors from 'cors'
import log from '../utils/log'
const fs = require('fs')
var proxy = require('express-http-proxy');  

const initExpress = () => {
  var subjects = {
    MainChat: [],
    CrewChat: []
  }
  const app = express()
  const dev = process.env.NODE_ENV === 'development'
  app.use('/api/media-server', proxy('localhost:8000'))

  app.use(cors())

  app.get('/dist/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/bundle.js'))
  })

  app.get('/chats/*', (req, res) => {
    var url = req.originalUrl.replace(/\?.*$/, '').split("/")[2]
    if (req.query.message) {
      let date_ob = new Date();
      var messageContent = req.query.message
      var time = date_ob.getHours() + ":" + date_ob.getMinutes()
      var add_json = {date: time, content: messageContent}
      subjects[url].push(add_json)
      var logOutput = "Time: " + add_json.date + "Message: " + add_json.content + "Client IP: " + req.ip  
      log("Message:", "Client Side", logOutput)
    }
    if (req.query.delete) {
      var arrayToDelete = req.query.delete
      subjects[url].splice(arrayToDelete, 1)
    }
    res.json(subjects[url])
  })

  const port = 3000

  app.listen(port, () => {
    log('info', 'Client Side', `http://localhost:${port}`)
  })
}

export { initExpress }

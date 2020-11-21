import express from 'express'
import path from 'path'
import cors from 'cors'
import log from '../utils/log'
const fs = require('fs')
var proxy = require('express-http-proxy');  

const initMain = () => {
  const app = express()

  app.use('/live', proxy('localhost:8000', {
    proxyReqPathResolver: function (req) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var parts = req.url.split('?')
          var queryString = parts[1]
          var updatedPath = '/live' + parts[0]
          var resolvedPathValue = updatedPath + (queryString ? '?' + queryString : '')
          resolve(resolvedPathValue)
        }, 200)
      })
    }
  }))

  app.use('/Chats', proxy('localhost:3000', {
    proxyReqPathResolver: function (req) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var parts = req.url.split('?')
          var queryString = parts[1]
          var updatedPath = '/Chats' + parts[0]
          var resolvedPathValue = updatedPath + (queryString ? '?' + queryString : '')
          resolve(resolvedPathValue)
        }, 200)
      })
    }
  }))

  app.use(cors())

  app.get('/dist/*', (req, res) => {
    res.type('.js')
    fs.readFile(path.join(__dirname, 'main' + req.url), 'utf8', function (err, data) {
      if (err) throw err
      res.send(data)
    })
  })

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Main/index.html'))
  })

  const port = 80

  app.listen(port, () => {
    log('info', 'Client Side', `http://localhost:${port}`)
  })
}

export { initMain }

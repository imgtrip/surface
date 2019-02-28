const {join} = require('path')
const cookieParser = require('cookie-parser')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {

    const server = express()
    server.use(cookieParser())

    server.get('/', (req, res) => {
      app.render(req, res, '/images')
    })

    server.get('/dev', (req, res) => {
      if (!dev) {
        res.status(403)
      }

      app.render(req, res, '/dev')
    })

    server.get('/u/:id', (req, res) => {
      app.render(req, res, '/user-show')
    })

    server.get('/p', (req, res) => {
      app.render(req, res, '/posts')
    })
    server.get('/p/:id', (req, res) => {
      app.render(req, res, '/post-show')
    })

    server.get('/article', (req, res) => {
      app.render(req, res, '/articles')
    })
    server.get('/article/:id', (req, res) => {
      app.render(req, res, '/article-show')
    })

    server.get('/r', (req, res) => {
      app.render(req, res, '/reviews')
    })

    server.get('/a/:id', (req, res) => {
      if (req.params.id === '112') {
        // 兼容v1 about
        res.redirect(301, '/p/1')
        return
      }
      app.render(req, res, '/album-show')
    })

    server.get('/a', (req, res) => {
      app.render(req, res, '/albums')
    })

    server.get('/retrieve-password', (req, res) => {
      app.render(req, res, '/retrieve-password')
    })

    server.get('download', (req, res) => {
      app.render(req, res, '/download')
    })

    server.get('/d', (req, res) => {
      app.render(req, res, '/download')
    })
    server.get('/error/:code', (req, res) => {
      app.render(req, res, '/exception')
    })

    server.get('*', (req, res) => {
      const rootStaticFiles = [
        '/robots.txt',
        // '/sitemap.xml',
        // '/favicon.ico',
        '/jd_root.txt',
      ]

      if (rootStaticFiles.indexOf(req.url) > -1) {
        const path = join(__dirname, '..', 'static', req.url)
        res.sendFile(path)
      } else {
        return handle(req, res)
      }
    })

    server.listen(3000, (err) => {
      if (err) {
        throw err
      }
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
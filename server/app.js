import express from 'express'
import mongoose from 'mongoose'
import routes from './routes.js'
import bodyParser from 'body-parser'
import path from 'path'

mongoose.connect('mongodb://localhost:27017/healthcare', () => {
  console.log('Connected to mongodb HCB')
})

const app = express()
app.use(bodyParser.json())
//app.use('/api', routes)
//app.get('/', express.static(path.join(__dirname, '../dist')))
/*app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../dist/index.html'))
})*/
import React from 'react'
import ReactDOMServer, { renderToStringfrom } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Routes from '../src/components/routes/Routes'
import App from '../src/components/App/App'

app.get('*', (req, res, next) => {
  const context = {}
  const html = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App />
    </StaticRouter>
    )

    if (context.url) {
      res.writeHead(301, {
        Location: context.url
      })
      res.end()
    } else {
      res.write(`
        <!doctype html>
        <div id="app">${html}</div>
      `)
      res.end()
    }

});

export default app

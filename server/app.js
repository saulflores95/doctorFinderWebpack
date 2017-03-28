import express from 'express'
import mongoose from 'mongoose'
import routes from './routes.js'
import bodyParser from 'body-parser'
import path from 'path'

import React from 'react'
import {renderToString} from 'react-dom/server'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Routes from '../src/components/routes/Routes'

mongoose.connect('mongodb://localhost:27017/healthcare', () => {
  console.log('Connected to mongodb HCB')
})

const app = express()
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../dist')))

app.use('/api', routes)

app.use((req, res) => {
  const context = {}
  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <Routes />
    </StaticRouter>
  )

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(`
      <!DOCTYPE html>
      <div id="app">${html} click <a href='/'>here</></div>
    `)
    res.end()
  }

})

export default app

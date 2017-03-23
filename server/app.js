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
import {renderToString} from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router'
import Routes from '../src/components/routes/Routes'

app.get('*', (req, res, next) => {
  const context = createServerRenderContext();
  const html = renderToString(
      <ServerRouter
        location={req.url}
        context={context}
      >
        {({ location }) => <Layout location={location} />}
      </ServerRouter>
    )
  res.render('index', {html});
});

export default app

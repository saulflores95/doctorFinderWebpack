import express from 'express'
import mongoose from 'mongoose'
import routes from './routes.js'
import bodyParser from 'body-parser'

mongoose.connect('mongodb://localhost:27017/healthcare', () => {
  console.log('Connected to mongodb HCB')
})

const app = express()

app.use(bodyParser.json())
app.use('/api', routes)

export default app

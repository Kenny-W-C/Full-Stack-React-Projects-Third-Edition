import { createServer } from 'node:http'

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { Server } from 'socket.io'

import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import { handleSocket } from './socket.js'

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
  },
})
handleSocket(io)

app.use(cors())
app.use(bodyParser.json())

userRoutes(app)
postRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

export default server

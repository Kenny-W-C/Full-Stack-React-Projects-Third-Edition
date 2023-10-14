import { createServer } from 'node:http'

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { Server } from 'socket.io'

import userRoutes from './routes/users.js'

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
  },
})

app.use(cors())
app.use(bodyParser.json())

userRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

io.on('connection', (socket) => {
  console.log('user connected:', socket.id)
  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id)
  })
})

export default server

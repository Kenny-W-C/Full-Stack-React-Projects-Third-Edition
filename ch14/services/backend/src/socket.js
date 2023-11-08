import jwt from 'jsonwebtoken'

import { getUserInfoById } from './services/users.js'

export function handleSocket(io) {
  io.on('connection', (socket) => {
    const room = socket.handshake.query?.room ?? 'public'
    socket.join(room)

    socket.on('chat.message', (message) => {
      io.to(room).emit('chat.message', {
        username: socket.user.username,
        message,
      })
    })

    socket.on('user.info', async (socketId, callback) => {
      const sockets = await io.in(socketId).fetchSockets()
      if (sockets.length === 0) return callback(null)
      const socket = sockets[0]
      const userInfo = {
        socketId,
        rooms: Array.from(socket.rooms),
        user: socket.user,
      }
      return callback(userInfo)
    })
  })

  io.use((socket, next) => {
    if (!socket.handshake.auth?.token) {
      return next(new Error('Authentication failed: no token provided'))
    }
    jwt.verify(
      socket.handshake.auth.token,
      process.env.JWT_SECRET,
      async (err, decodedToken) => {
        if (err) {
          return next(new Error('Authentication failed: invalid token'))
        }
        socket.auth = decodedToken
        socket.user = await getUserInfoById(socket.auth.sub)
        return next()
      },
    )
  })
}

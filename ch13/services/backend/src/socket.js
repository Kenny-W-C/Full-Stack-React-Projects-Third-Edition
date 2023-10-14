export function handleSocket(io) {
  io.on('connection', (socket) => {
    console.log('user connected:', socket.id)

    socket.on('disconnect', () => {
      console.log('user disconnected:', socket.id)
    })

    socket.on('chat.message', (message) => {
      const chatMessage = `${socket.id}: ${message}`
      console.log(chatMessage)
      io.emit('chat.message', chatMessage)
    })
  })
}

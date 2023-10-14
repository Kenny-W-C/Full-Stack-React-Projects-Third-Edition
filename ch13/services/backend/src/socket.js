export function handleSocket(io) {
  io.on('connection', (socket) => {
    console.log('user connected:', socket.id)

    socket.on('disconnect', () => {
      console.log('user disconnected:', socket.id)
    })

    socket.on('chat.message', (msg) => {
      console.log('message:', msg)
    })
  })
}

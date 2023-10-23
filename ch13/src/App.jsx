import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { io } from 'socket.io-client'

import { AuthContextProvider } from './contexts/AuthContext.jsx'
import Blog from './pages/Blog.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'

const queryClient = new QueryClient()

const socket = io(import.meta.env.VITE_SOCKET_HOST, {
  query: window.location.search.substring(1),
  auth: {
    token: window.localStorage.getItem('token'),
  },
})

socket.on('connect', async () => {
  console.log('connected to socket.io as', socket.id)
  socket.emit('chat.message', 'hello from client')
  const userInfo = await socket.emitWithAck('user.info', socket.id)
  console.log('user info', userInfo)
})

socket.on('connect_error', (err) => {
  console.error('socket.io connect error:', err)
})

socket.on('chat.message', (message) => {
  console.log(message)
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Blog />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

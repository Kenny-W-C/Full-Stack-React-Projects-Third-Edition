import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import { useAuth } from '../contexts/AuthContext.jsx'
import { useSocket } from '../contexts/SocketIOContext.jsx'

import User from './User.jsx'

export default function Header() {
  const [token, setToken] = useAuth()
  const { socket } = useSocket()

  if (token) {
    const { sub } = jwtDecode(token)

    const handleLogout = () => {
      socket.disconnect()
      setToken(null)
    }

    return (
      <nav>
        Logged in as <User id={sub} />
        <br />
        <button onClick={handleLogout}>Logout</button>
      </nav>
    )
  }

  return (
    <nav>
      <Link to='/login'>Log In</Link> | <Link to='/signup'>Sign Up</Link>
    </nav>
  )
}

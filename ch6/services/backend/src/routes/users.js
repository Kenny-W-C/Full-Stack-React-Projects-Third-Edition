import { createUser, loginUser, getUserInfoById } from '../services/users.js'

export default function userRoutes(app) {
  app.post('/api/v1/user/signup', async (req, res) => {
    try {
      const user = await createUser(req.body)
      return res.status(201).json({ username: user.username })
    } catch (err) {
      console.error('error creating user', err)
      return res.status(500).end()
    }
  })

  app.post('/api/v1/user/login', async (req, res) => {
    try {
      const token = await loginUser(req.body)
      return res.status(200).send({ token })
    } catch (err) {
      console.error('error logging in user', err)
      return res.status(500).end()
    }
  })

  app.get('/api/v1/users/:id', async (req, res) => {
    try {
      const userInfo = await getUserInfoById(req.params.id)
      return res.status(200).send(userInfo)
    } catch (err) {
      console.error('error getting user info', err)
      return res.status(500).end()
    }
  })
}

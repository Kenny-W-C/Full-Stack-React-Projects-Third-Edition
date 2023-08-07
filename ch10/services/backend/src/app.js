import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import session from 'express-session'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(session({ secret: process.env.SESSION_SECRET }))

postRoutes(app)
userRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

export default app

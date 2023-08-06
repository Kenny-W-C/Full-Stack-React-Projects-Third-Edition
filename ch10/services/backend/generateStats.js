import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const databaseUrl = process.env.DATABASE_URL
const client = new MongoClient(databaseUrl)

const simulationStart = Date.now() - 1000 * 60 * 60 * 24 * 90
const simulationEnd = Date.now()
const simulatedSessions = 10000
const simulatedUsers = 50

async function generateStats() {
  await client.connect()
  console.log('successfully connected to database:', databaseUrl)
  const db = client.db()

  const posts = db.collection('posts')
  const allPosts = await posts.find().toArray()
  console.log(`found ${allPosts.length} posts`)

  const stats = db.collection('stats')
  await stats.deleteMany({})

  for (let sessionId = 0; sessionId < simulatedSessions; sessionId++) {
    const randomPost = allPosts[Math.floor(Math.random() * allPosts.length)]
    const randomUser = 'user' + Math.floor(Math.random() * simulatedUsers)
    const sessionStart =
      simulationStart + Math.random() * (simulationEnd - simulationStart)
    const sessionEnd = sessionStart + 1000 * Math.floor(Math.random() * 60 * 5)
    await stats.insertMany([
      {
        post: randomPost._id,
        user: randomUser,
        sessionId,
        action: 'startView',
        date: new Date(sessionStart),
      },
      {
        post: randomPost._id,
        user: randomUser,
        sessionId,
        action: 'endView',
        date: new Date(sessionEnd),
      },
    ])
  }
  const allStats = await stats.countDocuments()
  return `successfully created ${allStats} stats entries`
}

generateStats()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())

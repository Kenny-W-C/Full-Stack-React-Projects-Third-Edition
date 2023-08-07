import { trackEvent /*, getStatsByPostId */ } from '../services/events.js'
import { getPostById } from '../services/posts.js'

export default function eventRoutes(app) {
  app.post('/api/v1/events', async (req, res) => {
    try {
      const { postId, action } = req.body
      const post = await getPostById(postId)
      if (post === null) return res.status(400).end()
      const sessionId = req.sessionId
      await trackEvent({ postId, sessionId, action })
      return res.json({ ok: true })
    } catch (err) {
      console.error('error tracking action', err)
      return res.status(500).end()
    }
  })

  //   app.get('/api/v1/events/stats/:postId', async (req, res) => {
  //     try {
  //       const { postId } = req.params
  //       const stats = await getStatsByPostId(postId)
  //       return res.json(stats)
  //     } catch (err) {
  //       console.error('error getting stats', err)
  //       return res.status(500).end()
  //     }
  //   })
}

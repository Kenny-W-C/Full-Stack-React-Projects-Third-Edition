import { Stats } from '../db/models/stats.js'

export async function trackAction({ postId, userId, sessionId, action }) {
  const stats = new Stats({ post: postId, user: userId, sessionId, action })
  return await stats.save()
}

import { Event } from '../db/models/event.js'

export async function trackEvent({ postId, sessionId, action }) {
  const event = new Event({ post: postId, sessionId, action })
  return await event.save()
}

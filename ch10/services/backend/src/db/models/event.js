import mongoose, { Schema } from 'mongoose'

const eventsSchema = new Schema(
  {
    post: { type: Schema.Types.ObjectId, ref: 'post', required: true },
    sessionId: { type: String, required: true },
    action: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true },
  },
  { timestamps: true },
)

export const Event = mongoose.model('events', eventsSchema)

import mongoose, { Schema } from 'mongoose'

const statsSchema = new Schema(
  {
    post: { type: Schema.Types.ObjectId, ref: 'post', required: true },
    user: String,
    sessionId: { type: String, required: true },
    action: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true },
  },
  { timestamps: true },
)

export const Stats = mongoose.model('stats', statsSchema)

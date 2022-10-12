import mongoose, { Schema } from 'mongoose'

const positionSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   cost: {
      type: Number,
      required: true,
   },
   category: {
      ref: 'categories',
      type: Schema.Types.ObjectId,
   },
   user: {
      ref: 'users',
      type: Schema.Types.ObjectId,
   },
})

export const Positions = mongoose.model('positions', positionSchema)

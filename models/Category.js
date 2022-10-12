import mongoose, { Schema } from 'mongoose'

const categorySchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   imageSrc: {
      type: String,
      default: '',
   },
   user: {
      ref: 'users',
      type: Schema.Types.ObjectId,
   },
})

export const Categories = mongoose.model('categories', categorySchema)

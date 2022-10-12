import mongoose, { Schema } from 'mongoose'

const orderSchema = new mongoose.Schema({
   date: {
      type: Date,
      default: Date.now,
   },
   order: {
      type: Number,
      required: true,
   },
   list: [
      {
         name: {
            type: String,
         },
         quantity: {
            type: Number,
         },
         cost: {
            type: Number,
         },
      },
   ],
   user: {
      ref: 'users',
      type: Schema.Types.ObjectId,
   },
})

export const Orders = mongoose.model('orders', orderSchema)

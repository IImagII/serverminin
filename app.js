import express from 'express'
import authRoutes from './routes/auth.js'
import orderRoutes from './routes/order.js'
import categoryRoutes from './routes/category.js'
import positionRoutes from './routes/position.js'
import analyticsRoutes from './routes/analytics.js'
import bodyParser from 'body-parser'
import passport from 'passport'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import { mongoURI } from './config/keys.js'
import { jwtFunction } from './middleware/passport.js'
const app = express()

mongoose
   .connect(mongoURI)
   .then(() => console.log('MongoDB conected'))
   .catch(error => console.log(error))

app.use(passport.initialize())
jwtFunction(passport)

app.use(morgan('dev'))
app.use('/uploads', express.static('uploads'))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/position', positionRoutes)
app.use('/api/analytics', analyticsRoutes)

export default app

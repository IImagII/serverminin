import { Router } from 'express'
import passport from 'passport'
import { getAllOrder, createOrder } from '../controllers/order.js'
const router = Router()

//localhost:5000/api/order
router.get('/', passport.authenticate('jwt', { session: false }), getAllOrder)

//localhost:5000/api/order
router.post('/', passport.authenticate('jwt', { session: false }), createOrder)

export default router

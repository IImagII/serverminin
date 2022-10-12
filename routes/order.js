import { Router } from 'express'
import { getAllOrder, createOrder } from '../controllers/order.js'
const router = Router()

//localhost:5000/api/order
router.get('/', getAllOrder)

//localhost:5000/api/order
router.post('/', createOrder)

export default router

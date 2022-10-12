import { Router } from 'express'
import { overview, analytics } from '../controllers/analytics.js'
const router = Router()

//localhost:5000/api/analytics/overview
router.get('/overview', overview)

//localhost:5000/api/analytics/analytics
router.get('/analytics', analytics)

export default router

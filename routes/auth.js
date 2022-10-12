import { Router } from 'express'
import { login, register } from '../controllers/auth.js'
const router = Router()

//localhost:5000/api/auth/login
router.post('/login', login)

//localhost:5000/api/auth/register
router.post('/register', register)

export default router

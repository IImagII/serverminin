import { Router } from 'express'
import { getByCategoryId, createPosition, removePosition, updatePosition } from '../controllers/position.js'
const router = Router()

//localhost:5000/api/position/:category
router.get('/:categoryId', getByCategoryId)

//localhost:5000/api/position
router.post('/', createPosition)

//localhost:5000/api/position/:id
router.patch('/:id', removePosition)

//localhost:5000/api/position/:id
router.delete('/:id', updatePosition)

export default router

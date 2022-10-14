import { Router } from 'express'

import { getByCategoryId, createPosition, removePosition, updatePosition } from '../controllers/position.js'
const router = Router()

//localhost:5000/api/position/:category
router.get('/:categoryId', passport.authenticate('jwt', { session: false }), getByCategoryId)

//localhost:5000/api/position
router.post('/', passport.authenticate('jwt', { session: false }), createPosition)

//localhost:5000/api/position/:id
router.delete('/:id', passport.authenticate('jwt', { session: false }), removePosition)

//localhost:5000/api/position/:id
router.patch('/:id', passport.authenticate('jwt', { session: false }), updatePosition)

export default router

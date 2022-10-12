import { Router } from 'express'
import { getAll, getById, removeCategory, createCategory, updateCategory } from '../controllers/category.js'
import passport from 'passport'

const router = Router()

//localhost:5000/api/category
router.get('/', passport.authenticate('jwt', { session: false }), getAll)

//localhost:5000/api/category/:id
router.get('/:id', getById)

//localhost:5000/api/category/:id
router.delete('/:id', removeCategory)

//localhost:5000/api/category
router.post('/', createCategory)

//localhost:5000/api/category/:id
router.patch('/:id', updateCategory)

export default router

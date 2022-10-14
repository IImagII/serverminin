import { Router } from 'express'
import passport from 'passport'
import { getAll, getById, removeCategory, createCategory, updateCategory } from '../controllers/category.js'
import upload from '../middleware/upload.js'

const router = Router()

//localhost:5000/api/category
router.get('/', passport.authenticate('jwt', { session: false }), getAll)

//localhost:5000/api/category/:id
router.get('/:id', passport.authenticate('jwt', { session: false }), getById)

//localhost:5000/api/category/:id
router.delete('/:id', passport.authenticate('jwt', { session: false }), removeCategory)

//localhost:5000/api/category
router.post('/', passport.authenticate('jwt', { session: false }), upload.single('image'), createCategory)

//localhost:5000/api/category/:id
router.patch('/:id', passport.authenticate('jwt', { session: false }), upload.single('image'), updateCategory)

export default router

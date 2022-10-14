import { Categories } from '../models/Category.js'
import { Positions } from '../models/Position.js'
import { errorHandler } from '../utils/errorHandler.js'

///api/category(GET)
export async function getAll(req, res) {
   try {
      const categories = await Categories.find({
         user: req.user.id,
      })
      res.status(200).json(categories)
   } catch (e) {
      errorHandler(res, e)
   }
}
///api/category/:id(GET)
export async function getById(req, res) {
   try {
      const category = await Categories.findById(req.params.id)
      res.status(200).json(category)
   } catch (e) {
      errorHandler(res, e)
   }
}
///api/category/:id(DELETE)
export async function removeCategory(req, res) {
   try {
      await Categories.remove({ _id: req.params.id })
      await Positions.remove({ category: req.params.id })
      res.status(200).json({
         message: 'Категория была удалена',
      })
   } catch (e) {
      errorHandler(res, e)
   }
}
///api/category(POST)
export async function createCategory(req, res) {
   try {
      const category = await new Categories({
         name: req.body.name,
         imageSrc: req.file ? req.file.path : '',
         user: req.user.id,
      }).save()
      res.status(201).json(category)
   } catch (e) {}
}
///api/category/:id(Patch)
export async function updateCategory(req, res) {
   const updated = {
      name: req.body.name,
   }
   if (req.file) {
      updated.imageSrc = req.file.path
   }
   try {
      const category = await Categories.findOneAndUpdate({ _id: req.params.id }, { $set: updated }, { new: true })
      res.status(200).json(category)
   } catch (e) {
      errorHandler(res, e)
   }
}

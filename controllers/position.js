import { Positions } from '../models/Position.js'
import { errorHandler } from '../utils/errorHandler.js'

///api/position/:categoryId(GET)
export async function getByCategoryId(req, res) {
   try {
      const positions = await Positions.find({
         category: req.params.categoryId,
         user: req.user.id,
      })
      res.status(200).json(positions)
   } catch (e) {
      errorHandler(res, e)
   }
}
///api/position(POST)
export async function createPosition(req, res) {
   try {
      const position = await new Positions({
         name: req.body.name,
         cost: req.body.cost,
         category: req.body.category,
         user: req.user.id,
      }).save()

      res.status(200).json(position)
   } catch (e) {
      errorHandler(res, e)
   }
}
///api/position/:id(DELETE)
export async function removePosition(req, res) {
   try {
      await Positions.remove({
         _id: req.params.id,
      })
      res.status(200).json({
         message: 'Позиция была удалена',
      })
   } catch (e) {
      errorHandler(res, e)
   }
}
///api/position/:id(PATCH)
export async function updatePosition(req, res) {
   try {
      const position = await Positions.findOneIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
      res.status(200).json(position)
   } catch (e) {
      errorHandler(res, e)
   }
}

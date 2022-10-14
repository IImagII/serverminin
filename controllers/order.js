import { Orders } from '../models/Order.js'
import { errorHandler } from '../utils/errorHandler.js'

///api/order(GET)
//localhost:5000/api/order?offset=2&limit=5
export async function getAllOrder(req, res) {
   const query = {
      user: req.user.id,
   }
   //Дата старта
   if (req.query.start) {
      query.date = {
         //Больше или равно
         $gte: req.query.start,
      }
   }
   if (req.query.end) {
      if (!query.date) {
         query.date = {}
      }
      query.date['$lte'] = req.query.end
   }
   if (req.query.order) {
      query.order = +req.query.order
   }
   try {
      const orders = await Orders.find(query)
         .sort({ date: -1 })
         .skip(+req.query.offset)
         .limit(+req.query.limit)
      res.status(200).json(orders)
   } catch (e) {
      errorHandler(res, e)
   }
}
///api/order(POST)
export async function createOrder(req, res) {
   try {
      const lastOrder = await Orders.findOne({ user: req.user.id }).sort({ date: -1 })
      const maxOrder = lastOrder ? lastOrder.order : 0
      const order = await new Orders({
         user: req.user.id,
         list: req.body.list,
         order: maxOrder + 1,
      }).save()
      res.status(201).json(order)
   } catch (e) {
      errorHandler(res, e)
   }
}

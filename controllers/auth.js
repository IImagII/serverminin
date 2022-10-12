import bycrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../models/User.js'
import { jwtKey } from '../config/keys.js'

export async function login(req, res) {
   const candidate = await User.findOne({
      email: req.body.email,
   })
   if (candidate) {
      //Проверка пароля
      const passwordResult = bycrypt.compareSync(req.body.password, candidate.password)
      if (passwordResult) {
         //Мы должны сгенерировать токен
         const token = jwt.sign(
            {
               email: candidate.email,
               userId: candidate._id,
            },
            jwtKey,
            {
               expiresIn: 60 * 60,
            }
         )

         res.status(200).json({
            token: `Bearer ${token}`,
         })
      } else {
         //Пароли не совпадают
         res.status(401).json({
            message: 'Пароли не совпадают',
         })
      }
   } else {
      // Пользователя нет
      res.status(404).json({
         message: 'Такой email несуществует зарегестрируйтесь',
      })
   }
}

export async function register(req, res) {
   //email password
   const candidate = await User.findOne({
      email: req.body.email,
   })

   if (candidate) {
      //Пользователь существует, нужно выдать ошибку
      res.status(409).json({
         message: 'Такой email существует',
      })
   } else {
      //Создаем пользователя
      const salt = bycrypt.genSaltSync(10)
      const password = req.body.password
      const user = new User({
         email: req.body.email,
         password: bycrypt.hashSync(password, salt),
      })
      try {
         await user.save()
         res.status(201).json(user)
      } catch (e) {
         //обработать ошибку
         res.status(500).json({
            message: 'Сервер повис',
         })
      }
   }
}

import passport from 'passport'
import { Strategy as JwtStrategy } from 'passport-jwt'
import { ExtractJwt } from 'passport-jwt'
import { jwtKey } from '../config/keys.js'
import { User } from '../models/User.js'

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
//это наш секретный ключ который мы создали в папке config
opts.secretOrKey = jwtKey
// opts.issuer = 'accounts.examplesoft.com'
// opts.audience = 'yoursite.net'
export const jwtFunction = passport => {
   passport.use(
      new JwtStrategy(opts, async function (payload, done) {
         //берем нашу схему по авторизации из базы данных то есть делаем асинхронный запрос
         try {
            const user = await User.findById(payload.userId).select('email id')
            if (user) {
               done(null, user)
            } else {
               done(null, false)
            }
         } catch (err) {
            console.log(err)
         }
      })
   )
}

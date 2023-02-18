import {Router} from 'express'
import * as authController from '../controllers/auth.controller'
import {verifyToken} from '../middlewares/verifyToken'

const router = Router()

router.post('/signin', verifyToken,authController.signin)

router.post('/signup',authController.signup)

export default router
import express, { Request, Response } from 'express'
import  { register } from '../controller/userController'
const router = express.Router()
router.post('/register',register)
export default  router
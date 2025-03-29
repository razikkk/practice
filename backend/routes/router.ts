import express, { Request, Response } from 'express'
import  { addStudent,  register,getAllStudents, deleteStudent } from '../controller/userController'
const router = express.Router()
router.post('/register',register)
router.post('/addStudent',addStudent)
router.get('/getAllStudents',getAllStudents)
router.delete('/deleteStudent/:id',deleteStudent)
export default  router
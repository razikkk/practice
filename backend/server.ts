import express from 'express'
import router from '../backend/routes/router'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const port = 4000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:'http://localhost:5174',credentials:true}))
app.use('/',router)
mongoose.connect('mongodb://127.0.0.1:27017/practice').then(()=>{
    console.log('connect to mongo')
})
.catch((error)=>{
    console.log(error.message)
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
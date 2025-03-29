import { User } from '../model/userModel'
import bcrypt from 'bcrypt'
import express, { Request, Response } from 'express'

  export const register = async(req:Request,res:Response)=>{
    try {
        const {name,email,password} = req.body
        console.log(req.body)
        const existingUser = await User.findOne({email})
        if(existingUser){
             res.status(400).json({success:false,message:"User already exists"})
             return 
        }
        const hashPassword = await bcrypt.hash(password,10)
        const newUser =  new User({
            name,
            email,
            password:hashPassword
        })
         await  newUser.save();
         res.status(201).json({success:true,message:"user registered"})
         return
    } catch (error) {
        
    }
}


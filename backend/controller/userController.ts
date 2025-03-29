import { User } from '../model/userModel'
import bcrypt from 'bcrypt'
import express, { Request, Response } from 'express'
import { Student } from '../model/createdUserModel'
import mongoose from 'mongoose'

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
    } catch (error:any) {
        res.status(500).json({success:false,message:error.message})
    }
}

export const addStudent = async(req:Request,res:Response)=>{
    try {
        const {name,age,email} = req.body
        console.log(req.body)
        const existingStudent = await Student.findOne({email})
        if(existingStudent){
            res.status(400).json({success:false,message:"user already exists"})
            return
        }
        const newStudent =  Student.create({
            name,
            age,
            email
        })
        await newStudent
        res.status(200).json({success:true,message:"student created",user:newStudent})
        return
    } catch (error:any) {
        console.log(error.message)
    }
}

export const getAllStudents = async(req:Request,res:Response)=>{
    try {
        const students = await Student.find({})
        res.status(200).json({success:true,message:"student fetched successfully",student:students})
        return
    } catch (error:any) {
        console.log(error.message)
    }
}

export const deleteStudent = async(req:Request,res:Response)=>{
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({success:false,message:"Invalid Id"})
            return
        }
        const deletedStudent =  await Student.findByIdAndDelete(id)
        if(!deletedStudent){
            res.status(404).json({success:false,message:"student not found"})
            return
        }
        res.status(200).json({success:true,message:"student deleted successfully"})
        return
    } catch (error:any) {
        console.log(error.message,'error')
    }
}


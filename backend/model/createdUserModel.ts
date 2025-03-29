import mongoose, { Document, ObjectId, Schema, model } from "mongoose";

export interface IStudent extends Document{
    _id:ObjectId
    name:string,
    age:number,
    email:string
}

const newStudent = new Schema<IStudent>({
    
    name:String,
    age:Number,
    email:String
})

export const Student = model<IStudent>("Student",newStudent)
import { Document, Schema, model } from "mongoose";

export interface IUser extends Document{
    name:string,
    email:string,
    password:string
}
const newUser = new Schema<IUser>({
    name:{type:String},
    email:{type:String},
    password:{type:String}
})

export const User = model<IUser>("User",newUser)
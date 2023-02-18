import { Schema,model } from "mongoose";
import bcryptjs from 'bcryptjs'

const userSchema = new Schema({
    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
})

userSchema.statics.encryptPassword = async (password)=>{
    return await bcryptjs.hash(password,10)    
}

userSchema.statics.comparePassword = async (password,savePassword)=>{
    return await bcryptjs.compare(password, savePassword)
}

export default model('User', userSchema)
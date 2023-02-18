import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DB)
    .then(()=>{
        console.log('db is connected')
    })
    .catch((err)=>{
        console.log(err)
    })
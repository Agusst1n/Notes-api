import jwt from 'jsonwebtoken'
import User from '../models/user.model'
import config from '../config'

export const verifyToken = async (req,res,next) =>{

    try {
        
    const {username,email, password} = req.body
    const token =  req.headers["x-access-token"]

    if(!token) return res.status(400).send({
        message: "No token provided"
    })

    const userFind = await User.find({email})

    if(userFind[0]?.username !== username) return res.status(400).send({
        message: "Invalid creedentials"
    })

    if(userFind[0]?.email !== email) return res.status(400).send({
        message: "Invalid creedentials"
    })

    const matchPassword = await User.comparePassword(password,userFind[0]?.password)

    if(!matchPassword) return res.send({
        message: "Invalid creedentials"
    })

    const decode = jwt.verify(token,config.SECRET)
    
    if(!userFind[0]._id.equals(decode.id)) return res.send({
        message: "Token wrong"
    })

    next()

    } catch (error) {
        res.send({
            error:"unauthorized"
        })
    }


}
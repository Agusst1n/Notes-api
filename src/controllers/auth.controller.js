import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signin = async (req,res)=>{

    try {

        const {email} = req.body

        const userFind = await User.find({email})

        const tokenCreate = jwt.sign({id:userFind[0]._id}, config.SECRET,{expiresIn:86400})

        return res.status(200).send({
            status: "Success",
            token: tokenCreate
        })

    } catch (error) {
        res.send({
            error
        })
    }
}

export const signup = async (req,res)=>{
    
    try {

        const {username,email, password} = req.body

        console.log(username,email, password)
        const userFind = await User.find({email})

        if(userFind[0]?.username === username) return res.status(400).send({
            message: "Username already exits"
        })
        if(userFind[0]?.email === email) return res.status(400).send({
            message: "Email already exits"
        })

        const user = new User({
            username,
            email,
            password: await User.encryptPassword(password)
        })

        const userSave = await user.save()

        const token = jwt.sign({id:userSave._id}, config.SECRET, {
            expiresIn: 86400
        })

        return res.status(200).send({
            status: "Success",
            token
        }) 

    } catch (error) {
        res.status(400).send({
            message: "unauthorized"
        })
    }
}
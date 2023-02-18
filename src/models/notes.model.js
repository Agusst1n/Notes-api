import {Schema, model} from "mongoose";

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author:{
        type:String,
        required:true
    }
},{
    timestamps: true,
    versionKey: false
})

export default model('Note', noteSchema)
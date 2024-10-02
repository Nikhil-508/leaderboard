const mongoose = require('mongoose')



//creating usre schema with name and score fields

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        score:{
            type:Number,
            default:0,
            required:true
        }
    }
)

module.exports = mongoose.model('User',userSchema)
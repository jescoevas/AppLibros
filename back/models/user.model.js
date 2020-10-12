const {Schema, model} = require('mongoose')

let userSchema = new Schema({
    user:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    nickname:{
        type: String,
        required:true
    },
    toRead:[{
        type: Schema.Types.ObjectId,
        ref:'Book'
    }],
    read:[{
        type: Schema.Types.ObjectId,
        ref:'Book'
    }],
    favourites:[{
        type: Schema.Types.ObjectId,
        ref:'Book'
    }]
})

module.exports = model('User', userSchema)
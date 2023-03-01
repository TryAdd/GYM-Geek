const mongoose = require("mongoose")

const cardioSchema = mongoose.Schema({
    exercise: {type:String, required:true},
    sets: {type:Number, required:true},
    weight: {type:Number, required:true},
    reps: {type:Number, required:true},

},{
    timestamps: true
})

const Exercise = mongoose.model('Exercise', cardioSchema)




module.exports = Exercise;
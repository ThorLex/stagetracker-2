const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({


    email: {
        type: String,
        required : true,
        
    },
    task:{ 
        status: {
            type: String,
            required : true,
        } , 
        title: {
            type: String,
            required : true,
        } , 
        dure: {
            type: Number,
            required : true,
        },
        help: {
            type: String,
            required : true,
        } }

}, { timestamps: true })

module.exports = mongoose.model('tache', workoutSchema)


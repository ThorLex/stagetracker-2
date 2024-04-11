const mongoose = require('mongoose')
const Schema = mongoose.Schema
const chatSchema = new Schema({
   username: {
        type: String,
        required : true,
    },
    message:{ 
        type: String,
        required : true,   
    }
}, { timestamps: true })


chatSchema.statics.Chat = async function(username, message) {
    const user = await this.create({ username,message })
    return user
  }
  module.exports = mongoose.model('chat', chatSchema)
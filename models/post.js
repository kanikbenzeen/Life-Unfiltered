const mongoose  = require('mongoose')
const AutoIncrement = require("mongoose-sequence")(mongoose)

const postSchema = mongoose.Schema;

const myPost = new  postSchema({
    title: {type:String},
    desc: {type:String},
    date: { type: Date, default: Date.now },
    category:String,
    image: String,
    seq: { type: Number, default: 0 , unique: true}
    
})


myPost.plugin(AutoIncrement, {id:'order_seq',inc_field: 'seq'});
const Post = mongoose.model("Post", myPost)
module.exports = Post
const mongoose = require('mongoose');
 const transactionSchema = new mongoose.Schema({
    amount:{type:Number,required:true},
    description:{type: String,require: true},
    date:{type: Date,default:Date.now},
 },{ timestamps: true })
 module.exports = mongoose.model("expenson", transactionSchema);
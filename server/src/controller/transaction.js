const transactionModel = require('../Model/transactionModel');

const CreateTransaction= async(req,res)=>{
const data = req.body;
const {amount,description,date} = data;
let createData = await transactionModel.create(data)
return res.status(201).send({ status: true, data: createData })
}

const GetTransaction = async(req, res)=>{
   const transaction= await transactionModel.find({}).sort({price:1})
   return res.status(200).send({ status: true, data: transaction })
}

module.exports.CreateTransaction =CreateTransaction
module.exports.GetTransaction =GetTransaction

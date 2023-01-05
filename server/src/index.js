const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/route.js');
const mongoose = require('mongoose');
const cors= require('cors');
// const multer= require('multer')
const app = express();
// app.use( multer().any())
app.use(cors());
app.use(bodyParser.json());


 mongoose.connect("mongodb+srv://tamoghna_test:tamoghna17@test.uvbxgla.mongodb.net/expensor")

 .then(()=>console.log('Connected to Mongoose'))
 .catch(err => console.log(err));

 app.use("/",router)

 app.listen(process.env.PORT || 4000,function(){
    console.log('Connected to port: '+ (4000 || process.env.PORT));
 })
const express = require('express');
const router = express.Router();
const controller= require("../controller/transaction");

router.get('/', (req, res)=>{
    res.send("hello world")
})
router.post('/transaction',controller.CreateTransaction)
router.get('/transaction',controller.GetTransaction)






router.all('/*', (req, res) => {
    res.status(404).send({ status: false, message: "URL Not Found" })
})
module.exports = router
const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");
const app =express();

// app.get('/',(req,res)=>{
//     res.send('<h1>pavan</h1>')
// })
// mongodb+srv://<username>:<password>@pavan.wefhnzm.mongodb.net/?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://pavan:pavan@pavan.wefhnzm.mongodb.net/?retryWrites=true&w=majority").then(()=>
    console.log('DB is connected...')
)


app.listen(5000,()=>{
    console.log('Server is running...')
})
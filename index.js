const bodyParser = require('body-parser')
const express = require('express')
const app = express();
app.use(bodyParser.json());
require('dotenv').config();
const PORT = 5000;
require('./db');

app.get('/',(req,res)=>{
    res.json({
        message: "Store index.js get Api is working"
    })
})




app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
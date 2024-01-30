const bodyParser = require('body-parser')
const express = require('express')
const app = express();
app.use(bodyParser.json());
require('dotenv').config();
const PORT = 5000;
require('./db');









app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
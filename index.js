const express = require('express');
const dotenv = require('dotenv');
const app = express();
//dotenv.config({path:'./.env'});
dotenv.config();
const Port = process.env.Port || 3030;
console.log(Port);

app.get('/', async(req,res)=>{
    res.json({"message":"Success"}).status(200);
});

app.listen(Port, ()=> {
    console.log(`Server started at ${Port}`);
})

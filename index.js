const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/',(req,res)=>{
    res.send("hello");
})

app.listen(3000, ()=>{
    console.log('App is running')
})
const express = require('express');
const app=new express();
const router=require('./src/routes/api');
const path=require('path');



//security middleware
const rateLimit=require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');


// Implement Security middleware
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(xss());
app.use(mongoSanitize());



// Rate Limiter
const limiter = rateLimit({windowMs:15*60*24, max:3000});
app.use(limiter);








// Body parser
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true}));







// Database
const mongoose=require('mongoose');

//const url="mongodb://localhost:27017/crud";
//const option={user:"", pass:"", autoIndex:true}

const url="mongodb+srv://<username>:<password>@cluster0.nhslprh.mongodb.net/crud";
const option={user:"Repon", pass:"Repon7248", autoIndex:true};

mongoose.connect(url, option).then(()=>{
    console.log("Database connect success ... ")
}).catch((err)=>{
    console.log(err)
});







// Api manage
app.use("/api", router);





// Front end connect
app.use(express.static('client/build'));
app.use("*", (req, res)=>{
    req.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});

app.use("*", (req, res)=>{
    res.status(404).json({status:"404", Message:"Page Not Found ... "}).end("Not found");
});




module.exports = app;
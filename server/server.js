const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const cors=require('cors');
const fs=require('fs');
require('dotenv').config();

//routes
const authRoutes=require('./routes/auth');

//app
const app=express();

//db
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true
})
.then(()=>console.log("DB SUCCESSFULLY CONNECTED"))
.catch((err)=>console.log("DB ERROR Connection",err));

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({limit:"2mb"}));
app.use(cors());

//routes middlewares
//app.use('/api',authRoutes);
fs.readdirSync("./routes").map((r)=>app.use('/api',require("./routes/"+r)));

//port
const port=process.env.PORT || 8000;

app.listen(port,()=>console.log(`Server is running on Port ${port}`));



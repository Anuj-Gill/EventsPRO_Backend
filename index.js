//importing requirements

import express from 'express';
import cors from 'cors';
import { connectDB } from './utils/DBConnection.js';
import dotenv from 'dotenv';
dotenv.config();

//app decleration
const app = express();
connectDB();

//importing routes


app.get('/',(req,res) => {
    res.send('Hello world');
})



app.listen(5000,() => {
    console.log(`Server running on port ${process.env.PORT}!!`);
    
})
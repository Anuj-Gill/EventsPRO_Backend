//importing requirements

import express from 'express';
import cors from 'cors';
import { connectDB } from './utils/DBConnection.js';
import dotenv from 'dotenv';
dotenv.config();

//app decleration
const app = express();
connectDB();
app.use(cors());
app.use(express.json())

//importing routes
import authRoute from './routes/authR.js';
import headRoute from './routes/headR.js';
import adminRoute from './routes/adminR.js';
import eventRoute from './routes/eventR.js';
import qrRoute from './routes/qrR.js'
import { AuthCheck } from './middleware/authM.js';

app.use('/auth',authRoute);
app.use('/head',AuthCheck(),headRoute);
app.use('/admin',AuthCheck(), adminRoute);
app.use('/event',AuthCheck(), eventRoute);
app.use('/qr',AuthCheck(), qrRoute);



app.listen(5000,() => {
    console.log(`Server running on port ${process.env.PORT}!!`);
    
})
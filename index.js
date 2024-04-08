import express from 'express';
import cors from 'cors'

//app decleration
const app = express();
const port = 5000;





app.listen(5000,() => {
    console.log(`Server running on port ${port}!!`)
})
import express from 'express'

import dotenv  from 'dotenv';
import routers from './routers/index.mjs';
import connectDB from './config/db.mjs';
dotenv.config()

 connectDB();   

const app = express();

const PORT= process.env.MAIN_PORT||3000;

app.use(express.json());
app.use('/api',routers);

app.get('/',(req,res)=>{
    res.send('<h1>hello ther</h1>')
});
app.use((req,res)=>{
    res.status(404).send('<h1> 404 route not found </h1>');    
});

app.listen(PORT,()=>{
    console.log(`you are connected to port ${PORT}`)
})

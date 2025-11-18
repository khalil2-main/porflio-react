import express from 'express'

import dotenv  from 'dotenv';
import routers from './routers/index.mjs';
dotenv.config()
const app = express();

const PORT= process.env.MAIN_PORT||3000;

app.use(express.json());
app.use('/api',routers);

app.listen(PORT,()=>{
    console.log(`you are connected to port ${PORT}`)
})

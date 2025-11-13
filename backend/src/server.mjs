import express from 'express'

import dotenv  from 'dotenv';
dotenv.config()
const app = express();

const PORT= process.env.MAIN_PORT||3000;

app.listen(PORT,()=>{
    console.log(`you are connected to port ${PORT}`)
})

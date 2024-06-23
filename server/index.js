import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import userRoutes from './routes/userRoutes.js'
import morgan from 'morgan'
mongoose.set('strictQuery',false)
const app=express();
import config from 'dotenv'
config.config();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/api/auth',userRoutes);
mongoose.connect(process.env.MONGO_URL)
    .then((conn)=>{
        console.log("connected to db:",conn.connection.host);
    })
    .catch((err)=>{
        console.log(err.message);
        process.exit();

    })
const server=app.listen(process.env.PORT,()=>{
    console.log(`connected to server port ${process.env.PORT}`);
})

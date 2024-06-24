import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import userRoutes from './routes/userRoutes.js'
import morgan from 'morgan'
import messageRoutes from './routes/messagesRoute.js'
import {Server}  from 'socket.io'
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
app.use('/api/messages',messageRoutes)
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


const io=new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        
        methods: ["GET", "POST"],

    },
})
//global used to make global object
global.onlineUsers=new Map();//we store online users onto this online users map
io.on("connection",(socket)=>{
    console.log(`user connected ${socket.id}`)
    global.chatSocket=socket; //storing the socket onto global object ka key value pair
    socket.on("add-user",(userId)=>{
        console.log(`adding user ${userId} ${socket.id}`)
        onlineUsers.set(userId,socket.id);
    });
    socket.on("send-msg",(data)=>{
        console.log('reached here');
        const sendUserSocket=onlineUsers.get(data.to);//checking user online or not
        if(sendUserSocket){//emitting to all online users//offline users will get it on refresh
            console.log(`emmiting received data ${data.message} to ${sendUserSocket}`)
            socket.to(sendUserSocket).emit("msg-receive",data.message);
        }
    })
    
})

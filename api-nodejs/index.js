import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();



//===============middleware=======================
//Middleware will wait for any api request

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);
app.use("/api/users",usersRoute);

app.use((err, req, res, next)=>{
    const errStatus = err.status || 500;
    const errMessage = err.message || 500;
    return res.status(500).json({
       success:false,
        status:errStatus,
        message:errMessage,
        stack:err.stack
    })
})

//=====SERVER CONNECT====================
app.listen(8800, () => {
    connect();
    console.log("Connected 8800")
});






//==================DB===========

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw(error);
    }
}

//this will retry for connection when DB is disconnected
mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB Disconnected");
})







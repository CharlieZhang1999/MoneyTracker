import express, { Express } from 'express';
import { Request, Response } from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import expenseRoute from './routes/expense'
import { config } from 'dotenv';
import socketio, {Server} from 'socket.io'
import http from 'http'
config();

const app: Express = express();
const server = http.createServer(app);

const io = new Server(server);
// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:3000"
//     }
// })


mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL!, () => console.log('Connect to db!'));

// json parse
app.use(express.json());
app.use(cors());
app.use('/expense', expenseRoute);

io.on('connection', socket => {
    socket.on("newExpense", (expense) => {
        socket.broadcast.emit("receiveExpense", expense);
    });
})
server.listen(5000, () => { console.log('app is running on port 5000')});

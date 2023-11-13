import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import { Server as SocketServer } from 'socket.io';
import { createServer } from 'http';
import 'dotenv/config';

import { env } from './config/config.js';

import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import path from 'path';

const app = express();
const httpServer = createServer(app);
const io = new SocketServer(httpServer);

mongoose.connect('mongodb://localhost:27017/ecommercedb')
.then(() => console.log('Base de datos online'))
.catch((error) => {
    console.log(error);
    throw new Error('Error al iniciar la base de datos');
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(path.resolve('C:\\Users\\aleja\\OneDrive\\Escritorio\\chat-app\\server\\src\\public')));

// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


// Websocket events
io.on('connection', (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.emit('message', 'Bienvenido al chat');

    socket.on('new-message', (data) => {
        console.log(data);
        io.emit('new-message', data);
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });
});


httpServer.listen(env.PORT, () =>  console.log(`Server is running on http://localhost:${env.PORT}`));
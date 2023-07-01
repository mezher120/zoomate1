import express from 'express'; // to create server
import dbConnect from './db.js'; // to create db
import bodyParser from 'body-parser'; // with express.json() it not necessary
import cors from 'cors';
import postsRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv'; // install and import to use environmental variables

const app = express(); // create express server
dotenv.config(); // function to use ENV
const port = process.env.PORT || 3002 // create port
app.use(express.json()); // to enable json posts
app.use(cors());
app.use('/posts', postsRoutes);
app.use('/users', userRoutes);


dbConnect(); // initiate de connection

app.listen(port, () => console.log("server estoy activo")); // initiate server listenin the port.
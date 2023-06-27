import express from 'express'; // to create server
import dbConnect from './db.js'; // to create db
import bodyParser from 'body-parser'; // to send push request correctly
import cors from 'cors';
import postsRoutes from './routes/posts.js';
import dotenv from 'dotenv'; // install and import to use environmental variables

const app = express(); 
dotenv.config(); // function to use ENV
const port = process.env.PORT || 3001
app.use(express.json()); // to enable json posts
app.use(cors());
app.use('/posts', postsRoutes);


dbConnect();

app.listen(port, () => console.log("server estoy activo"));
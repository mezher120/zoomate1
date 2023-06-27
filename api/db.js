import mongoose from "mongoose"; //I can do import instead of require because I use a new fx of ES6 in package json I wrte type: module
// to connect to db
import { config } from "dotenv";


async function dbConnect(params) {
    try {
        await mongoose.connect(process.env.URL_DBCONNECTION, { useNewUrlParser: true});
        console.log('db is connected')
    } catch (error) {
        console.log(error.message, ' - db error')
    }
}

export default dbConnect;
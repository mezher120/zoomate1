import mongoose from "mongoose"; // to create model/schema

const newUser = mongoose.Schema({
    email: String,
    name: String,
    lastName: String,
    age: Number,
    phone: String,
    typeUser: String,
    googleID: String
    
});

const postUser = mongoose.model('Users', newUser);

export default postUser;
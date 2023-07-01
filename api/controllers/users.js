import postUser from "../models/users.js"; // import model for db

//create functions CRUD

export const createUser = async (req, res) => {
    const data = req.body;
    const newUser = postUser(data);  // put data into de model
    try {
        await newUser.save(); // asynchronus try to save data in db
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const getUser = async (req, res) => {
    const { id }= req.body;
    try {
        const user = await postUser.findOne({googleID: id}) // async from model findOne(specify what item to find)
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
}
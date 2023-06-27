import postZoom from "../models/zooms.js";


export const getPosts = async (req, res) => {
    try {
        const postZooms = await postZoom.find();

        res.json(postZooms);
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

export const newPost = async (req, res) => {
const post = req.body;
const newPost = postZoom(post);

    try {
        await newPost.save(),
        res.status(200).json(newPost);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
import express from 'express'
import { getPosts, newPost } from '../controllers/posts.js'; // remember always to put the extension of the file


const router = express.Router();

router.get('/', getPosts);
router.post('/', newPost);

export default router;
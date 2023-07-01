import express from 'express'
import { createUser, getUser } from '../controllers/users.js' // put .js using module in backend

const router = express.Router();  // use Router() to create routes to each function CRUD

router.get('/', getUser);
router.post('/', createUser);

export default router;


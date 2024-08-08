import express from 'express';
const router = express.Router();

import { getUser, insertUser, getUsergroups, getUserById, deleteUser, updateUser } from '../controllers/UserController.js';

router.post('/insert',insertUser);
router.get('/get',getUser);
router.get('/getbyid/:id',getUserById);
router.get('/getug',getUsergroups);
router.put('/delete/:id', deleteUser);
router.put('/update/:id', updateUser);



export default router
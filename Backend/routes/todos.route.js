import express from 'express';
import { createNewTodo, deleteTodo, editTodo, getAllTodos } from '../controllers/todos.controller.js';
import { verifyToken } from '../middlewares/utills.js';

const router = express.Router();

router.get('/',verifyToken, getAllTodos);
router.post('/new',verifyToken, createNewTodo);
router.put('/edit/:id',verifyToken, editTodo)
router.delete('/delete/:id', verifyToken, deleteTodo)


export default router;
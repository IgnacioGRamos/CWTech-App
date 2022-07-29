import express, { Router } from 'express';
import morgan from 'morgan';
import textController from '../controller/text.controller.js';

const router = Router();

router.use(morgan('dev'));
router.use(express.urlencoded({ extended: false }));

router.get('/word', textController);

export default router;
import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/index.route.js';



const app = express();

app.use(morgan('dev'));
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes);

export default app;
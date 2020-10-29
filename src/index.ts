import 'reflect-metadata'

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import {createConnection} from 'typeorm'
const PORT = process.env.PORT || 3000;


const app = express();
createConnection();

//Importing user routes
import userRoutes from './routes/user.routes';


//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use(userRoutes);



//Starting the server
app.listen(PORT);
console.log('Server on port 3000')
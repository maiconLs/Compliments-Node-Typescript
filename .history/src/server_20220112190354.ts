import 'reflect-metadata';
import express, { Request, Response} from "express";

import { router } from './routes'

import './database'

const app = express();

app.use(express.json())

app.use(router)

app.use(err)

app.listen(3000, () => console.log("Server is running"));

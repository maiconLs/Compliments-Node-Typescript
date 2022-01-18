import 'reflect-metadata';
import express, { Request, Response} from "express";
import 'express-async-errors';

import { router } from './routes'

import './database'

const app = express();

app.use(express.json())

app.use(router)

app.use((err: Error, request: Request, response: Response) => {
  if(err instanceof Error){
    return response.status(400).json({
      error: err.message,
    })
}
  return response.status(500).json({
    status: "Error",
    message: "Internal Server Error",
  })
}
)

app.listen(3000, () => console.log("Server is running"));

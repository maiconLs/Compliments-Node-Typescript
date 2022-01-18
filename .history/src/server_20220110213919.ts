import express from "express";
import { router } from './routes'
import './database'

const app = express();

app.listen(3000, () => console.log("Server is running"));

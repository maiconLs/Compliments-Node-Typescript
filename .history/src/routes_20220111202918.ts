
import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";

const router = Router();

const createUserController = new CreateUserController();
const crea

router.post("/users", createUserController.handle);

export { router };
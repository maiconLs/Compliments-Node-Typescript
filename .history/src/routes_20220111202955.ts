
import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";

import 

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/tag", createUserController.handle);
router.post("/users", createUserController.handle);

export { router };
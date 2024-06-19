import { Router } from "express";
import { getUsers, login, register } from "./controllers";
import { authenticate } from "./middleware";

const router = Router();

router.get("/users", authenticate, getUsers);
router.post("/register", register);
router.post("/login", login);

export default router;

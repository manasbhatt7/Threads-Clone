import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { createPost, getPost } from "../controllers/postController.js";

const router = express.Router();

router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);

export default router;

import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { createPost, deletePost, getPost, likeUnlikePost } from "../controllers/postController.js";

const router = express.Router();

router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likeUnlikePost);

export default router;

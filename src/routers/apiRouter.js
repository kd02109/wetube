import express from "express";
import { registerView, createComment } from "../controller/videoController";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([a-f0-9]{24})/view", registerView);
apiRouter.post("/videos/:id([a-f0-9]{24})/comment", createComment);

export default apiRouter;

import { Router } from "express";
import VideoController from "../controllers/videoController";

const videoRouter = Router();

videoRouter.get("/videos", VideoController.getAll);

videoRouter.get("/videos/:id", VideoController.getById);

videoRouter.post("/videos", VideoController.create);

videoRouter.put("/videos", VideoController.update);

videoRouter.patch("/videos", VideoController.edit);

videoRouter.delete("/videos", VideoController.delete);

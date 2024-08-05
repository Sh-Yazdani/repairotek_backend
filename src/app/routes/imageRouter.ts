import { Router } from "express";
import ImageController from "../controllers/ImageController";
const imageRouter = Router();

imageRouter.get("/images", ImageController.getAll);

imageRouter.get("/images/:id", ImageController.getById);

imageRouter.post("/images", ImageController.create);

imageRouter.put("/images", ImageController.update);

imageRouter.patch("/images", ImageController.edit);

imageRouter.delete("/images", ImageController.delete);

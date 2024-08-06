
import express from "express";
import ImageController from "../controllers/ImageController";

const imageRouter = express.Router();

imageRouter.get("/images/:id", ImageController.getById);
imageRouter.get("/images", ImageController.getAll);
imageRouter.post("/images", ImageController.create);
imageRouter.put("/images/:id", ImageController.edit);
imageRouter.patch("/images/:id", ImageController.edit);
imageRouter.delete("/images/:id", ImageController.delete);

export default imageRouter;

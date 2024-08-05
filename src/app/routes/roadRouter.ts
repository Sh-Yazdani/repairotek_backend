import express from "express";
import RoadController from "../controllers/RoadController";

const roadRouter = express.Router();

roadRouter.get("/roads/:id", RoadController.getById);
roadRouter.get("/roads", RoadController.getAll);
roadRouter.post("/roads", RoadController.create);
roadRouter.put("/roads/:id", RoadController.edit);
roadRouter.patch("/roads/:id", RoadController.edit);
roadRouter.delete("/roads/:id", RoadController.delete);

export default roadRouter;

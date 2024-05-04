import  express from "express";
import UsersController from "../controllers/UserController";
const userRouter = express.Router();

userRouter.get("/users", UsersController.getAll);
userRouter.get("/users/:id", UsersController.getById);
userRouter.post("/users", UsersController.create);
userRouter.put("/users/:id", UsersController.update);
userRouter.delete("/users/:id", UsersController.delete);



export default userRouter;

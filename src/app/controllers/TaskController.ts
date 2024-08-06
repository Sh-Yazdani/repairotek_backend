
import { Request, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { TaskDoc } from "../../domain/docs/Task";
import TaskService from "../../domain/services/TaskService";
import BaseController from "./BaseController";

class TaskController extends BaseController<TaskDoc> {
  private taskService = this.service as typeof TaskService;
  constructor() {
    super(TaskService);
  }

  // getAll(req: Request,
  //    res: Response,
  //     next: NextFunction) : Promise<Response<String[] | null>>{


  // }
}
export default new TaskController();

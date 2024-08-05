
import { TaskDoc } from "../docs/Task";
import TaskModel from "../models/TaskModel";
import BaseRepository from "./BaseRepository";

class TaskRepository extends BaseRepository<TaskDoc> {
  constructor() {
    super(TaskModel);
  }

  async getById(id: string): Promise<TaskDoc | null> {
    try {
      return await this.model
        .findById(id)
        .populate("assignees")
        .exec();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
  async getAll(): Promise<TaskDoc[]> {
    try {
      return await this.model.find().populate("assignees");
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
}

export default new TaskRepository();

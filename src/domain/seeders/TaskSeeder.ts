import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import TaskModel from "../models/TaskModel";
import { TaskStatus } from "../../utils/constant/enums/StatusTask";

export class TaskSeeder {
  static removeAllTasks = async () => {
    try {
      await TaskModel.deleteMany({});
      logger.info("All tasks removed successfully.");
    } catch (error: any) {
      logger.error(`Failed to remove tasks: ${error.message}`);
    }
  };

  static insertTasks = async (batchSize = 30) => {
    try {
      const tasks = [];

      for (let i = 0; i < batchSize; i++) {
        tasks.push({
          title: faker.lorem.words(5),
          description: faker.lorem.paragraph(),
          status: faker.helpers.arrayElement(Object.values(TaskStatus)),
          {

    "dueDate": "2024-08-29T20:30:00.000Z",
    "priority": "very-high",
  }
        });
      }

      await TaskModel.insertMany(tasks);
      logger.info(`${tasks.length} tasks seeded successfully.`);
    } catch (error: any) {
      logger.error(`Failed to seed tasks: ${error.message}`);
    }
  };

  static seed = async () => {
    await this.removeAllTasks();
    await this.insertTasks();
  };
}

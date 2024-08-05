import { PriorityTask } from "./../../utils/constant/PriorityTask";
import { TaskDoc } from "../docs/Task";
import { generateModel } from "../../utils/generators/modelGenerator";
import { TaskStatus } from "../../utils/constant/enums/StatusTask";
import { Schema } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *        - title
 *        - status
 *       properties:
 *         title:
 *            type: string
 *            description: Title of the task
 *            required: true
 *            example: "Complete the project documentation"
 *         description:
 *            type: string
 *            description: Description of the task
 *            default: ""
 *            example: "Detail the steps to complete the project documentation"
 *         status:
 *            type: string
 *            description: Status of the task
 *            enum:
 *              - todo
 *              - doing
 *              - done
 *            default: "doing"
 *         tags:
 *            type: string[]
 *            default: []
 *            enum:
 *              - none
 *              - critical
 *              - very-high
 *              - high
 *              - medium
 *              - low
 *              - very-low
 *         assignees:
 *            type: string[]
 *            items:
 *              type: string
 *            default: []
 *            description: List of User IDs.
 *            example: [60c72b2f9b1e8c6f2f8a5e56, 60c72b2f9b1e8c6f2f8a5e55]
 *         priority:
 *              type: string
 *         dueDate:
 *             type: string
 */

const TaskModel = generateModel<TaskDoc>("Task", {
  title: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (v: string) {
        return v.length > 0;
      },
      message: "Title cannot be empty",
    },
  },
  description: { type: String, default: "" },
  status: {
    type: String,
    enum: Object.values(TaskStatus),
    default: TaskStatus.Todo,
    required: true,
  },
  tags: {
    type: [
      {
        type: String,
        required: false,
      },
    ],
    default: [],
  },
  priority: {
    type: String,
    enum: PriorityTask,
    required: false,
  },
  dueDate: {
    type: String,
    required: false,
  },
  assignees: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    required: false,
    default: [],
  },
});

export default TaskModel;

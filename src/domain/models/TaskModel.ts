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
 *             - Pending
 *             - InProgress
 *             - Completed
 *            default: "Pending"
 *         tags:
 *            type: string[]
 *            default: []
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
    default: TaskStatus.Pending,
    required: true,
  },
  tags: {
   type: [
      {
        type: String,
       required:false
      },
    ],
    default: [],
  },
  priority: {
    type: String,
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
    required:false,
    default: [],
  },
});

export default TaskModel;

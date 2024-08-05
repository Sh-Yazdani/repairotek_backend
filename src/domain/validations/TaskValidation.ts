import Joi from "joi";
import { TaskStatus } from "../../utils/constant/enums/StatusTask";

const TaskValidationSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "Title should be a string",
    "any.required": "Title is required",
  }),
  description: Joi.string().optional().messages({
    "string.base": "Description should be a string",
  }),
  status: Joi.string()
    .valid(...Object.values(TaskStatus))
    .required()
    .messages({
      "string.base": "Status should be a string",
      "any.only": "Status must be one of Pending, InProgress, Completed",
      "any.required": "Status is required",
    }),
  tags: Joi.array().items(Joi.string()).optional().messages({
    "array.base": "Tags should be an array",
    "string.base": "Each tag should be a string",
  }),
  priority: Joi.string().optional(),
  dueDate: Joi.string().optional(),
  assignees: Joi.array().items(Joi.string()).optional().messages({
    "array.base": "Assignees should be an array",
    "string.base": "Each assignee should be a string",
  }),
});

const TaskPatchValidationSchema = Joi.object({
  title: Joi.string().optional().messages({
    "string.base": "Title should be a string",
    "any.required": "Title is required",
  }),
  description: Joi.string().optional().messages({
    "string.base": "Description should be a string",
  }),
  status: Joi.string()
    .valid(...Object.values(TaskStatus))
    .optional()
    .messages({
      "string.base": "Status should be a string",
      "any.only": "Status must be one of Pending, InProgress, Completed",
      "any.required": "Status is required",
    }),
  tags: Joi.array().items(Joi.string()).optional().messages({
    "array.base": "Tags should be an array",
    "string.base": "Each tag should be a string",
  }),
  priority: Joi.string().optional(),
  dueDate: Joi.string().optional(),
  assignees: Joi.array().items(Joi.string()).optional().messages({
    "array.base": "Assignees should be an array",
    "string.base": "Each assignee should be a string",
  }),
});

export { TaskPatchValidationSchema, TaskValidationSchema };

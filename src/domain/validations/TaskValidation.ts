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
  tags: Joi.string(),
  priority: Joi.string(),
  dueDate: Joi.string(),
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
  tags: Joi.string(),
  priority: Joi.string(),
  dueDate: Joi.string(),
});
export { TaskPatchValidationSchema, TaskValidationSchema };

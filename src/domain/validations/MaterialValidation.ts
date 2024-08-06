import Joi from "joi";
import { generateCode } from "../../utils/functions/generateCode";

const MaterialValidationSchema = Joi.object({
  materialCode: Joi.string()
    .optional()
    .default(() => generateCode("MTR"))
    .messages({
      "string.base": "Material code should be a string",
    }),
  name: Joi.string().required(),
  description: Joi.string().required(),
  pricePerUnit: Joi.number().default(0).min(0),
  value: Joi.number().required().default(0).min(0),
  unit: Joi.string()
    .valid(...["gr", "Kg", "Tone"])
    .required()
    .default(""),
});

const MaterialPatchValidationSchema = Joi.object({
  materialCode: Joi.string()
    .optional()
    .default(() => generateCode("MTR"))
    .messages({
      "string.base": "Material code should be a string",
    }),
  name: Joi.string().required(),
  description: Joi.string().required(),
  pricePerUnit: Joi.number().default(0).min(0),
  value: Joi.number().required().default(0).min(0),
  unit: Joi.string()
    .valid(...["gr", "Kg", "Tone"])
    .required()
    .default(""),
});
export { MaterialPatchValidationSchema, MaterialValidationSchema };

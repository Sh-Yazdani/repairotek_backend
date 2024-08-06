import Joi from "joi";
import { generateCode } from "../../utils/functions/generateCode";

const EquipmentValidationSchema = Joi.object({
  equipmentCode: Joi.string()
    .optional()
    .default(() => generateCode("EQP"))
    .messages({
      "string.base": "Equipment code should be a string",
    }),
  name: Joi.string().required(),
  equipmentModel: Joi.string().required(),
  description: Joi.string().optional(),
  pricePerHour: Joi.number().default(0),
  count: Joi.number().default(0),
  Manufacturer: Joi.string().optional(),
  VIN: Joi.string().default("0"),
  VRM: Joi.string().default("0"),
});

const EquipmentPatchValidationSchema = Joi.object({
  equipmentCode: Joi.string()
    .optional()
    .default(() => generateCode("EQP"))
    .messages({
      "string.base": "Equipment code should be a string",
    }),
  name: Joi.string().optional(),
  equipmentModel: Joi.string().optional(),
  description: Joi.string().optional(),
  pricePerHour: Joi.number().default(0),
  count: Joi.number().default(0).optional,
  Manufacturer: Joi.string().optional(),
  VIN: Joi.string().default("0").optional(),
  VRM: Joi.string().default("0").optional(),
});
export { EquipmentValidationSchema, EquipmentPatchValidationSchema };

import Joi from "joi";

const EquipmentValidationSchema = Joi.object({
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
  name: Joi.string().required(),
  equipmentModel: Joi.string().required(),
  description: Joi.string().optional(),
  pricePerHour: Joi.number().default(0),
  count: Joi.number().default(0),
  Manufacturer: Joi.string().optional(),
  VIN: Joi.string().default("0").optional(),
  VRM: Joi.string().default("0").optional(),
});
export { EquipmentValidationSchema, EquipmentPatchValidationSchema };

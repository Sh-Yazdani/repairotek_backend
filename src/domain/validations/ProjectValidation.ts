import Joi from "joi";
import { StatusProject } from "../../utils/constant/StatusProject";
  

const ProjectValidationSchema = Joi.object({
  adminId: Joi.string().required(),
  title: Joi.string().required(),
  zoneId: Joi.string().required(),
  areaLength: Joi.number().required(),
  areaWidth: Joi.number().required(),
  areaHeight: Joi.number().required(),
  measureUnit: Joi.string().required(),
  description: Joi.string(),
  longitude: Joi.number().required(),
  latitude: Joi.number().required(),
  materials: Joi.array().items(Joi.string().optional()).default([]),
  equipment: Joi.array().items(Joi.string().optional()).default([]),
  employees: Joi.array().items(Joi.string().optional()).default([]),
});




const ProjectPatchValidationSchema = Joi.object({
  title: Joi.string().optional(),
  zoneId: Joi.string().optional(),
  areaLength: Joi.number().optional(),
  areaWidth: Joi.number().optional(),
  areaHeight: Joi.number().optional(),
  measureUnit: Joi.string().optional(),
  description: Joi.string(),
  longitude: Joi.number().optional(),
  latitude: Joi.number().optional(),
  status: Joi.string().valid(...StatusProject).optional(),
  materials: Joi.array().items(Joi.string().optional()).default([]),
  equipment: Joi.array().items(Joi.string().optional()).default([]),
  employees: Joi.array().items(Joi.string().optional()).default([]),
});

export {ProjectPatchValidationSchema, ProjectValidationSchema};

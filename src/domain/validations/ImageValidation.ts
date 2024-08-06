import Joi from "joi";

const ImageValidationSchema = Joi.object({
  title: Joi.string().required(),
  url: Joi.string().required(),
  description: Joi.string().default(""),
  location: Joi.string().required(),
  time: Joi.date().required(),
});

const ImagePatchValidationSchema = Joi.object({
  title: Joi.string().required(),
  url: Joi.string().required(),
  description: Joi.string().default(""),
  location: Joi.string().required(),
  time: Joi.date().required(),
});
export { ImagePatchValidationSchema, ImageValidationSchema };

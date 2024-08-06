import Joi from "joi";

const VideoValidationSchema = Joi.object({
  title: Joi.string().required(),
  url: Joi.string().required(),
  description: Joi.string().default(""),
  duration: Joi.string().default("0"),
  location: Joi.string().required(),
  time: Joi.date().required(),
});

const VideoPatchValidationSchema = Joi.object({
  title: Joi.string().required(),
  url: Joi.string().required(),
  duration: Joi.string().default("0"),
  description: Joi.string().default(""),
  location: Joi.string().required(),
  time: Joi.date().required(),
});

export { VideoValidationSchema, VideoPatchValidationSchema };

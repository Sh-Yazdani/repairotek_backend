import { ImageDoc } from "../docs/Image";
import { generateModel } from "../../utils/generators/modelGenerator";
import { Schema } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Image:
 *       type: object
 *       required:
 *         - title
 *         - url
 *         - location
 *       properties:
 *         id:
 *           type: string
 *           format: ObjectId
 *           description: The auto-generated id of the image
 *         title:
 *           type: string
 *           description: Title of the image
 *         url:
 *           type: string
 *           description: URL of the image
 *         location:
 *           type: string
 *           description: Location where the image was taken
 *         time:
 *           type: string
 *           format: date-time
 *           description: Date and time when the image was taken
 *           default: Current date and time
 *         description:
 *           type: string
 *           description: Description of the image
 *           default: "image description"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the image was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the image was last updated
 *       example:
 *         id: 60c72b2f9b1d8c001f8e4cda
 *         title: "Sunset at the beach"
 *         url: "https://example.com/images/sunset.jpg"
 *         location: "Malibu Beach, California"
 *         time: "2023-06-15T19:30:00Z"
 *         description: "Beautiful sunset captured at Malibu Beach"
 */

const ImageModel = generateModel<ImageDoc>("Image", {
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
    default: Date.now,
  },
  description: {
    type: String,
    required: false,
    default: "image description",
  },
});

export default ImageModel;

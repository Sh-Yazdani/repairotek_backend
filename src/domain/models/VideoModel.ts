import { generateModel } from "../../utils/generators/modelGenerator";
import { Schema } from "mongoose";
import { VideoDoc } from "../docs/Video";

/**
 * @swagger
 * components:
 *   schemas:
 *     Video:
 *       type: object
 *       required:
 *         - title
 *         - url
 *         - location
 *       properties:
 *         id:
 *           type: string
 *           format: ObjectId
 *           description: The auto-generated id of the video
 *         title:
 *           type: string
 *           description: Title of the video
 *         url:
 *           type: string
 *           description: URL of the video
 *         location:
 *           type: string
 *           description: Location where the video was recorded
 *         time:
 *           type: string
 *           format: date-time
 *           description: Date and time when the video was recorded
 *           default: Current date and time
 *         duration:
 *           type: string
 *           description: Duration of the video
 *           default: ""
 *         description:
 *           type: string
 *           description: Description of the video
 *           default: "uploaded video"
 *       example:
 *         id: 60c72b2f9b1d8c001f8e4cda
 *         title: "Sunset timelapse"
 *         url: "https://example.com/videos/sunset_timelapse.mp4"
 *         location: "Malibu Beach, California"
 *         time: "2023-06-15T19:30:00Z"
 *         duration: "00:05:30"
 *         description: "Beautiful sunset timelapse captured at Malibu Beach"
 *     VideoInput:
 *       type: object
 *       required:
 *         - title
 *         - url
 *         - location
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the video
 *         url:
 *           type: string
 *           description: URL of the video
 *         location:
 *           type: string
 *           description: Location where the video was recorded
 *         duration:
 *           type: string
 *           description: Duration of the video
 *         description:
 *           type: string
 *           description: Description of the video
*         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the video was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the video was last updated
 *       example:
 *         title: "Sunset timelapse"
 *         url: "https://example.com/videos/sunset_timelapse.mp4"
 *         location: "Malibu Beach, California"
 *         duration: "00:05:30"
 *         description: "Beautiful sunset timelapse captured at Malibu Beach"
 */

const VideoModel = generateModel<VideoDoc>("Video", {
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
  duration: {
    type: String,
    required: false,
    default: "",
  },
  description: {
    type: String,
    required: false,
    default: "uploaded video",
  },
});

export default VideoModel;

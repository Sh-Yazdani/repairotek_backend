import { Schema } from "mongoose";
import { ProjectGalleryDoc } from "../docs/ProjectGallery";
import { generateModel } from "../../utils/generators/modelGenerator";

/**
 * @swagger
 * components:
 *   schemas:
 *     ProjectGallery:
 *       type: object
 *       required:
 *         - projectId
 *         - userId
 *         - mediaName
 *         - mediaUrl
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the admin
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the admin was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the admin was last updated
 *         projectId:
 *           type: string
 *           format: ObjectId
 *           description: ID of the project
 *         userId:
 *           type: string
 *           format: ObjectId
 *           description: ID of the user
 *         mediaName:
 *           type: string
 *           description: Name of the media
 *         mediaUrl:
 *           type: string
 *           description: URL of the media
 *         thumbnailMediaUrl:
 *           type: string
 *           description: URL of the thumbnail media
 *         mediaDateTime:
 *           type: string
 *           format: date-time
 *           description: Date and time of the media
 *         mediaSubjectId:
 *           type: string
 *           format: ObjectId
 *           description: ID of the media subject
 *         location:
 *           type: string
 *           description: Location where the media was taken
 *         description:
 *           type: string
 *           description: Description of the media
 */

const ProjectGalleryModel = generateModel<ProjectGalleryDoc>("ProjectGallery", {
  projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  mediaName: { type: String, required: true },
  mediaUrl: { type: String, required: true },
  thumbnailMediaUrl: { type: String, required: false },
  mediaDateTime: { type: String, required: false },
  mediaSubjectId: {
    type: Schema.Types.ObjectId,
    ref: "ProjectGallerySubject",
    required: false,
  },
  location: { type: String, required: false },
  description: { type: String },
});

export default ProjectGalleryModel;

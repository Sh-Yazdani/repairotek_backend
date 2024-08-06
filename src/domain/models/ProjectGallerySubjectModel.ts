import { generateModel } from "../../utils/generators/modelGenerator";
import { ProjectGallerySubjectDoc } from "../docs/ProjectGallerySubject";

/**
 * @swagger
 * components:
 *   schemas:
 *     ProjectGallerySubject:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the gallery subject
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the gallery subject was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the gallery subject was last updated
 *         title:
 *           type: string
 *           description: Title of the gallery subject
 *           example: Daily
 *         description:
 *           type: string
 *           description: Description of the gallery subject
 *           example: "This subject covers daily project activities."
 *       example:
 *         id: 60c72b2f9b1d8c001f8e4caa
 *         createdAt: 2023-01-01T12:00:00Z
 *         updatedAt: 2023-01-02T12:00:00Z
 *         title: Daily
 *         description: "This subject covers daily project activities."
 */

const title = [
  "Daily",
  "Injury Employee",
  "Damage Equipment",
  "Materials",
  "Equipments",
  "Other",
];

const ProjectGallerySubjectModel = generateModel<ProjectGallerySubjectDoc>(
  "ProjectGallerySubject",
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
  },
);

export default ProjectGallerySubjectModel;

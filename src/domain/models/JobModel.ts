import { JobDoc } from "../docs/Job";
import { generateModel } from "../../utils/generators/modelGenerator";

/**
 * @swagger
 * components:
 *   schemas:
 *     Job:
 *       type: object
 *       description: Schema for job details
 *       properties:
 *
 *         title:
 *           type: string
 *           description: Title of the job
 *         description:
 *           type: string
 *           description: Description of the job
 *       required:
 *         - title
 *         - description
 */

const JobModel = generateModel<JobDoc>("Job", {
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export default JobModel;

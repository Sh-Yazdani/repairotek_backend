import { generateModel } from "../../utils/generators/modelGenerator";
import { ReportSubjectDoc } from "../docs/ReportSubject";

/**
 * @swagger
 * components:
 *   schemas:
 *     ReportSubject:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the report subject
 *         description:
 *           type: string
 *           description: Description of the report subject (optional)
 *       example:
 *         id: 60c72b2f9b1d8c001f8e4caa
 *         createdAt: 2023-01-01T12:00:00Z
 *         updatedAt: 2023-01-02T12:00:00Z
 *         title: "Daily"
 *         description: "Report subject related to safety incidents"
 */

const types = ["Daily", "Injury Employee", "Damage Equipment"];

const ReportSubjectModel = generateModel<ReportSubjectDoc>("ReportSubject", {
  title: { type: String, required: true },
  description: { type: String, required: false },
});

export default ReportSubjectModel;

import { DailyReportDoc } from "../docs/DailyReport";
import ReportModel from "./ReportModel";
import { generateModel } from "../../utils/generators/modelGenerator";

/**
 * @swagger
 * components:
 *   schemas:
 *     DailyReport:
 *       allOf:
 *         - $ref: '#/components/schemas/Report'
 *         - type: object
 *       required:
 *         - title
 *         - reportSubjectId
 *         - reportDate
 *         - reportTime
 *         - projectGalleryId
 *         - projectId
 *         - createdBy
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the report
 *         reportSubjectId:
 *           type: string
 *           format: ObjectId
 *           description: ID of the report subject
 *         description:
 *           type: string
 *           description: Description of the report (optional)
 *           default: ""
 *         reportDate:
 *           type: string
 *           format: date
 *           description: Date of the report
 *         reportTime:
 *           type: string
 *           description: Time of the report
 *         projectGalleryId:
 *           type: array
 *           items:
 *             type: string
 *             format: ObjectId
 *           description: List of IDs of related project galleries
 *         projectId:
 *           type: string
 *           format: ObjectId
 *           description: ID of the project
 *         createdBy:
 *           type: string
 *           format: ObjectId
 *           description: ID of the user who created the report
 *       example:
 *         id: 60c72b2f9b1d8c001f8e4caa
 *         createdAt: 2023-01-01T12:00:00Z
 *         updatedAt: 2023-01-02T12:00:00Z
 *         title: "Monthly Report"
 *         reportSubjectId: 60c72b2f9b1d8c001f8e4c9e
 *         description: "Detailed report for the month of January."
 *         reportDate: 2023-01-31
 *         reportTime: "15:00:00"
 *         projectGalleryId:
 *           - 60c72b2f9b1d8c001f8e4c99
 *           - 60c72b2f9b1d8c001f8e4c98
 *         projectId: 60c72b2f9b1d8c001f8e4c97
 *         createdBy: 60c72b2f9b1d8c001f8e4c96
 */

///////////// Discriminat //////////////////
const DailyReportModel = generateModel<DailyReportDoc>(
  "DailyReport",
  {},
  ["__t"],
  ReportModel,
);

export default DailyReportModel;

import { Schema } from "mongoose";
import ReportModel from "./ReportModel";
import { DamageEquipmentReportDoc } from "../docs/DamageEquipmentReport";
import { generateModel } from "../../utils/generators/modelGenerator";

/**
 * @swagger
 * components:
 *   schemas:
 *     DamageEquipmentReport:
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
 *         - equipmentId
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
 *           description: IDs of the related project galleries
 *         projectId:
 *           type: string
 *           format: ObjectId
 *           description: ID of the project
 *         createdBy:
 *           type: string
 *           format: ObjectId
 *           description: ID of the user who created the report
 *         equipmentId:
 *           type: string
 *           format: ObjectId
 *           description: ID of the equipment related to the report
 *       example:
 *         id: 60c72b2f9b1d8c001f8e4cda
 *         createdAt: 2023-01-01T12:00:00Z
 *         updatedAt: 2023-01-02T12:00:00Z
 *         title: "Damage Equipment Report"
 *         reportSubjectId: "60c72b2f9b1d8c001f8e4cbb"
 *         description: "Report detailing damage to equipment"
 *         reportDate: 2023-01-01
 *         reportTime: "14:30:00"
 *         projectGalleryId: ["60c72b2f9b1d8c001f8e4cbc"]
 *         projectId: "60c72b2f9b1d8c001f8e4cbd"
 *         createdBy: "60c72b2f9b1d8c001f8e4cbe"
 *         equipmentId: "60c72b2f9b1d8c001f8e4cbf"
 */

///////////// Discriminat //////////////////
const DamageEquipmentReportModel = generateModel<DamageEquipmentReportDoc>(
  "DamageEquipmentReport",
  {
    equipmentId: {
      type: Schema.Types.ObjectId,
      ref: "Equipment",
      required: true,
    },
  },
  ["__t"],
  ReportModel,
);

export default DamageEquipmentReportModel;

import { Schema } from "mongoose";
import { ProjectDoc } from "../docs/Project";
import { generateModel } from "../../utils/generators/modelGenerator";
import { UnitsProjectArea } from "../../utils/constant/UnitsProjectArea";
import { StatusProject } from "../../utils/constant/StatusProject";
import { generateCode } from "../../utils/functions/generateCode";
/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       required:
 *         - projectCode
 *         - adminId
 *         - title
 *         - zoneId
 *         - areaLength
 *         - areaWidth
 *         - areaHeight
 *         - measureUnit
 *         - longitude
 *         - latitude
 *       properties:
 *         projectCode:
 *           type: string
 *           description: The project code, generated automatically.
 *           example: PRJ-1234
 *         adminId:
 *           type: string
 *           description: The ID of the admin associated with the project.
 *           example: 60c72b2f9b1e8c6f2f8a5e5c
 *         title:
 *           type: string
 *           description: The title of the project.
 *           example: Construction of New Bridge
 *         zoneId:
 *           type: string
 *           description: The ID of the zone where the project is located.
 *           example: 60c72b2f9b1e8c6f2f8a5e5b
 *         areaLength:
 *           type: number
 *           description: The length of the project area.
 *           example: 100.5
 *         areaWidth:
 *           type: number
 *           description: The width of the project area.
 *           example: 50.2
 *         areaHeight:
 *           type: number
 *           description: The height of the project area.
 *           example: 25.0
 *         measureUnit:
 *           type: string
 *           description: The unit of measurement for the project's area dimensions.
 *           enum:
 *             - m
 *             - cm
 *             - in
 *             - ft
 *           defult: m
 *           example: m
 *         description:
 *           type: string
 *           description: A brief description of the project.
 *           example: This project involves the construction of a new bridge over the river.
 *         longitude:
 *           type: number
 *           description: The longitude coordinate of the project's location.
 *           example: 34.789
 *         latitude:
 *           type: number
 *           description: The latitude coordinate of the project's location.
 *           example: -117.123
 *         status:
 *           type: string
 *           description: The current status of the project.
 *           enum:
 *             - Initiation
 *             - Pre-Construction
 *             - In-Progress
 *             - completed
 *           default: Initiation
 *           example: Compeleted
 *         materials:
 *           type: array
 *           items:
 *             type: string
 *           default: []
 *           description: List of material IDs associated with the project.
 *           example: [60c72b2f9b1e8c6f2f8a5e5a, 60c72b2f9b1e8c6f2f8a5e59]
 *         equipment:
 *           type: array
 *           items:
 *             type: string
 *           default: []
 *           description: List of equipment IDs associated with the project.
 *           example: [60c72b2f9b1e8c6f2f8a5e58, 60c72b2f9b1e8c6f2f8a5e57]
 *         employees:
 *           type: array
 *           items:
 *             type: string
 *           default: []
 *           description: List of employee IDs associated with the project.
 *           example: [60c72b2f9b1e8c6f2f8a5e56, 60c72b2f9b1e8c6f2f8a5e55]
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the project was created.
 *           example: 2021-06-13T18:25:43.511Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the project was last updated.
 *           example: 2021-06-14T18:25:43.511Z
 */

const ProjectModel = generateModel<ProjectDoc>("Project", {
  projectCode: {
    type: String,
    required: true,
    default: () => generateCode("PRJ"),
    unique: true,
  },
  adminId: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
  title: { type: String, required: true },
  zoneId: { type: Schema.Types.ObjectId, ref: "Zone", required: true },
  areaLength: { type: Number, required: true },
  areaWidth: { type: Number, required: true },
  areaHeight: { type: Number, required: true },
  measureUnit: { type: String, enum: UnitsProjectArea, default: "m" },
  description: { type: String, required: false },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  status: { type: String, enum: StatusProject, default: "Initiation" },
  materials: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Material",
      },
    ],
    default: [],
  },
  equipment: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Equipment",
      },
    ],
    default: [],
  },
  employees: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Employee",
      },
    ],
    default: [],
  },
});

export default ProjectModel;

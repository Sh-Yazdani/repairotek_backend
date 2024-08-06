import { Schema } from "mongoose";
import { ProjectAssignmentDoc } from "../docs/ProjectAssignment";
import { generateModel } from "../../utils/generators/modelGenerator";

/**
 * @swagger
 * components:
 *   schemas:
 *     ProjectAssignment:
 *       type: object
 *       description: Schema for project assignments
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the ProjectAssignment
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the ProjectAssignment was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the ProjectAssignment was last updated
 *         projectId:
 *           type: string
 *           format: objectId
 *           description: ID of the project
 *           $ref: '#/components/schemas/Project'
 *         employees:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               employeeId:
 *                 type: string
 *                 format: objectId
 *                 description: ID of the employee
 *                 $ref: '#/components/schemas/Employee'
 *               estimatedCountHour:
 *                 type: number
 *                 description: Estimated count of hours for the employee
 *         equipment:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               equipmentId:
 *                 type: string
 *                 format: objectId
 *                 description: ID of the equipment
 *                 $ref: '#/components/schemas/Equipment'
 *               estimatedCountHour:
 *                 type: number
 *                 description: Estimated count of hours for the equipment
 *         materials:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               materialId:
 *                 type: string
 *                 format: objectId
 *                 description: ID of the material
 *                 $ref: '#/components/schemas/Material'
 *               estimatedValue:
 *                 type: number
 *                 description: Estimated value of the material
 *         description:
 *           type: string
 *           description: Description of the project assignment
 *         totalEstimatedCountDays:
 *           type: number
 *           description: Total estimated count of days for the project assignment
 *       required:
 *         - projectId
 */

const ProjectAssignmentModel = generateModel<ProjectAssignmentDoc>(
  "ProjectAssignment",
  {
    projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    employees: [
      {
        employeeId: {
          type: Schema.Types.ObjectId,
          ref: "Employee",
          required: true,
        },
        estimatedCountHour: {
          type: Number,
        },
      },
    ],
    equipment: [
      {
        equipmentId: {
          type: Schema.Types.ObjectId,
          ref: "Equipment",
          required: true,
        },
        estimatedCountHour: {
          type: Number,
        },
      },
    ],
    materials: [
      {
        materialId: {
          type: Schema.Types.ObjectId,
          ref: "Material",
          required: true,
        },
        estimatedValue: {
          type: Number,
        },
      },
    ],
    description: { type: String },
    totalEstimatedCountDays: { type: Number, required: false },
  },
);

export default ProjectAssignmentModel;

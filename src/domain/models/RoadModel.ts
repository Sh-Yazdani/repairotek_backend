import { RoadDoc } from "../docs/Road";
import { generateModel } from "../../utils/generators/modelGenerator";

/**
 * @swagger
 * components:
 *   schemas:
 *     Road:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the Road
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the Road was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the Road was last updated
 *         name:
 *           type: string
 *           description: The name of the road
 *           example: "Main Street"
 *         length:
 *           type: number
 *           description: The length of the road in kilometers
 *           example: 5.2
 *         condition:
 *           type: string
 *           description: The condition of the road
 *           example: "good"
 *         type:
 *           type: string
 *           description: The type of the road
 *           example: "highway"
 *         description:
 *           type: string
 *           description: Description of the road
 *           example: "A major road connecting downtown areas"
 */

/**
 * @typedef {Object} RoadDoc
 * @property {string} name - The name of the road
 * @property {number} [length] - The length of the road in kilometers
 * @property {string} [condition] - The condition of the road
 * @property {string} [type] - The type of the road
 * @property {string} [description] - Description of the road
 */
const RoadModel = generateModel<RoadDoc>("Road", {
  name: { type: String, required: true },
  length: { type: Number, required: false },
  condition: { type: String, required: false },
  type: { type: String, required: false },
  decription: { type: String },
});

export default RoadModel;

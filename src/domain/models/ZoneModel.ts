import { Schema } from "mongoose";
import { ZoneDoc } from "../docs/Zone";
import { generateModel } from "../../utils/generators/modelGenerator";

/**
 * @swagger
 * components:
 *   schemas:
 *     Zone:
 *       type: object
 *       required:
 *         - name
 *         - location
 *         - provinceId
 *         - municipalCode
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the Zone
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the Zone was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the Zone was last updated
 *         name:
 *           type: string
 *           description: The name of the zone
 *           example: "Downtown"
 *         location:
 *           type: object
 *           required:
 *             - type
 *             - coordinates
 *           properties:
 *             type:
 *               type: string
 *               enum: [Point, Polygon]
 *               description: The type of the location (Point or Polygon)
 *               example: "Point"
 *             coordinates:
 *               type: array
 *               items:
 *                 type: array
 *                 items:
 *                   type: number
 *               description: The coordinates of the location
 *               example: [[40.7128, -74.0060]]
 *         municipalCode:
 *           type: string
 *           description: The municipal code of the zone
 *           example: "12345"
 *         description:
 *           type: string
 *           description: A description of the zone
 *           example: "This is a busy downtown area with high traffic."
 *         provinceId:
 *           type: string
 *           description: The ID of the province
 *           example: "60d0fe4f5311236168a109ca"
 *         areaSize:
 *           type: number
 *           description: The size of the zone in square meters
 *           example: 5000
 *         roadCondition:
 *           type: string
 *           description: The condition of roads in the zone
 *           example: "good"
 *         roadsId:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of road IDs referring to roads in the zone
 *           example: ["60d0fe4f5311236168a109cb", "60d0fe4f5311236168a109cc"]
 *         accessibility:
 *           type: string
 *           description: Accessibility information for the zone
 *           example: "easy"
 */

/**
 * @typedef {Object} ZoneDoc
 * @property {string} name - The name of the zone
 * @property {Schema.Types.ObjectId} provinceId - The ID of the province
 * @property {string} [municipalCode] - The municipal code of the zone
 * @property {Object} location - The geographic location of the zone
 * @property {string} location.type - The type of the location ("Point" or "Polygon")
 * @property {number[][][]} location.coordinates - The coordinates of the location
 * @property {string} [description] - A description of the zone
 * @property {number} [areaSize] - The size of the zone in square meters
 * @property {string} [roadCondition] - The condition of roads in the zone
 * @property {Schema.Types.ObjectId[]} [roadsId] - Array of road IDs referring to roads in the zone
 * @property {string} [accessibility] - Accessibility information for the zone
 */

/**
 * Zone schema definition
 */

const ZoneModel = generateModel<ZoneDoc>("Zone", {
  name: { type: String, required: true },
  provinceId: { type: Schema.Types.ObjectId, ref: "Province", required: true },
  location: {
    type: { type: String, enum: ["Point", "Polygon"], required: true },
    coordinates: { type: [[[Number]]], required: true }, // سه بعدی برای چندضلعی‌ها
  },
  municipalCode: { type: String, required: true },
  description: { type: String },
  areaSize: { type: Number },
  roadCondition: { type: String },
  roadsId: [{ type: Schema.Types.ObjectId, ref: "Road" }],
  accessibility: { type: String },
});
export default ZoneModel;

// const ZoneModel = generateModel<ZoneDoc>("Zone", {
//   name: { type: String, required: true },
//   location: {
//     type: new Schema({
//       type: { type: String, default: "Point" },
//       coordinates: { type: [Number], required: true },
//     }),
//     required: true,
//   },
//   description: { type: String },
//   provinceId: { type: Schema.Types.ObjectId, ref: "Province", required: true },
// });

// roadWay: {
//   type: new Schema({
//     name: { type: String, required: true },
//     status: {
//       type: String,
//       enum: ["good", "average", "poor"],
//       required: true,
//     },
//     traffic: { type: String, enum: ["low", "medium", "high"] },
//   }),
//   required: true,
// },

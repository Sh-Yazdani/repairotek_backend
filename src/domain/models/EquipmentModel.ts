import { generateModel } from "../../utils/generators/modelGenerator";
import { EquipmentDoc } from "../docs/Equipment";
/**
 * @swagger
 * components:
 *   schemas:
 *     Equipment:
 *       type: object
 *       description: Schema for equipment details
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the equipment
 *         name:
 *           type: string
 *           description: Name of the equipment
 *         equipmentModel:
 *           type: string
 *           description: Model of the equipment
 *         description:
 *           type: string
 *           description: Description of the equipment
 *         pricePerHour:
 *           type: number
 *           description: Price per hour for using the equipment
 *           default: 0
 *         count:
 *           type: number
 *           description: Number of available units of the equipment
 *           default: 0
 *         Manufacturer:
 *           type: string
 *           description: Manufacturer of the equipment
 *         VIN:
 *           type: string
 *           description: Vehicle Identification Number of the equipment
 *           default: "0"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the equipment was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the equipment was last updated
 *       required:
 *         - name
 *         - equipmentModel
 *         - count
 *         - Manufacturer
 *         - VIN
 *         - createdAt
 *         - updatedAt
 */

const EquipmentModel = generateModel<EquipmentDoc>("Equipment", {
  // equipmentCode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  equipmentModel: { type: String, required: true },
  description: { type: String, required: false },
  pricePerHour: { type: Number, required: false, default: 0 },
  count: { type: Number, required: false, default: 0 },
  Manufacturer: { type: String, required: false },
  VIN: { type: String, required: false, default: "0" },
  VRM: { type: String, required: false, default: "0" },
});

export default EquipmentModel;

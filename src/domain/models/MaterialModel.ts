import { generateModel } from "../../utils/generators/modelGenerator";
import { MaterialDoc } from "../docs/Material";

// enum Unit {
//   Gram = "gr",
//   Kilogram = "Kg",
//   Ton = "Tone",
// }
/**
 * @swagger
 * components:
 *   schemas:
 *     Material:
 *       type: object
 *       description: Schema for material details
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the material
 *         description:
 *           type: string
 *           description: Description of the material
 *         pricePerUnit:
 *           type: number
 *           description: Price per unit of the material
 *           default: 0
 *           minimum: 0
 *         value:
 *           type: number
 *           description: Value of the material
 *           default: 0
 *           minimum: 0
 *         unit:
 *           type: string
 *           description: Unit of measurement for the material
 *           enum:
 *             - gr
 *             - Kg
 *             - Tone
 *           default: ""
 *       required:
 *         - name
 *         - description
 *         - value
 *         - unit
 */

const Unit = ["gr", "Kg", "Tone"];

const MaterialModel = generateModel<MaterialDoc>("Material", {
  // materialCode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  pricePerUnit: { type: Number, required: false, default: 0, min: 0 },
  value: { type: Number, required: true, default: 0, min: 0 },
  unit: { type: String, enum: Unit, required: true, default: "" },
});

export default MaterialModel;

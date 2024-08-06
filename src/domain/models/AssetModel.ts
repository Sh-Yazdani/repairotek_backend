import { AssetDoc } from "../docs/Asset";
import { generateModel } from "../../utils/generators/modelGenerator";
import { Schema } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     AssetMaterial:
 *       type: object
 *       properties:
 *         materialId:
 *           type: string
 *           format: objectId
 *           description: ID of the material
 *         value:
 *           type: number
 *           description: Value of the material
 *         costPerUnit:
 *           type: number
 *           description: Cost per unit of the material
 *       required:
 *         - materialId
 *         - value
 *     AssetEquipment:
 *       type: object
 *       properties:
 *         equipmentId:
 *           type: string
 *           format: objectId
 *           description: ID of the equipment
 *         countHour:
 *           type: number
 *           description: Number of hours the equipment is used
 *         costPerHour:
 *           type: number
 *           description: Cost per hour of using the equipment
 *       required:
 *         - equipmentId
 *         - countHour
 *     Asset:
 *       type: object
 *       properties:
 *         materials:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/AssetMaterial'
 *         equipment:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/AssetEquipment'
 */

const AssetModel = generateModel<AssetDoc>("Asset", {
  materials: [
    {
      materialId: { type: Schema.Types.ObjectId, required: true },
      value: { type: Number, required: true },
      costPerUnit: { type: Number, required: false },
    },
  ],
  equipment: [
    {
      equipmentId: { type: Schema.Types.ObjectId, required: true },
      countHour: { type: Number, required: true },
      costPerHour: { type: Number, required: false },
    },
  ],
});

export default AssetModel;

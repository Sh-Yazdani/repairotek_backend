import { ProvinceDoc } from "../docs/Province";
import { generateModel } from "../../utils/generators/modelGenerator";
import { Schema } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Province:
 *       type: object
 *       required:
 *         - code
 *         - name
 *         - countryId
 *       properties:
 *         code:
 *           type: number
 *           description: Code of the province
 *         name:
 *           type: string
 *           description: Name of the province
 *         countryId:
 *           type: string
 *           format: ObjectId
 *           description: ID of the country
 */

const ProvinceModel = generateModel<ProvinceDoc>("Province", {
  code: { type: Number, required: true },
  name: { type: String, required: true },
  countryId: { type: Schema.Types.ObjectId, ref: "Country", required: true },
});

export default ProvinceModel;

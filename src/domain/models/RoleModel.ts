import { RoleDoc } from "../docs/Role";
import { generateModel } from "../../utils/generators/modelGenerator";

/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the Role
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the Role was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the Role was last updated
 *         name:
 *           type: string
 *           description: Name of the role
 *         description:
 *           type: string
 *           description: Description of the role (optional)
 *           default: ""
 *       example:
 *         name: Admin
 *         description: Administrator with full access
 */
const RoleModel = generateModel<RoleDoc>("Role", {
  name: { type: String, required: true },
  description: { type: String, required: false, default: "" }, // Optional with default empty string
});

export default RoleModel;

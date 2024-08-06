import { TokenBlackListDoc } from "../docs/TokenBlackList";
import { generateModel } from "../../utils/generators/modelGenerator";

/**
 * @swagger
 * components:
 *   schemas:
 *     TokenBlackList:
 *       type: object
 *       required:
 *         - token
 *       properties:
 *         token:
 *           type: string
 *           description: The token that has been blacklisted
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 */

/**
 * TokenBlackList schema definition
 */
const TokenBlackListModel = generateModel<TokenBlackListDoc>("TokenBlackList", {
  token: { type: String, required: true, unique: true },
});

export default TokenBlackListModel;

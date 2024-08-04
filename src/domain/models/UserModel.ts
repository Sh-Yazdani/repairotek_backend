import { Schema } from "mongoose";
import { UserDoc } from "../docs/User";
import { generateModel } from "../../utils/generators/modelGenerator";
import { Gender } from "../../utils/constant/enums/Gender";

/**
 * @swagger
 * components:
 *   schemas:
 *     UserInfo:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - role
 *       properties:
 *         firstName:
 *           type: string
 *           description: First name of the user
 *         lastName:
 *           type: string
 *           description: Last name of the user
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the user
 *         profilePhoto:
 *           type: string
 *           description: URL to the profile photo of the user (optional)
 *         role:
 *           type: string
 *           description: Role of the user
 *       example:
 *         firstName: John
 *         lastName: Doe
 *         email: johndoe@example.com
 *         profilePhoto: http://example.com/profile.jpg
 *         role: admin
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - gender
 *         - email
 *         - address
 *         - mobile
 *         - roleId
 *         - password
 *       properties:
 *         firstName:
 *           type: string
 *           description: First name of the user
 *         lastName:
 *           type: string
 *           description: Last name of the user
 *         gender:
 *           type: string
 *           enum:
 *             - male
 *             - female
 *             - other
 *           description: Gender of the user
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the user
 *         address:
 *           type: string
 *           description: Address of the user
 *         telephone:
 *           type: string
 *           description: Telephone number of the user (optional)
 *         mobile:
 *           type: number
 *           description: Mobile number of the user
 *         profilePhoto:
 *           type: string
 *           description: URL to the profile photo of the user (optional)
 *         roleId:
 *           type: string
 *           format: ObjectId
 *           description: Role ID of the user
 *         password:
 *           type: string
 *           description: Password for the user
 *         lastActivity:
 *           type: number
 *           description: Timestamp of the user's last activity (optional)
 *         nationalId:
 *           type: number
 *           description: National ID of the user (optional)
 *         permissions:
 *           type: array
 *           items:
 *             type: string
 *             format: ObjectId
 *           description: List of permission IDs associated with the user
 *       example:
 *         firstName: John
 *         lastName: Doe
 *         gender: male
 *         email: johndoe@example.com
 *         address: 123 Main St
 *         telephone: '123-456-7890'
 *         mobile: 0987654321
 *         profilePhoto: 'http://example.com/photo.jpg'
 *         roleId: '60c72b2f9b1d8c001f8e4c9e'
 *         password: 'securepassword123'
 *         lastActivity: 1622520000
 *         nationalId: 12345678
 *         permissions: ['60c72b2f9b1d8c001f8e4c9d']
 */

const UserModel = generateModel<UserDoc>(
  "User",
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, enum: Gender, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    telephone: { type: String, required: false },
    mobile: { type: String, required: true },
    profilePhoto: { type: String },
    roleId: { type: Schema.Types.ObjectId, ref: "Role", required: true },
    password: { type: String, required: true },
    lastActivity: { type: Number },
    nationalId: { type: String },
    permissions: [
      {
        type: Schema.Types.ObjectId, //permissionId
        ref: "Permission",
      },
    ],
  },
  ["password"],
);

export default UserModel;

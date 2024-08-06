import { AdminDoc } from "../docs/Admin";
import UserModel from "./UserModel";
import { generateModel } from "../../utils/generators/modelGenerator";
/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       allOf:
 *         - $ref: '#/components/schemas/User'
 *         - type: object
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
 *           description: First name of the admin
 *         lastName:
 *           type: string
 *           description: Last name of the admin
 *         gender:
 *           type: string
 *           enum:
 *             - male
 *             - female
 *             - other
 *           description: Gender of the admin
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the admin
 *         address:
 *           type: string
 *           description: Address of the admin
 *         telephone:
 *           type: string
 *           description: Telephone number of the admin (optional)
 *         mobile:
 *           type: string
 *           description: Mobile number of the admin
 *         profilePhoto:
 *           type: string
 *           description: URL to the profile photo of the admin (optional)
 *         roleId:
 *           type: string
 *           format: ObjectId
 *           description: Role ID of the admin
 *         password:
 *           type: string
 *           description: Password for the admin
 *         lastActivity:
 *           type: number
 *           description: Timestamp of the admin's last activity (optional)
 *         nationalId:
 *           type: string
 *           description: National ID of the admin (optional)
 *         permissions:
 *           type: array
 *           items:
 *             type: string
 *             format: ObjectId
 *           description: List of permission IDs associated with the admin
 *       example:
 *         firstName: Jane
 *         lastName: Smith
 *         gender: female
 *         email: janesmith@example.com
 *         address: 456 Another St
 *         telephone: '321-654-0987'
 *         mobile: '987-654-3210'
 *         profilePhoto: 'http://example.com/photo2.jpg'
 *         roleId: '60c72b2f9b1d8c001f8e4c9f'
 *         password: 'anothersecurepassword456'
 *         lastActivity: 1622606400
 *         nationalId: 'B98765432'
 *         permissions: ['60c72b2f9b1d8c001f8e4ca0']
 */

///////////// Discriminat //////////////////
const AdminModel = generateModel<AdminDoc>(
  "Admin",
  {},
  ["__t", "password"],
  UserModel,
);

export default AdminModel;

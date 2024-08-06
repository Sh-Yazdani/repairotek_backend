import { PermissionDoc } from "../docs/Permission";
import { generateModel } from "../../utils/generators/modelGenerator";
import { Schema } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Permission:
 *       type: object
 *       description: Schema for user permissions on a resource
 *       properties:
 *
 *         userId:
 *           type: string
 *           format: objectId
 *           description: ID of the user
 *           $ref: '#/components/schemas/User'
 *         resourceId:
 *           type: string
 *           format: objectId
 *           description: ID of the resource
 *           $ref: '#/components/schemas/Resource'
 *         canRead:
 *           type: boolean
 *           description: Permission to read the resource
 *           default: false
 *         canWrite:
 *           type: boolean
 *           description: Permission to write to the resource
 *           default: false
 *         canEdit:
 *           type: boolean
 *           description: Permission to edit the resource
 *           default: false
 *         canDelete:
 *           type: boolean
 *           description: Permission to delete the resource
 *           default: false
 *       required:
 *         - userId
 *         - resourceId
 */

const PermissionModel = generateModel<PermissionDoc>("Permission", {
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  resourceId: { type: Schema.Types.ObjectId, ref: "Resource", required: true },
  canRead: { type: Boolean, default: false },
  canWrite: { type: Boolean, default: false },
  canEdit: { type: Boolean, default: false },
  canDelete: { type: Boolean, default: false },
});

export default PermissionModel;

import { Document, Schema } from "mongoose";
import { RoleDoc } from "./Role";

export interface UserDoc extends Document {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  address?: string;
  telephone?: string;
  mobile: string;
  profilePhoto: string; // Assuming profile photo is stored as a string (URL or file path)
  roleId: RoleDoc | Schema.Types.ObjectId;
  password: string;
  lastActivity?: number;
  nationalId?: string;
  permissions?: Schema.Types.ObjectId[]; //permissionIds
}

export interface UserInfoDoc {
  id:string;
  firstName: string;
  lastName: string;
  email: string;
  profilePhoto: string; 
  role: string;
};
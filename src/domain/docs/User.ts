import { Document, Schema } from "mongoose";

export interface UserDoc extends Document {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  telephone: string;
  mobile: string;
  profilePhoto: string; // Assuming profile photo is stored as a string (URL or file path)
  roleId: Schema.Types.ObjectId; 
  password: string;
  lastActivity?: number;
}

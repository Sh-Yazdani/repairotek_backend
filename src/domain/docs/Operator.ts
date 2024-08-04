
import { Document } from "mongoose";

export interface OperatorDoc extends Document {
  opreatorCode: string;
  hireDate?: Date;
}

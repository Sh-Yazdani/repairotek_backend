import { Document } from "mongoose";

export interface MaterialDoc extends Document {
  materialCode:string;
  name: string;
  description: string;
  pricePerUnit?: number;
  value: number;
  unit: string;
}

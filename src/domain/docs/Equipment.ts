import { Document } from "mongoose";

export interface EquipmentDoc extends Document {
  equipmentCode:string;
  name: string;
  equipmentModel: string;
  description: string;
  pricePerHour?: number;
  count: number;
  Manufacturer: string;
  VIN?: string;
  VRM?: string;
}

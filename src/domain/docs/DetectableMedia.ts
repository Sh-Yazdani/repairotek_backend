import { Document } from "mongoose";

export interface DetectableMedia extends Document {
  title: string;
  url: string;
  description?: string;
  location: string;
  time: Date;
}

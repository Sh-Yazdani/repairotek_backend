import { Document } from "mongoose";
import { DetectableMedia } from "./DetectableMedia";
export interface VideoDoc extends DetectableMedia {
  description?: string;
}

import { Document } from "mongoose";
import { DetectableMedia } from "./DetectableMedia";
export interface VideoDoc extends DetectableMedia {
  duration?: string;
}

import { Document } from "mongoose";

export interface TaskDoc extends Document {
  title: string;
  description: string;
  status: string;
  tags?: string[];
  assignees?: string[];
  priority?: string;
  dueDate?: string;
}

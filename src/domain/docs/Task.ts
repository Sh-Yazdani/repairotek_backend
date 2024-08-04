import { Document } from "mongoose";

export interface TaskDoc extends Document {
  title: string;
  description: string;
  status: string;
  tags: string[] | undefined;
  assignees: string[] | undefined;
  priority: string | undefined;
  dueDate: string | undefined;
}

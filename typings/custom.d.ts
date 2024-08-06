import { UserDoc } from "../domain/docs/User";
import * as express from "express";

declare global {
  namespace Express {
    interface MulterFile extends Multer.File {
      cloudStorageObject?: string;
      cloudStorageUrl?: string;
    }

    interface Request {
      user?: UserDoc;
      file?: MulterFile;
    }
  }
}

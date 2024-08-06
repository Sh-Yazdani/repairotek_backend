import { Request, Response, NextFunction } from "express";
import { Storage } from "@google-cloud/storage";
import path from "path";

// مسیر به فایل JSON کلید سرویس
const keyFilePath = path.join(
  __dirname,
  "../config",
  "repairotek-ai-ae98f6317091.json"
);

// ایجاد یک نمونه از Google Cloud Storage
const storage = new Storage({ keyFilename: keyFilePath });

// نام باکت
const bucketName = "repairotek-bucket";

const uploadToGCS = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const file = req.file as Express.MulterFile; // تبدیل نوع req.file به MulterFile

  const bucket = storage.bucket(bucketName);
  const blob = bucket.file(file.originalname);
  const blobStream = blob.createWriteStream({
    resumable: false,
  });

  blobStream.on("error", (err) => {
    console.error("Error uploading to GCS:", err);
    next(err);
  });

  blobStream.on("finish", () => {
    // فایل با موفقیت آپلود شد
    file.cloudStorageObject = blob.name;
    file.cloudStorageUrl = `https://storage.googleapis.com/${bucketName}/${blob.name}`;
    next();
  });

  blobStream.end(file.buffer);
};

export { uploadToGCS };

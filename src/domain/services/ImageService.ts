import { ImageDoc } from "../docs/Image";
import ImageRepository from "../repositories/ImageRepository";
import {
  ImageCreationValidationSchema,
  ImagePatchValidationSchema,
} from "../validations/ImageValidation";
import BaseService from "./BaseService";
class ImageService extends BaseService<ImageDoc> {
  constructor() {
    super(
      ImageRepository,
      ImageCreationValidationSchema,
      ImagePatchValidationSchema,
    );
  }
}

export default new ImageService();

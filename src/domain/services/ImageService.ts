import { ImageDoc } from "../docs/Image";
import BaseService from "./BaseService";
import ImageRepository from "../repositories/ImageRepository";
import {
  ImageValidationSchema,
  ImagePatchValidationSchema,
} from "../validations/ImageValidation";

class ImageService extends BaseService<ImageDoc> {
  private imageRepository = this.repository as typeof ImageRepository;
  constructor() {
    super(ImageRepository, ImageValidationSchema, ImagePatchValidationSchema);
  }
}
export default new ImageService();

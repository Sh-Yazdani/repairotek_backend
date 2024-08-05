import { ImageDoc } from "../../domain/docs/Image";
import BaseController from "./BaseController";
import ImageService from "../../domain/services/ImageService";

class ImageController extends BaseController<ImageDoc> {
  private imageService = this.service as typeof ImageService;
  constructor() {
    super(ImageService);
  }
}

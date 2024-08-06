
import { ImageDoc } from "../../domain/docs/Image";
import ImageService from "../../domain/services/ImageService";
import BaseController from "./BaseController";

class ImageController extends BaseController<ImageDoc> {
  private imageService = this.service as typeof ImageService;
  constructor() {
    super(ImageService);
  }
}
export default new ImageController();

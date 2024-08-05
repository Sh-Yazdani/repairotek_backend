import { ImageDoc } from "../docs/Image";
import ImageModel from "../models/ImageModel";
import BaseRepository from "./BaseRepository";

class ImageRepository extends BaseRepository<ImageDoc> {
  constructor() {
    super(ImageModel);
  }
}

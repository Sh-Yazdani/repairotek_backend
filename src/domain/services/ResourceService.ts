
import { ResourceDoc } from "../docs/Resource";
import BaseService from "./BaseService";
import ResourceRepository from "../repositories/ResourceRepository";
import ResourceValidationSchema from "../validations/ResourceValidation";

class ResourceService extends BaseService<ResourceDoc> {
  private resourceRepository = this.repository as typeof ResourceRepository;
  constructor() {
    super(ResourceRepository, ResourceValidationSchema);
  }
}
export default new ResourceService();

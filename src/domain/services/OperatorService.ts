
import { OperatorDoc } from "../docs/Operator";
import BaseService from "./BaseService";
import OperatorRepository from "../repositories/OperatorRepository";
import {OperatorValidationSchema, OperatorValidationPatchSchema} from "../validations/OperatorValidation";

class OperatorService extends BaseService<OperatorDoc> {
  private operatorRepository = this.repository as typeof OperatorRepository;
  constructor() {
    super(OperatorRepository, OperatorValidationSchema, OperatorValidationPatchSchema);
  }
}
export default new OperatorService();

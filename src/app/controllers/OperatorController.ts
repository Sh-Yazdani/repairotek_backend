
import { OperatorDoc } from "../../domain/docs/Operator";
import OperatorService from "../../domain/services/OperatorService";
import BaseController from "./BaseController";

class OperatorController extends BaseController<OperatorDoc> {
  private operatorService = this.service as typeof OperatorService;
  constructor() {
    super(OperatorService);
  }
}
export default new OperatorController();

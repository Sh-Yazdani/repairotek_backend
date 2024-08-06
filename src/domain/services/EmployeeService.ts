import { EmployeeDoc } from "../docs/Employee";
import BaseService from "./BaseService";
import EmployeeRepository from "../repositories/EmployeeRepository";
import {EmployeePatchValidationSchema, EmployeeValidationSchema} from "../validations/EmployeeValidation";

class EmployeeService extends BaseService<EmployeeDoc> {
  constructor() {
    super(EmployeeRepository, EmployeeValidationSchema, EmployeePatchValidationSchema);
  }
  
}
export default new EmployeeService();

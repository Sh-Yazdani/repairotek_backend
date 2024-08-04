import { Schema } from "mongoose";
import { generateModel } from "../../utils/generators/modelGenerator";
import UserModel from "./UserModel";
import { EmployeeDoc } from "../docs/Employee";
import { MaritalStatus } from "../../utils/constant/MaritalStatus";
import { ContractType } from "../../utils/constant/ContractType";
import { generateCode } from "../../utils/functions/generateCode";

/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       allOf:
 *         - $ref: '#/components/schemas/User'
 *         - type: object
 *           properties:
 *             employeeCode:
 *               type: string
 *               description: Unique code assigned to the employee
 *             hireDate:
 *               type: string
 *               format: date
 *               description: Date when the employee was hired
 *             jobId:
 *               type: string
 *               format: ObjectId
 *               description: Reference to the Job ID
 *             skillDescription:
 *               type: string
 *               description: Description of the employee's skills
 *             description:
 *               type: string
 *               description: General description about the employee
 *             dateOfBirth:
 *               type: string
 *               format: date
 *               description: Employee's date of birth
 *             maritalStatus:
 *               type: string
 *               enum:
 *                 - Single
 *                 - Married
 *                 - Divorced
 *                 - Widowed
 *               description: Marital status of the employee
 *             yearsOfExperience:
 *               type: number
 *               description: Number of years of work experience
 *             contractType:
 *               type: string
 *               enum:
 *                 - Permanent
 *                 - Temporary
 *                 - Contract
 *                 - Intern
 *               description: Type of employment contract
 *             bankAccountInfo:
 *               type: string
 *               description: Bank account information for salary payment
 *             insuranceNumber:
 *               type: number
 *               description: Employee's insurance number
 *       example:
 *         firstName: John
 *         lastName: Doe
 *         gender: male
 *         email: johndoe@example.com
 *         address: 123 Main St
 *         mobile: '098-765-4321'
 *         roleId: '60c72b2f9b1d8c001f8e4c9e'
 *         password: 'securepassword123'
 *         employeeCode: "1234"
 *         hireDate: '2022-01-15'
 *         jobId: '60d21b2f9b1d8c001f8e4c9f'
 *         skillDescription: 'Expert in Node.js and React'
 *         description: 'A highly skilled software engineer'
 *         dateOfBirth: '1990-05-20'
 *         maritalStatus: Single
 *         yearsOfExperience: 5
 *         contractType: Permanent
 *         bankAccountInfo: '1234567890'
 *         insuranceNumber: 987654321
 */

///////////// Discriminat //////////////////
const EmployeeModel = generateModel<EmployeeDoc>(
  "Employee",
  {
    employeeCode: {
      type: String,
      required: true,
      default: () => generateCode("EMP"),
      unique: true,
    },
    hireDate: { type: Date, required: false },
    jobId: { type: Schema.Types.ObjectId, ref: "Job", required: false },
    skillDescription: { type: String, required: false },
    description: { type: String, required: false },
    dateOfBirth: { type: Date, required: false },
    maritalStatus: { type: String, enum: MaritalStatus, required: false }, // وضعیت تأهل
    yearsOfExperience: { type: Number, required: false }, // تعداد سال‌های تجربه کاری
    contractType: { type: String, enum: ContractType, required: false }, // نوع قرارداد
    bankAccountInfo: { type: String, required: false }, // اطلاعات حساب بانکی برای پرداخت حقوق
    insuranceNumber: { type: Number, required: false }, // شماره بیمه
  },
  ["__t", "password"],
  UserModel,
);

export default EmployeeModel;

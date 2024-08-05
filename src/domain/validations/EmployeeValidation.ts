import Joi from "joi";
import { MaritalStatus } from "../../utils/constant/MaritalStatus";
import { ContractType } from "../../utils/constant/ContractType";
import { generateCode } from "../../utils/functions/generateCode";

const EmployeeValidationSchema = Joi.object({
  firstName: Joi.string().required().messages({
    "string.base": "First name should be a string",
    "any.required": "First name is required",
  }),
  lastName: Joi.string().required().messages({
    "string.base": "Last name should be a string",
    "any.required": "Last name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Email must be a valid email",
    "any.required": "Email is required",
  }),
  address: Joi.string().optional().messages({
    "string.base": "Address should be a string",
  }),
  telephone: Joi.string().optional().messages({
    "string.base": "Telephone should be a string",
  }),
  mobile: Joi.string().required().messages({
    "string.base": "Mobile should be a string",
    "any.required": "Mobile is required",
  }),
  profilePhoto: Joi.string().optional().messages({
    "string.base": "Profile photo should be a string",
  }),
  roleId: Joi.string().hex().length(24).required().messages({
    "string.base": "Role ID should be a string",
    "any.required": "Role ID is required",
  }),
  password: Joi.string().default("Emp@1234").optional().messages({
    "string.base": "Password should be a string",
  }),
  gender: Joi.string().valid("male", "female").required().messages({
    "string.base": "Gender should be a string",
    "any.required": "Gender is required",
    "any.only": "Gender must be one of 'male' or 'female'",
  }),
  employeeCode: Joi.string()
    .default(() => generateCode("EMP"))
    .optional()
    .messages({
      "string.base": "Employee code should be a string",
    }),
  hireDate: Joi.date().optional().messages({
    "date.base": "Hire date should be a valid date",
  }),
  jobId: Joi.string().hex().length(24).optional().messages({
    "string.base": "Job ID should be a string",
  }),
  skillDescription: Joi.string().optional().messages({
    "string.base": "Skill description should be a string",
  }),
  description: Joi.string().optional().messages({
    "string.base": "Description should be a string",
  }),
  dateOfBirth: Joi.date().optional().messages({
    "date.base": "Date of birth should be a valid date",
  }),
  maritalStatus: Joi.string()
    .valid(...Object.values(MaritalStatus))
    .optional()
    .messages({
      "string.base": "Marital status should be a string",
      "any.only": `Marital status must be one of ${Object.values(
        MaritalStatus
      ).join(", ")}`,
    }),
  yearsOfExperience: Joi.number().optional().messages({
    "number.base": "Years of experience should be a number",
  }),
  contractType: Joi.string()
    .valid(...Object.values(ContractType))
    .optional()
    .messages({
      "string.base": "Contract type should be a string",
      "any.only": `Contract type must be one of ${Object.values(
        ContractType
      ).join(", ")}`,
    }),
  bankAccountInfo: Joi.string().optional().messages({
    "string.base": "Bank account info should be a string",
  }),
  insuranceNumber: Joi.number().optional().messages({
    "number.base": "Insurance number should be a number",
  }),
});

const EmployeePatchValidationSchema = Joi.object({
  firstName: Joi.string().optional().messages({
    "string.base": "First name should be a string",
  }),
  lastName: Joi.string().optional().messages({
    "string.base": "Last name should be a string",
  }),
  email: Joi.string().email().optional().messages({
    "string.email": "Email must be a valid email",
  }),
  address: Joi.string().optional().messages({
    "string.base": "Address should be a string",
  }),
  telephone: Joi.string().optional().messages({
    "string.base": "Telephone should be a string",
  }),
  mobile: Joi.string().optional().messages({
    "string.base": "Mobile should be a string",
  }),
  profilePhoto: Joi.string().optional().messages({
    "string.base": "Profile photo should be a string",
  }),
  roleId: Joi.string().hex().length(24).optional().messages({
    "string.base": "Role ID should be a string",
  }),
  password: Joi.string().optional().messages({
    "string.base": "Password should be a string",
  }),
  gender: Joi.string().valid("male", "female").optional().messages({
    "string.base": "Gender should be a string",
    "any.only": "Gender must be one of 'male' or 'female'",
  }),
  employeeCode: Joi.string().optional().messages({
    "string.base": "Employee code should be a string",
  }),
  hireDate: Joi.date().optional().messages({
    "date.base": "Hire date should be a valid date",
  }),
  jobId: Joi.string().hex().length(24).optional().messages({
    "string.base": "Job ID should be a string",
  }),
  skillDescription: Joi.string().optional().messages({
    "string.base": "Skill description should be a string",
  }),
  description: Joi.string().optional().messages({
    "string.base": "Description should be a string",
  }),
  dateOfBirth: Joi.date().optional().messages({
    "date.base": "Date of birth should be a valid date",
  }),
  maritalStatus: Joi.string()
    .valid(...Object.values(MaritalStatus))
    .optional()
    .messages({
      "string.base": "Marital status should be a string",
      "any.only": `Marital status must be one of ${Object.values(
        MaritalStatus
      ).join(", ")}`,
    }),
  yearsOfExperience: Joi.number().optional().messages({
    "number.base": "Years of experience should be a number",
  }),
  contractType: Joi.string()
    .valid(...Object.values(ContractType))
    .optional()
    .messages({
      "string.base": "Contract type should be a string",
      "any.only": `Contract type must be one of ${Object.values(
        ContractType
      ).join(", ")}`,
    }),
  bankAccountInfo: Joi.string().optional().messages({
    "string.base": "Bank account info should be a string",
  }),
  insuranceNumber: Joi.number().optional().messages({
    "number.base": "Insurance number should be a number",
  }),
});

export { EmployeeValidationSchema, EmployeePatchValidationSchema };

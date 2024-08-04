import * as fs from "fs/promises";
import * as path from "path";
import { SERVICES_PATH, doesFileExist } from "./utils";

export const generateServiceFile = async (
  resourceNameUC: string,
  resourceNameLC: string
): Promise<void> => {
  const servicePath = path.join(SERVICES_PATH, `${resourceNameUC}Service.ts`);

  if (await doesFileExist(servicePath)) {
    console.error(`${resourceNameUC}Service already exists at: ${servicePath}`);
    return;
  }

  const serviceContent = `
import { ${resourceNameUC}Doc } from "../docs/${resourceNameUC}";
import BaseService from "./BaseService";
import ${resourceNameUC}Repository from "../repositories/${resourceNameUC}Repository";
import {${resourceNameUC}ValidationSchema, {${resourceNameUC}PatchValidationSchema} from "../validations/${resourceNameUC}Validation";

class ${resourceNameUC}Service extends BaseService<${resourceNameUC}Doc> {
  private ${resourceNameLC}Repository = this.repository as typeof ${resourceNameUC}Repository;
  constructor() {
    super(${resourceNameUC}Repository, ${resourceNameUC}ValidationSchema,{${resourceNameUC}PatchValidationSchema );
  }
}
export default new ${resourceNameUC}Service();
`;

  try {
    await fs.writeFile(servicePath, serviceContent);
    console.log(`${resourceNameUC}Service created at: ${servicePath}`);
  } catch (error) {
    console.error("Error creating Service:", error);
  }
};
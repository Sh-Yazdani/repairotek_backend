import * as fs from "fs/promises";
import * as path from "path";
import { ROUTES_PATH, doesFileExist } from "./utils";

export const generateRouterFile = async (
  resourceNameUC: string,
  resourceNameLC: string
): Promise<void> => {
  const routePath = path.join(ROUTES_PATH, `${resourceNameLC}Router.ts`);

  if (await doesFileExist(routePath)) {
    console.error(`${resourceNameLC}Route already exists at: ${routePath}`);
    return;
  }

  const routeContent = `
import express from "express";
import ${resourceNameUC}Controller from "../controllers/${resourceNameUC}Controller";

const ${resourceNameLC}Router = express.Router();

${resourceNameLC}Router.get("/${resourceNameLC}s/:id", ${resourceNameUC}Controller.getById);
${resourceNameLC}Router.get("/${resourceNameLC}s", ${resourceNameUC}Controller.getAll);
${resourceNameLC}Router.post("/${resourceNameLC}s", ${resourceNameUC}Controller.create);
${resourceNameLC}Router.put("/${resourceNameLC}s/:id", ${resourceNameUC}Controller.edit);
${resourceNameLC}Router.patch("/${resourceNameLC}s/:id", ${resourceNameUC}Controller.edit);
${resourceNameLC}Router.delete("/${resourceNameLC}s/:id", ${resourceNameUC}Controller.delete);

export default ${resourceNameLC}Router;
`;

  try {
    await fs.writeFile(routePath, routeContent);
    console.log(`${resourceNameLC}Route created at: ${routePath}`);
  } catch (error) {
    console.error("Error creating Route:", error);
  }
};

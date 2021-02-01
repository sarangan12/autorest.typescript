import { Project } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { OperationGroupDetails } from "../models/operationDetails";

export function generateIndexFile(
  clientDetails: ClientDetails,
  project: Project
) {
  const indexFile = project.createSourceFile(
    `${clientDetails.srcPath}/index.ts`,
    undefined,
    {
      overwrite: true
    }
  );

  if (
    clientDetails.options.hasPaging &&
    !clientDetails.options.disablePagingAsyncIterators
  ) {
    indexFile.addStatements([`/// <reference lib="esnext.asynciterable" />`]);
  }

  const exportDeclarations = [
    {
      moduleSpecifier: "./operations"
    },
    {
      moduleSpecifier: "./models"
    },
    {
      moduleSpecifier: `./${clientDetails.sourceFileName}`,
      namedExports: [clientDetails.className]
    },
    {
      moduleSpecifier: `./${clientDetails.sourceFileName}Context`,
      namedExports: [`${clientDetails.className}Context`]
    }
  ];

  if (!includeOperations(clientDetails.operationGroups)) {
    exportDeclarations.shift();
  }

  indexFile.addExportDeclarations(exportDeclarations);
}

function includeOperations(operationGroups: OperationGroupDetails[]) {
  for (const operationGroup of operationGroups) {
    if (operationGroup.key.trim().length > 0) {
      return true;
    }
  }

  return false;
}

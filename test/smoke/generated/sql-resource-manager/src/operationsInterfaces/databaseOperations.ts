/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import {
  DatabaseOperation,
  DatabaseOperationsListByDatabaseOptionalParams,
  DatabaseOperationsCancelOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DatabaseOperations. */
export interface DatabaseOperations {
  /**
   * Gets a list of operations performed on the database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabaseOperationsListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<DatabaseOperation>;
  /**
   * Cancels the asynchronous operation on the database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param operationId The operation identifier.
   * @param options The options parameters.
   */
  cancel(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    operationId: string,
    options?: DatabaseOperationsCancelOptionalParams
  ): Promise<coreHttp.RestResponse>;
}

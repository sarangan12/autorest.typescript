/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ServiceObjective,
  ServiceObjectivesListByServerOptionalParams,
  ServiceObjectivesGetOptionalParams,
  ServiceObjectivesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServiceObjectives. */
export interface ServiceObjectives {
  /**
   * Returns database service objectives.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServiceObjectivesListByServerOptionalParams
  ): PagedAsyncIterableIterator<ServiceObjective>;
  /**
   * Gets a database service objective.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param serviceObjectiveName The name of the service objective to retrieve.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    serviceObjectiveName: string,
    options?: ServiceObjectivesGetOptionalParams
  ): Promise<ServiceObjectivesGetResponse>;
}

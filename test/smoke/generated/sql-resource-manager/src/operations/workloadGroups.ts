/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { WorkloadGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { LroEngine } from "../lro";
import { CoreClientLro, shouldDeserializeLro } from "../coreClientLro";
import {
  WorkloadGroup,
  WorkloadGroupsListByDatabaseNextOptionalParams,
  WorkloadGroupsListByDatabaseOptionalParams,
  WorkloadGroupsGetOptionalParams,
  WorkloadGroupsGetResponse,
  WorkloadGroupsCreateOrUpdateOptionalParams,
  WorkloadGroupsCreateOrUpdateResponse,
  WorkloadGroupsDeleteOptionalParams,
  WorkloadGroupsListByDatabaseResponse,
  WorkloadGroupsListByDatabaseNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a WorkloadGroups. */
export class WorkloadGroupsImpl implements WorkloadGroups {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class WorkloadGroups class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the list of workload groups
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: WorkloadGroupsListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<WorkloadGroup> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      serverName,
      databaseName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByDatabasePagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          options
        );
      }
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: WorkloadGroupsListByDatabaseOptionalParams
  ): AsyncIterableIterator<WorkloadGroup[]> {
    let result = await this._listByDatabase(
      resourceGroupName,
      serverName,
      databaseName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByDatabaseNext(
        resourceGroupName,
        serverName,
        databaseName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: WorkloadGroupsListByDatabaseOptionalParams
  ): AsyncIterableIterator<WorkloadGroup> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a workload group
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    options?: WorkloadGroupsGetOptionalParams
  ): Promise<WorkloadGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        workloadGroupName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a workload group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group.
   * @param parameters The requested workload group state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    parameters: WorkloadGroup,
    options?: WorkloadGroupsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<WorkloadGroupsCreateOrUpdateResponse>,
      WorkloadGroupsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<WorkloadGroupsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new CoreClientLro(
      sendOperation,
      {
        resourceGroupName,
        serverName,
        databaseName,
        workloadGroupName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, { intervalInMs: options?.updateIntervalInMs });
  }

  /**
   * Creates or updates a workload group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group.
   * @param parameters The requested workload group state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    parameters: WorkloadGroup,
    options?: WorkloadGroupsCreateOrUpdateOptionalParams
  ): Promise<WorkloadGroupsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      databaseName,
      workloadGroupName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a workload group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group to delete.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    options?: WorkloadGroupsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new CoreClientLro(
      sendOperation,
      {
        resourceGroupName,
        serverName,
        databaseName,
        workloadGroupName,
        options
      },
      deleteOperationSpec
    );
    return new LroEngine(lro, { intervalInMs: options?.updateIntervalInMs });
  }

  /**
   * Deletes a workload group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group to delete.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    options?: WorkloadGroupsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serverName,
      databaseName,
      workloadGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the list of workload groups
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: WorkloadGroupsListByDatabaseOptionalParams
  ): Promise<WorkloadGroupsListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, options },
      listByDatabaseOperationSpec
    );
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  private _listByDatabaseNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    nextLink: string,
    options?: WorkloadGroupsListByDatabaseNextOptionalParams
  ): Promise<WorkloadGroupsListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, nextLink, options },
      listByDatabaseNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadGroup
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.workloadGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadGroup
    },
    201: {
      bodyMapper: Mappers.WorkloadGroup
    },
    202: {
      bodyMapper: Mappers.WorkloadGroup
    },
    204: {
      bodyMapper: Mappers.WorkloadGroup
    },
    default: {}
  },
  requestBody: Parameters.parameters65,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.workloadGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.workloadGroupName
  ],
  serializer
};
const listByDatabaseOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadGroupListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDatabaseNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadGroupListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};

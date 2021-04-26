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
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  ManagedDatabase,
  ManagedDatabasesListByInstanceResponse,
  ManagedDatabasesGetResponse,
  ManagedDatabasesCreateOrUpdateResponse,
  ManagedDatabaseUpdate,
  ManagedDatabasesUpdateResponse,
  ManagedDatabasesListInaccessibleByInstanceResponse,
  CompleteDatabaseRestoreDefinition,
  ManagedDatabasesListByInstanceNextResponse,
  ManagedDatabasesListInaccessibleByInstanceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a ManagedDatabases. */
export class ManagedDatabases {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class ManagedDatabases class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of managed databases.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  public listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ManagedDatabase> {
    const iter = this.listByInstancePagingAll(
      resourceGroupName,
      managedInstanceName,
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
        return this.listByInstancePagingPage(
          resourceGroupName,
          managedInstanceName,
          options
        );
      }
    };
  }

  private async *listByInstancePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ManagedDatabase[]> {
    let result = await this._listByInstance(
      resourceGroupName,
      managedInstanceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByInstanceNext(
        resourceGroupName,
        managedInstanceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByInstancePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ManagedDatabase> {
    for await (const page of this.listByInstancePagingPage(
      resourceGroupName,
      managedInstanceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of inaccessible managed databases in a managed instance
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  public listInaccessibleByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ManagedDatabase> {
    const iter = this.listInaccessibleByInstancePagingAll(
      resourceGroupName,
      managedInstanceName,
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
        return this.listInaccessibleByInstancePagingPage(
          resourceGroupName,
          managedInstanceName,
          options
        );
      }
    };
  }

  private async *listInaccessibleByInstancePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ManagedDatabase[]> {
    let result = await this._listInaccessibleByInstance(
      resourceGroupName,
      managedInstanceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listInaccessibleByInstanceNext(
        resourceGroupName,
        managedInstanceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listInaccessibleByInstancePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ManagedDatabase> {
    for await (const page of this.listInaccessibleByInstancePagingPage(
      resourceGroupName,
      managedInstanceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of managed databases.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  private _listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabasesListByInstanceResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      managedInstanceName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByInstanceOperationSpec
    ) as Promise<ManagedDatabasesListByInstanceResponse>;
  }

  /**
   * Gets a managed database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabasesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      managedInstanceName,
      databaseName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<ManagedDatabasesGetResponse>;
  }

  /**
   * Creates a new database or updates an existing database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters The requested database resource state.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    parameters: ManagedDatabase,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ManagedDatabasesCreateOrUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      managedInstanceName,
      databaseName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ManagedDatabasesCreateOrUpdateResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      createOrUpdateOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Deletes a managed database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      managedInstanceName,
      databaseName,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      deleteOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Updates an existing database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters The requested database resource state.
   * @param options The options parameters.
   */
  async update(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    parameters: ManagedDatabaseUpdate,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ManagedDatabasesUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      managedInstanceName,
      databaseName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ManagedDatabasesUpdateResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      updateOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: updateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Gets a list of inaccessible managed databases in a managed instance
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  private _listInaccessibleByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabasesListInaccessibleByInstanceResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      managedInstanceName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listInaccessibleByInstanceOperationSpec
    ) as Promise<ManagedDatabasesListInaccessibleByInstanceResponse>;
  }

  /**
   * Completes the restore operation on a managed database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters The definition for completing the restore of this managed database.
   * @param options The options parameters.
   */
  async completeRestore(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    parameters: CompleteDatabaseRestoreDefinition,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      managedInstanceName,
      databaseName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      completeRestoreOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: completeRestoreOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * ListByInstanceNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param nextLink The nextLink from the previous successful call to the ListByInstance method.
   * @param options The options parameters.
   */
  private _listByInstanceNext(
    resourceGroupName: string,
    managedInstanceName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabasesListByInstanceNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      managedInstanceName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByInstanceNextOperationSpec
    ) as Promise<ManagedDatabasesListByInstanceNextResponse>;
  }

  /**
   * ListInaccessibleByInstanceNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param nextLink The nextLink from the previous successful call to the ListInaccessibleByInstance
   *                 method.
   * @param options The options parameters.
   */
  private _listInaccessibleByInstanceNext(
    resourceGroupName: string,
    managedInstanceName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabasesListInaccessibleByInstanceNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      managedInstanceName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listInaccessibleByInstanceNextOperationSpec
    ) as Promise<ManagedDatabasesListInaccessibleByInstanceNextResponse>;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listByInstanceOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabase
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabase
    },
    201: {
      bodyMapper: Mappers.ManagedDatabase
    },
    202: {
      bodyMapper: Mappers.ManagedDatabase
    },
    204: {
      bodyMapper: Mappers.ManagedDatabase
    },
    default: {}
  },
  requestBody: Parameters.parameters67,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName
  ],
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabase
    },
    201: {
      bodyMapper: Mappers.ManagedDatabase
    },
    202: {
      bodyMapper: Mappers.ManagedDatabase
    },
    204: {
      bodyMapper: Mappers.ManagedDatabase
    },
    default: {}
  },
  requestBody: Parameters.parameters68,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listInaccessibleByInstanceOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/inaccessibleManagedDatabases",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const completeRestoreOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/completeRestore",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  requestBody: Parameters.parameters69,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByInstanceNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listInaccessibleByInstanceNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};

/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  ManagedDatabasesListByInstanceResponse,
  ManagedDatabasesGetResponse,
  ManagedDatabase,
  ManagedDatabasesCreateOrUpdateResponse,
  ManagedDatabaseUpdate,
  ManagedDatabasesUpdateResponse,
  ManagedDatabasesListInaccessibleByInstanceResponse,
  CompleteDatabaseRestoreDefinition,
  ManagedDatabasesListByInstanceNextResponse,
  ManagedDatabasesListInaccessibleByInstanceNextResponse
} from "../models";

/**
 * Class representing a ManagedDatabases.
 */
export class ManagedDatabases {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ManagedDatabases class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of managed databases.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabasesListByInstanceResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, options: operationOptions },
      listByInstanceOperationSpec
    ) as Promise<ManagedDatabasesListByInstanceResponse>;
  }

  /**
   * Gets a managed database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param databaseName The name of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    databaseName: string,
    managedInstanceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabasesGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        databaseName,
        managedInstanceName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<ManagedDatabasesGetResponse>;
  }

  /**
   * Creates a new database or updates an existing database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param databaseName The name of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters The requested database resource state.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    databaseName: string,
    managedInstanceName: string,
    parameters: ManagedDatabase,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ManagedDatabasesCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      databaseName,
      managedInstanceName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        ManagedDatabasesCreateOrUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOrUpdateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Deletes a managed database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param databaseName The name of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    databaseName: string,
    managedInstanceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      databaseName,
      managedInstanceName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deleteOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Updates an existing database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param databaseName The name of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters The requested database resource state.
   * @param options The options parameters.
   */
  async update(
    resourceGroupName: string,
    databaseName: string,
    managedInstanceName: string,
    parameters: ManagedDatabaseUpdate,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ManagedDatabasesUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      databaseName,
      managedInstanceName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        ManagedDatabasesUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      updateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
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
  listInaccessibleByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabasesListInaccessibleByInstanceResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, options: operationOptions },
      listInaccessibleByInstanceOperationSpec
    ) as Promise<ManagedDatabasesListInaccessibleByInstanceResponse>;
  }

  /**
   * Completes the restore operation on a managed database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param databaseName The name of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters The definition for completing the restore of this managed database.
   * @param options The options parameters.
   */
  async completeRestore(
    resourceGroupName: string,
    databaseName: string,
    managedInstanceName: string,
    parameters: CompleteDatabaseRestoreDefinition,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      databaseName,
      managedInstanceName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      completeRestoreOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
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
  listByInstanceNext(
    resourceGroupName: string,
    managedInstanceName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabasesListByInstanceNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        nextLink,
        options: operationOptions
      },
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
  listInaccessibleByInstanceNext(
    resourceGroupName: string,
    managedInstanceName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedDatabasesListInaccessibleByInstanceNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        nextLink,
        options: operationOptions
      },
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
    Parameters.databaseName2,
    Parameters.managedInstanceName
  ],
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
    }
  },
  requestBody: Parameters.parameters68,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName2,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.contentType],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName2,
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
    }
  },
  requestBody: Parameters.parameters69,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName2,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.contentType],
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
  serializer
};
const completeRestoreOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/completeRestore",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.parameters70,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName2,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.contentType],
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
    Parameters.managedInstanceName,
    Parameters.nextLink21
  ],
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
    Parameters.managedInstanceName,
    Parameters.nextLink27
  ],
  serializer
};
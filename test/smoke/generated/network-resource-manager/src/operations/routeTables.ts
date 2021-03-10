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
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  RouteTable,
  RouteTablesGetOptionalParams,
  RouteTablesGetResponse,
  RouteTablesCreateOrUpdateResponse,
  TagsObject,
  RouteTablesUpdateTagsResponse,
  RouteTablesListResponse,
  RouteTablesListAllResponse,
  RouteTablesListNextResponse,
  RouteTablesListAllNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a RouteTables. */
export class RouteTables {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class RouteTables class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all route tables in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<RouteTable> {
    const iter = this.listPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<RouteTable[]> {
    let result = await this._list(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<RouteTable> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Gets all route tables in a subscription.
   * @param options The options parameters.
   */
  public listAll(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<RouteTable> {
    const iter = this.listAllPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAllPagingPage(options);
      }
    };
  }

  private async *listAllPagingPage(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<RouteTable[]> {
    let result = await this._listAll(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAllNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAllPagingAll(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<RouteTable> {
    for await (const page of this.listAllPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Deletes the specified route table.
   * @param resourceGroupName The name of the resource group.
   * @param routeTableName The name of the route table.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    routeTableName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      routeTableName,
      options: this.getOperationOptions(options, "location")
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
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets the specified route table.
   * @param resourceGroupName The name of the resource group.
   * @param routeTableName The name of the route table.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    routeTableName: string,
    options?: RouteTablesGetOptionalParams
  ): Promise<RouteTablesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      routeTableName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<RouteTablesGetResponse>;
  }

  /**
   * Create or updates a route table in a specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param routeTableName The name of the route table.
   * @param parameters Parameters supplied to the create or update route table operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    routeTableName: string,
    parameters: RouteTable,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<RouteTablesCreateOrUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      routeTableName,
      parameters,
      options: this.getOperationOptions(options, "azure-async-operation")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        RouteTablesCreateOrUpdateResponse
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
      sendOperation,
      finalStateVia: "azure-async-operation"
    });
  }

  /**
   * Updates a route table tags.
   * @param resourceGroupName The name of the resource group.
   * @param routeTableName The name of the route table.
   * @param parameters Parameters supplied to update route table tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    routeTableName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<RouteTablesUpdateTagsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      routeTableName,
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateTagsOperationSpec
    ) as Promise<RouteTablesUpdateTagsResponse>;
  }

  /**
   * Gets all route tables in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<RouteTablesListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<RouteTablesListResponse>;
  }

  /**
   * Gets all route tables in a subscription.
   * @param options The options parameters.
   */
  private _listAll(
    options?: coreHttp.OperationOptions
  ): Promise<RouteTablesListAllResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listAllOperationSpec
    ) as Promise<RouteTablesListAllResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<RouteTablesListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<RouteTablesListNextResponse>;
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  private _listAllNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<RouteTablesListAllNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listAllNextOperationSpec
    ) as Promise<RouteTablesListAllNextResponse>;
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

const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.routeTableName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteTable
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.routeTableName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RouteTable
    },
    201: {
      bodyMapper: Mappers.RouteTable
    },
    202: {
      bodyMapper: Mappers.RouteTable
    },
    204: {
      bodyMapper: Mappers.RouteTable
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters44,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.routeTableName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.RouteTable
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.routeTableName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteTableListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/routeTables",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteTableListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteTableListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteTableListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};

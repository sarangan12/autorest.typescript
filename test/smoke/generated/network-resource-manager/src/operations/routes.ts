/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  Route,
  RoutesGetResponse,
  RoutesCreateOrUpdateResponse,
  RoutesListResponse,
  RoutesListNextResponse
} from "../models";

/** Class representing a Routes. */
export class Routes {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class Routes class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets all routes in a route table.
   * @param resourceGroupName The name of the resource group.
   * @param routeTableName The name of the route table.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    routeTableName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Route> {
    const iter = this.listPagingAll(resourceGroupName, routeTableName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, routeTableName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    routeTableName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Route[]> {
    let result = await this._list(resourceGroupName, routeTableName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        routeTableName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    routeTableName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Route> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      routeTableName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified route from a route table.
   * @param resourceGroupName The name of the resource group.
   * @param routeTableName The name of the route table.
   * @param routeName The name of the route.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    routeTableName: string,
    routeName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      routeTableName,
      routeName,
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
   * Gets the specified route from a route table.
   * @param resourceGroupName The name of the resource group.
   * @param routeTableName The name of the route table.
   * @param routeName The name of the route.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    routeTableName: string,
    routeName: string,
    options?: coreHttp.OperationOptions
  ): Promise<RoutesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      routeTableName,
      routeName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<RoutesGetResponse>;
  }

  /**
   * Creates or updates a route in the specified route table.
   * @param resourceGroupName The name of the resource group.
   * @param routeTableName The name of the route table.
   * @param routeName The name of the route.
   * @param routeParameters Parameters supplied to the create or update route operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    routeTableName: string,
    routeName: string,
    routeParameters: Route,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<RoutesCreateOrUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      routeTableName,
      routeName,
      routeParameters,
      options: this.getOperationOptions(options, "azure-async-operation")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        RoutesCreateOrUpdateResponse
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
   * Gets all routes in a route table.
   * @param resourceGroupName The name of the resource group.
   * @param routeTableName The name of the route table.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    routeTableName: string,
    options?: coreHttp.OperationOptions
  ): Promise<RoutesListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      routeTableName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<RoutesListResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param routeTableName The name of the route table.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    routeTableName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<RoutesListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      routeTableName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<RoutesListNextResponse>;
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}/routes/{routeName}",
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
    Parameters.routeTableName,
    Parameters.routeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}/routes/{routeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Route
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
    Parameters.routeTableName,
    Parameters.routeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}/routes/{routeName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Route
    },
    201: {
      bodyMapper: Mappers.Route
    },
    202: {
      bodyMapper: Mappers.Route
    },
    204: {
      bodyMapper: Mappers.Route
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.routeParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.routeTableName,
    Parameters.routeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}/routes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteListResult
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
    Parameters.routeTableName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteListResult
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
    Parameters.nextLink,
    Parameters.routeTableName
  ],
  headerParameters: [Parameters.accept],
  serializer
};

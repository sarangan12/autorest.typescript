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
  VirtualRouterPeering,
  VirtualRouterPeeringsGetResponse,
  VirtualRouterPeeringsCreateOrUpdateResponse,
  VirtualRouterPeeringsListResponse,
  VirtualRouterPeeringsListNextResponse
} from "../models";

/** Class representing a VirtualRouterPeerings. */
export class VirtualRouterPeerings {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class VirtualRouterPeerings class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Lists all Virtual Router Peerings in a Virtual Router resource.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    virtualRouterName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<VirtualRouterPeering> {
    const iter = this.listPagingAll(
      resourceGroupName,
      virtualRouterName,
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
        return this.listPagingPage(
          resourceGroupName,
          virtualRouterName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    virtualRouterName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<VirtualRouterPeering[]> {
    let result = await this._list(
      resourceGroupName,
      virtualRouterName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        virtualRouterName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    virtualRouterName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<VirtualRouterPeering> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      virtualRouterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified peering from a Virtual Router.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param peeringName The name of the peering.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    virtualRouterName: string,
    peeringName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualRouterName,
      peeringName,
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
   * Gets the specified Virtual Router Peering.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param peeringName The name of the Virtual Router Peering.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    virtualRouterName: string,
    peeringName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualRouterPeeringsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualRouterName,
      peeringName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<VirtualRouterPeeringsGetResponse>;
  }

  /**
   * Creates or updates the specified Virtual Router Peering.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param peeringName The name of the Virtual Router Peering.
   * @param parameters Parameters supplied to the create or update Virtual Router Peering operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    virtualRouterName: string,
    peeringName: string,
    parameters: VirtualRouterPeering,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<VirtualRouterPeeringsCreateOrUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualRouterName,
      peeringName,
      parameters,
      options: this.getOperationOptions(options, "azure-async-operation")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        VirtualRouterPeeringsCreateOrUpdateResponse
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
   * Lists all Virtual Router Peerings in a Virtual Router resource.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    virtualRouterName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualRouterPeeringsListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualRouterName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<VirtualRouterPeeringsListResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    virtualRouterName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualRouterPeeringsListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualRouterName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<VirtualRouterPeeringsListNextResponse>;
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings/{peeringName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.peeringName,
    Parameters.virtualRouterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings/{peeringName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualRouterPeering
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.peeringName,
    Parameters.virtualRouterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings/{peeringName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualRouterPeering
    },
    201: {
      bodyMapper: Mappers.VirtualRouterPeering
    },
    202: {
      bodyMapper: Mappers.VirtualRouterPeering
    },
    204: {
      bodyMapper: Mappers.VirtualRouterPeering
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.parameters59,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.peeringName,
    Parameters.virtualRouterName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualRouterPeeringListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualRouterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualRouterPeeringListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.virtualRouterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};

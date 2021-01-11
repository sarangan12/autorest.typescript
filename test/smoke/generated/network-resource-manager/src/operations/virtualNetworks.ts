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
  VirtualNetwork,
  VirtualNetworkUsage,
  VirtualNetworksGetOptionalParams,
  VirtualNetworksGetResponse,
  VirtualNetworksCreateOrUpdateResponse,
  TagsObject,
  VirtualNetworksUpdateTagsResponse,
  VirtualNetworksListAllResponse,
  VirtualNetworksListResponse,
  VirtualNetworksCheckIPAddressAvailabilityResponse,
  VirtualNetworksListUsageResponse,
  VirtualNetworksListAllNextResponse,
  VirtualNetworksListNextResponse,
  VirtualNetworksListUsageNextResponse
} from "../models";

/** Class representing a VirtualNetworks. */
export class VirtualNetworks {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class VirtualNetworks class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets all virtual networks in a subscription.
   * @param options The options parameters.
   */
  public listAll(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<VirtualNetwork> {
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
  ): AsyncIterableIterator<VirtualNetwork[]> {
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
  ): AsyncIterableIterator<VirtualNetwork> {
    for await (const page of this.listAllPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets all virtual networks in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<VirtualNetwork> {
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
  ): AsyncIterableIterator<VirtualNetwork[]> {
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
  ): AsyncIterableIterator<VirtualNetwork> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Lists usage stats.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param options The options parameters.
   */
  public listUsage(
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<VirtualNetworkUsage> {
    const iter = this.listUsagePagingAll(
      resourceGroupName,
      virtualNetworkName,
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
        return this.listUsagePagingPage(
          resourceGroupName,
          virtualNetworkName,
          options
        );
      }
    };
  }

  private async *listUsagePagingPage(
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<VirtualNetworkUsage[]> {
    let result = await this._listUsage(
      resourceGroupName,
      virtualNetworkName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listUsageNext(
        resourceGroupName,
        virtualNetworkName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listUsagePagingAll(
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<VirtualNetworkUsage> {
    for await (const page of this.listUsagePagingPage(
      resourceGroupName,
      virtualNetworkName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified virtual network.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualNetworkName,
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
   * Gets the specified virtual network by resource group.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: VirtualNetworksGetOptionalParams
  ): Promise<VirtualNetworksGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualNetworkName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<VirtualNetworksGetResponse>;
  }

  /**
   * Creates or updates a virtual network in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param parameters Parameters supplied to the create or update virtual network operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    virtualNetworkName: string,
    parameters: VirtualNetwork,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<VirtualNetworksCreateOrUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualNetworkName,
      parameters,
      options: this.getOperationOptions(options, "azure-async-operation")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        VirtualNetworksCreateOrUpdateResponse
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
   * Updates a virtual network tags.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param parameters Parameters supplied to update virtual network tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    virtualNetworkName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualNetworksUpdateTagsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualNetworkName,
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateTagsOperationSpec
    ) as Promise<VirtualNetworksUpdateTagsResponse>;
  }

  /**
   * Gets all virtual networks in a subscription.
   * @param options The options parameters.
   */
  private _listAll(
    options?: coreHttp.OperationOptions
  ): Promise<VirtualNetworksListAllResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listAllOperationSpec
    ) as Promise<VirtualNetworksListAllResponse>;
  }

  /**
   * Gets all virtual networks in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualNetworksListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<VirtualNetworksListResponse>;
  }

  /**
   * Checks whether a private IP address is available for use.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param ipAddress The private IP address to be verified.
   * @param options The options parameters.
   */
  checkIPAddressAvailability(
    resourceGroupName: string,
    virtualNetworkName: string,
    ipAddress: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualNetworksCheckIPAddressAvailabilityResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualNetworkName,
      ipAddress,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      checkIPAddressAvailabilityOperationSpec
    ) as Promise<VirtualNetworksCheckIPAddressAvailabilityResponse>;
  }

  /**
   * Lists usage stats.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param options The options parameters.
   */
  private _listUsage(
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualNetworksListUsageResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualNetworkName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listUsageOperationSpec
    ) as Promise<VirtualNetworksListUsageResponse>;
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  private _listAllNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualNetworksListAllNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listAllNextOperationSpec
    ) as Promise<VirtualNetworksListAllNextResponse>;
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
  ): Promise<VirtualNetworksListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<VirtualNetworksListNextResponse>;
  }

  /**
   * ListUsageNext
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param nextLink The nextLink from the previous successful call to the ListUsage method.
   * @param options The options parameters.
   */
  private _listUsageNext(
    resourceGroupName: string,
    virtualNetworkName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualNetworksListUsageNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualNetworkName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listUsageNextOperationSpec
    ) as Promise<VirtualNetworksListUsageNextResponse>;
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}",
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
    Parameters.virtualNetworkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetwork
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
    Parameters.virtualNetworkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetwork
    },
    201: {
      bodyMapper: Mappers.VirtualNetwork
    },
    202: {
      bodyMapper: Mappers.VirtualNetwork
    },
    204: {
      bodyMapper: Mappers.VirtualNetwork
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters47,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualNetworkName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetwork
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
    Parameters.virtualNetworkName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listAllOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/virtualNetworks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkListResult
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
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkListResult
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
const checkIPAddressAvailabilityOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/CheckIPAddressAvailability",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IPAddressAvailabilityResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.ipAddress],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualNetworkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listUsageOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkListUsageResult
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
    Parameters.virtualNetworkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkListResult
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
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkListResult
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
const listUsageNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkListUsageResult
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
    Parameters.virtualNetworkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};

/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ServerSecurityAlertPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { LroEngine } from "../lro";
import { CoreClientLro, shouldDeserializeLro } from "../coreClientLro";
import {
  ServerSecurityAlertPolicy,
  ServerSecurityAlertPoliciesListByServerNextOptionalParams,
  ServerSecurityAlertPoliciesListByServerOptionalParams,
  SecurityAlertPolicyNameAutoGenerated,
  ServerSecurityAlertPoliciesGetOptionalParams,
  ServerSecurityAlertPoliciesGetResponse,
  ServerSecurityAlertPoliciesCreateOrUpdateOptionalParams,
  ServerSecurityAlertPoliciesCreateOrUpdateResponse,
  ServerSecurityAlertPoliciesListByServerResponse,
  ServerSecurityAlertPoliciesListByServerNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a ServerSecurityAlertPolicies. */
export class ServerSecurityAlertPoliciesImpl
  implements ServerSecurityAlertPolicies {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class ServerSecurityAlertPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the server's threat detection policies.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerSecurityAlertPoliciesListByServerOptionalParams
  ): PagedAsyncIterableIterator<ServerSecurityAlertPolicy> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
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
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          options
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: ServerSecurityAlertPoliciesListByServerOptionalParams
  ): AsyncIterableIterator<ServerSecurityAlertPolicy[]> {
    let result = await this._listByServer(
      resourceGroupName,
      serverName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: ServerSecurityAlertPoliciesListByServerOptionalParams
  ): AsyncIterableIterator<ServerSecurityAlertPolicy> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a server's security alert policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    options?: ServerSecurityAlertPoliciesGetOptionalParams
  ): Promise<ServerSecurityAlertPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, securityAlertPolicyName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param securityAlertPolicyName The name of the threat detection policy.
   * @param parameters The server security alert policy.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    parameters: ServerSecurityAlertPolicy,
    options?: ServerSecurityAlertPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServerSecurityAlertPoliciesCreateOrUpdateResponse>,
      ServerSecurityAlertPoliciesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServerSecurityAlertPoliciesCreateOrUpdateResponse> => {
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
        securityAlertPolicyName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, { intervalInMs: options?.updateIntervalInMs });
  }

  /**
   * Creates or updates a threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param securityAlertPolicyName The name of the threat detection policy.
   * @param parameters The server security alert policy.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    parameters: ServerSecurityAlertPolicy,
    options?: ServerSecurityAlertPoliciesCreateOrUpdateOptionalParams
  ): Promise<ServerSecurityAlertPoliciesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      securityAlertPolicyName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get the server's threat detection policies.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerSecurityAlertPoliciesListByServerOptionalParams
  ): Promise<ServerSecurityAlertPoliciesListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listByServerOperationSpec
    );
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: ServerSecurityAlertPoliciesListByServerNextOptionalParams
  ): Promise<ServerSecurityAlertPoliciesListByServerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, nextLink, options },
      listByServerNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/securityAlertPolicies/{securityAlertPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.securityAlertPolicyName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/securityAlertPolicies/{securityAlertPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    201: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    202: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    204: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters43,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.securityAlertPolicyName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/securityAlertPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalServerSecurityAlertPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalServerSecurityAlertPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};

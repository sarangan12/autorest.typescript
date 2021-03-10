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
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";
import {
  CsmOperationDescription,
  DomainRegistrationProviderListOperationsResponse,
  DomainRegistrationProviderListOperationsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a DomainRegistrationProvider. */
export class DomainRegistrationProvider {
  private readonly client: WebSiteManagementClientContext;

  /**
   * Initialize a new instance of the class DomainRegistrationProvider class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClientContext) {
    this.client = client;
  }

  /**
   * Description for Implements Csm operations Api to exposes the list of available Csm Apis under the
   * resource provider
   * @param options The options parameters.
   */
  public listOperations(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<CsmOperationDescription> {
    const iter = this.listOperationsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOperationsPagingPage(options);
      }
    };
  }

  private async *listOperationsPagingPage(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<CsmOperationDescription[]> {
    let result = await this._listOperations(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listOperationsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listOperationsPagingAll(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<CsmOperationDescription> {
    for await (const page of this.listOperationsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Description for Implements Csm operations Api to exposes the list of available Csm Apis under the
   * resource provider
   * @param options The options parameters.
   */
  private _listOperations(
    options?: coreHttp.OperationOptions
  ): Promise<DomainRegistrationProviderListOperationsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationsOperationSpec
    ) as Promise<DomainRegistrationProviderListOperationsResponse>;
  }

  /**
   * ListOperationsNext
   * @param nextLink The nextLink from the previous successful call to the ListOperations method.
   * @param options The options parameters.
   */
  private _listOperationsNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainRegistrationProviderListOperationsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationsNextOperationSpec
    ) as Promise<DomainRegistrationProviderListOperationsNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationsOperationSpec: coreHttp.OperationSpec = {
  path: "/providers/Microsoft.DomainRegistration/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CsmOperationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CsmOperationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};

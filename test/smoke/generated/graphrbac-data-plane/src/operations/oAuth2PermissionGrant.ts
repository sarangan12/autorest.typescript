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
import { GraphRbacManagementClient } from "../graphRbacManagementClient";
import {
  OAuth2PermissionGrant as OAuth2PermissionGrantModel,
  OAuth2PermissionGrantListOptionalParams,
  OAuth2PermissionGrantListResponse,
  OAuth2PermissionGrantCreateOptionalParams,
  OAuth2PermissionGrantCreateResponse,
  OAuth2PermissionGrantListNextResponse
} from "../models";

/** Class representing a OAuth2PermissionGrant. */
export class OAuth2PermissionGrant {
  private readonly client: GraphRbacManagementClient;

  /**
   * Initialize a new instance of the class OAuth2PermissionGrant class.
   * @param client Reference to the service client
   */
  constructor(client: GraphRbacManagementClient) {
    this.client = client;
  }

  /**
   * Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.
   * @param options The options parameters.
   */
  public list(
    options?: OAuth2PermissionGrantListOptionalParams
  ): PagedAsyncIterableIterator<OAuth2PermissionGrantModel> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: OAuth2PermissionGrantListOptionalParams
  ): AsyncIterableIterator<OAuth2PermissionGrantModel[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: OAuth2PermissionGrantListOptionalParams
  ): AsyncIterableIterator<OAuth2PermissionGrantModel> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the next page of OAuth2 permission grants
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  public listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<OAuth2PermissionGrantModel> {
    const iter = this.listNextPagingAll(nextLink, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listNextPagingPage(nextLink, options);
      }
    };
  }

  private async *listNextPagingPage(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<OAuth2PermissionGrantModel[]> {
    let result = await this._listNext(nextLink, options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listNextPagingAll(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<OAuth2PermissionGrantModel> {
    for await (const page of this.listNextPagingPage(nextLink, options)) {
      yield* page;
    }
  }

  /**
   * Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.
   * @param options The options parameters.
   */
  private _list(
    options?: OAuth2PermissionGrantListOptionalParams
  ): Promise<OAuth2PermissionGrantListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<OAuth2PermissionGrantListResponse>;
  }

  /**
   * Grants OAuth2 permissions for the relevant resource Ids of an app.
   * @param options The options parameters.
   */
  create(
    options?: OAuth2PermissionGrantCreateOptionalParams
  ): Promise<OAuth2PermissionGrantCreateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOperationSpec
    ) as Promise<OAuth2PermissionGrantCreateResponse>;
  }

  /**
   * Delete a OAuth2 permission grant for the relevant resource Ids of an app.
   * @param objectId The object ID of a permission grant.
   * @param options The options parameters.
   */
  delete(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      objectId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets the next page of OAuth2 permission grants
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<OAuth2PermissionGrantListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<OAuth2PermissionGrantListNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/oauth2PermissionGrants",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OAuth2PermissionGrantListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept1],
  serializer
};
const createOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/oauth2PermissionGrants",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.OAuth2PermissionGrant
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/oauth2PermissionGrants/{objectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OAuth2PermissionGrantListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};

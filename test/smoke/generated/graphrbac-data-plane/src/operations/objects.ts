/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Objects } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GraphRbacManagementClientContext } from "../graphRbacManagementClientContext";
import {
  DirectoryObjectUnion,
  ObjectsGetObjectsByObjectIdsNextOptionalParams,
  GetObjectsParameters,
  ObjectsGetObjectsByObjectIdsOptionalParams,
  ObjectsGetObjectsByObjectIdsResponse,
  ObjectsGetObjectsByObjectIdsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a Objects. */
export class ObjectsImpl implements Objects {
  private readonly client: GraphRbacManagementClientContext;

  /**
   * Initialize a new instance of the class Objects class.
   * @param client Reference to the service client
   */
  constructor(client: GraphRbacManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the directory objects specified in a list of object IDs. You can also specify which resource
   * collections (users, groups, etc.) should be searched by specifying the optional types parameter.
   * @param parameters Objects filtering parameters.
   * @param options The options parameters.
   */
  public listObjectsByObjectIds(
    parameters: GetObjectsParameters,
    options?: ObjectsGetObjectsByObjectIdsOptionalParams
  ): PagedAsyncIterableIterator<DirectoryObjectUnion> {
    const iter = this.getObjectsByObjectIdsPagingAll(parameters, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getObjectsByObjectIdsPagingPage(parameters, options);
      }
    };
  }

  private async *getObjectsByObjectIdsPagingPage(
    parameters: GetObjectsParameters,
    options?: ObjectsGetObjectsByObjectIdsOptionalParams
  ): AsyncIterableIterator<DirectoryObjectUnion[]> {
    let result = await this._getObjectsByObjectIds(parameters, options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._getObjectsByObjectIdsNext(
        continuationToken,
        options
      );
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *getObjectsByObjectIdsPagingAll(
    parameters: GetObjectsParameters,
    options?: ObjectsGetObjectsByObjectIdsOptionalParams
  ): AsyncIterableIterator<DirectoryObjectUnion> {
    for await (const page of this.getObjectsByObjectIdsPagingPage(
      parameters,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets AD group membership for the specified AD object IDs.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  public listObjectsByObjectIdsNext(
    nextLink: string,
    options?: ObjectsGetObjectsByObjectIdsNextOptionalParams
  ): PagedAsyncIterableIterator<DirectoryObjectUnion> {
    const iter = this.getObjectsByObjectIdsNextPagingAll(nextLink, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getObjectsByObjectIdsNextPagingPage(nextLink, options);
      }
    };
  }

  private async *getObjectsByObjectIdsNextPagingPage(
    nextLink: string,
    options?: ObjectsGetObjectsByObjectIdsNextOptionalParams
  ): AsyncIterableIterator<DirectoryObjectUnion[]> {
    let result = await this._getObjectsByObjectIdsNext(nextLink, options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._getObjectsByObjectIdsNext(
        continuationToken,
        options
      );
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *getObjectsByObjectIdsNextPagingAll(
    nextLink: string,
    options?: ObjectsGetObjectsByObjectIdsNextOptionalParams
  ): AsyncIterableIterator<DirectoryObjectUnion> {
    for await (const page of this.getObjectsByObjectIdsNextPagingPage(
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the directory objects specified in a list of object IDs. You can also specify which resource
   * collections (users, groups, etc.) should be searched by specifying the optional types parameter.
   * @param parameters Objects filtering parameters.
   * @param options The options parameters.
   */
  private _getObjectsByObjectIds(
    parameters: GetObjectsParameters,
    options?: ObjectsGetObjectsByObjectIdsOptionalParams
  ): Promise<ObjectsGetObjectsByObjectIdsResponse> {
    return this.client.sendOperationRequest(
      { parameters, options },
      getObjectsByObjectIdsOperationSpec
    );
  }

  /**
   * Gets AD group membership for the specified AD object IDs.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  private _getObjectsByObjectIdsNext(
    nextLink: string,
    options?: ObjectsGetObjectsByObjectIdsNextOptionalParams
  ): Promise<ObjectsGetObjectsByObjectIdsNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getObjectsByObjectIdsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getObjectsByObjectIdsOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/getObjectsByObjectIds",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    }
  },
  requestBody: Parameters.parameters14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getObjectsByObjectIdsNextOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/{nextLink}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};

/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreHttps from "@azure/core-rest-pipeline";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HttpInfrastructureClientContext } from "../httpInfrastructureClientContext";
import {
  HttpFailureGetEmptyErrorResponse,
  HttpFailureGetNoModelErrorResponse,
  HttpFailureGetNoModelEmptyResponse
} from "../models";

/** Class representing a HttpFailure. */
export class HttpFailure {
  private readonly client: HttpInfrastructureClientContext;

  /**
   * Initialize a new instance of the class HttpFailure class.
   * @param client Reference to the service client
   */
  constructor(client: HttpInfrastructureClientContext) {
    this.client = client;
  }

  /**
   * Get empty error form server
   * @param options The options parameters.
   */
  getEmptyError(
    options?: coreClient.OperationOptions
  ): Promise<HttpFailureGetEmptyErrorResponse> {
    return this.client.sendOperationRequest(
      { options },
      getEmptyErrorOperationSpec
    );
  }

  /**
   * Get empty error form server
   * @param options The options parameters.
   */
  getNoModelError(
    options?: coreClient.OperationOptions
  ): Promise<HttpFailureGetNoModelErrorResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNoModelErrorOperationSpec
    );
  }

  /**
   * Get empty response from server
   * @param options The options parameters.
   */
  getNoModelEmpty(
    options?: coreClient.OperationOptions
  ): Promise<HttpFailureGetNoModelEmptyResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNoModelEmptyOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getEmptyErrorOperationSpec: coreClient.OperationSpec = {
  path: "/http/failure/emptybody/error",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Boolean" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getNoModelErrorOperationSpec: coreClient.OperationSpec = {
  path: "/http/failure/nomodel/error",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Boolean" } }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getNoModelEmptyOperationSpec: coreClient.OperationSpec = {
  path: "/http/failure/nomodel/empty",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Boolean" } }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};

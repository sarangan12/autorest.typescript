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
import { BodyBooleanQuirksClientContext } from "../bodyBooleanQuirksClientContext";
import {
  BoolGetTrueResponse,
  BoolGetFalseResponse,
  BoolGetNullResponse,
  BoolGetInvalidResponse
} from "../models";

/** Class representing a Bool. */
export class Bool {
  private readonly client: BodyBooleanQuirksClientContext;

  /**
   * Initialize a new instance of the class Bool class.
   * @param client Reference to the service client
   */
  constructor(client: BodyBooleanQuirksClientContext) {
    this.client = client;
  }

  /**
   * Get true Boolean value
   * @param options The options parameters.
   */
  getTrue(options?: coreClient.OperationOptions): Promise<BoolGetTrueResponse> {
    return this.client.sendOperationRequest({ options }, getTrueOperationSpec);
  }

  /**
   * Set Boolean value true
   * @param boolBody
   * @param options The options parameters.
   */
  putTrue(
    boolBody: boolean,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { boolBody, options },
      putTrueOperationSpec
    );
  }

  /**
   * Get false Boolean value
   * @param options The options parameters.
   */
  getFalse(
    options?: coreClient.OperationOptions
  ): Promise<BoolGetFalseResponse> {
    return this.client.sendOperationRequest({ options }, getFalseOperationSpec);
  }

  /**
   * Set Boolean value false
   * @param boolBody
   * @param options The options parameters.
   */
  putFalse(
    boolBody: boolean,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { boolBody, options },
      putFalseOperationSpec
    );
  }

  /**
   * Get null Boolean value
   * @param options The options parameters.
   */
  getNull(options?: coreClient.OperationOptions): Promise<BoolGetNullResponse> {
    return this.client.sendOperationRequest({ options }, getNullOperationSpec);
  }

  /**
   * Get invalid Boolean value
   * @param options The options parameters.
   */
  getInvalid(
    options?: coreClient.OperationOptions
  ): Promise<BoolGetInvalidResponse> {
    return this.client.sendOperationRequest(
      { options },
      getInvalidOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getTrueOperationSpec: coreClient.OperationSpec = {
  path: "/bool/true",
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
const putTrueOperationSpec: coreClient.OperationSpec = {
  path: "/bool/true",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.boolBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getFalseOperationSpec: coreClient.OperationSpec = {
  path: "/bool/false",
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
const putFalseOperationSpec: coreClient.OperationSpec = {
  path: "/bool/false",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.boolBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getNullOperationSpec: coreClient.OperationSpec = {
  path: "/bool/null",
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
const getInvalidOperationSpec: coreClient.OperationSpec = {
  path: "/bool/invalid",
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

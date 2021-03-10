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
import { BodyByteClientContext } from "../bodyByteClientContext";
import {
  ByteGetNullResponse,
  ByteGetEmptyResponse,
  ByteGetNonAsciiResponse,
  ByteGetInvalidResponse
} from "../models";

/** Class representing a Byte. */
export class Byte {
  private readonly client: BodyByteClientContext;

  /**
   * Initialize a new instance of the class Byte class.
   * @param client Reference to the service client
   */
  constructor(client: BodyByteClientContext) {
    this.client = client;
  }

  /**
   * Get null byte value
   * @param options The options parameters.
   */
  getNull(options?: coreClient.OperationOptions): Promise<ByteGetNullResponse> {
    return this.client.sendOperationRequest({ options }, getNullOperationSpec);
  }

  /**
   * Get empty byte value ''
   * @param options The options parameters.
   */
  getEmpty(
    options?: coreClient.OperationOptions
  ): Promise<ByteGetEmptyResponse> {
    return this.client.sendOperationRequest({ options }, getEmptyOperationSpec);
  }

  /**
   * Get non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   * @param options The options parameters.
   */
  getNonAscii(
    options?: coreClient.OperationOptions
  ): Promise<ByteGetNonAsciiResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNonAsciiOperationSpec
    );
  }

  /**
   * Put non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   * @param byteBody Base64-encoded non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   * @param options The options parameters.
   */
  putNonAscii(
    byteBody: Uint8Array,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { byteBody, options },
      putNonAsciiOperationSpec
    );
  }

  /**
   * Get invalid byte value ':::SWAGGER::::'
   * @param options The options parameters.
   */
  getInvalid(
    options?: coreClient.OperationOptions
  ): Promise<ByteGetInvalidResponse> {
    return this.client.sendOperationRequest(
      { options },
      getInvalidOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreClient.OperationSpec = {
  path: "/byte/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "ByteArray" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getEmptyOperationSpec: coreClient.OperationSpec = {
  path: "/byte/empty",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "ByteArray" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getNonAsciiOperationSpec: coreClient.OperationSpec = {
  path: "/byte/nonAscii",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "ByteArray" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putNonAsciiOperationSpec: coreClient.OperationSpec = {
  path: "/byte/nonAscii",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.byteBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getInvalidOperationSpec: coreClient.OperationSpec = {
  path: "/byte/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "ByteArray" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};

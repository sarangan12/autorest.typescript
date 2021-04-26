/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreHttps from "@azure/core-rest-pipeline";

export interface ErrorModel {
  status?: number;
  message?: string;
}

export interface RefColorConstant {
  /** Referenced Color Constant Description. */
  colorConstant: "green-color";
  /** Sample string. */
  field1?: string;
}

/** Defines values for Colors. */
export type Colors = "red color" | "green-color" | "blue_color";

/** Contains response data for the getNull operation. */
export type StringGetNullResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface StringPutNullOptionalParams
  extends coreClient.OperationOptions {
  /** string body */
  stringBody?: string;
}

/** Contains response data for the getEmpty operation. */
export type StringGetEmptyResponse = {
  /** The parsed response body. */
  body: string;
};

/** Contains response data for the getMbcs operation. */
export type StringGetMbcsResponse = {
  /** The parsed response body. */
  body: string;
};

/** Contains response data for the getWhitespace operation. */
export type StringGetWhitespaceResponse = {
  /** The parsed response body. */
  body: string;
};

/** Contains response data for the getNotProvided operation. */
export type StringGetNotProvidedResponse = {
  /** The parsed response body. */
  body: string;
};

/** Contains response data for the getBase64Encoded operation. */
export type StringGetBase64EncodedResponse = {
  /** The parsed response body. */
  body: Uint8Array;
};

/** Contains response data for the getBase64UrlEncoded operation. */
export type StringGetBase64UrlEncodedResponse = {
  /** The parsed response body. */
  body: Uint8Array;
};

/** Contains response data for the getNullBase64UrlEncoded operation. */
export type StringGetNullBase64UrlEncodedResponse = {
  /** The parsed response body. */
  body: Uint8Array;
};

/** Contains response data for the getNotExpandable operation. */
export type EnumGetNotExpandableResponse = {
  /** The parsed response body. */
  body: Colors;
};

/** Contains response data for the getReferenced operation. */
export type EnumGetReferencedResponse = {
  /** The parsed response body. */
  body: Colors;
};

/** Contains response data for the getReferencedConstant operation. */
export type EnumGetReferencedConstantResponse = RefColorConstant;

/** Optional parameters. */
export interface BodyStringClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}

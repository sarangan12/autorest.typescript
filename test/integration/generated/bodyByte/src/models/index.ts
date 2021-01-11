/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export interface ErrorModel {
  status?: number;
  message?: string;
}

/** Contains response data for the getNull operation. */
export type ByteGetNullResponse = {
  /** The parsed response body. */
  body: Uint8Array;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Uint8Array;
  };
};

/** Contains response data for the getEmpty operation. */
export type ByteGetEmptyResponse = {
  /** The parsed response body. */
  body: Uint8Array;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Uint8Array;
  };
};

/** Contains response data for the getNonAscii operation. */
export type ByteGetNonAsciiResponse = {
  /** The parsed response body. */
  body: Uint8Array;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Uint8Array;
  };
};

/** Contains response data for the getInvalid operation. */
export type ByteGetInvalidResponse = {
  /** The parsed response body. */
  body: Uint8Array;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Uint8Array;
  };
};

/** Optional parameters. */
export interface BodyByteClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}

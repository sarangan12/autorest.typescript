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

/** Contains response data for the getTrue operation. */
export type BoolGetTrueResponse = {
  /** The parsed response body. */
  body: boolean;
};

/** Contains response data for the getFalse operation. */
export type BoolGetFalseResponse = {
  /** The parsed response body. */
  body: boolean;
};

/** Contains response data for the getNull operation. */
export type BoolGetNullResponse = {
  /** The parsed response body. */
  body: boolean;
};

/** Contains response data for the getInvalid operation. */
export type BoolGetInvalidResponse = {
  /** The parsed response body. */
  body: boolean;
};

/** Optional parameters. */
export interface BodyBooleanQuirksClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}

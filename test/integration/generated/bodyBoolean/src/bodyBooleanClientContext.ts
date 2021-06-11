/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { BodyBooleanClientOptionalParams } from "./models";

export class BodyBooleanClientContext extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the BodyBooleanClientContext class.
   * @param options The parameter options
   */
  constructor(options?: BodyBooleanClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: BodyBooleanClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} body-boolean/1.0.0-preview1`
        : `body-boolean/1.0.0-preview1`;
    options.userAgentOptions = {
      userAgentPrefix: userAgentPrefix
    };

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint || "http://localhost:3000"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://localhost:3000";
  }
}

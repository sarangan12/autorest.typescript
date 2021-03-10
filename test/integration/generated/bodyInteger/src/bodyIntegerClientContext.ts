/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { BodyIntegerClientOptionalParams } from "./models";

export class BodyIntegerClientContext extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the BodyIntegerClientContext class.
   * @param options The parameter options
   */
  constructor(options?: BodyIntegerClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }

    const defaults: BodyIntegerClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint || "https://localhost:3000"
    };

    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://localhost:3000";
  }
}

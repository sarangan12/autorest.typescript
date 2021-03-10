/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { BodyComplexClientOptionalParams } from "./models";

export class BodyComplexClientContext extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the BodyComplexClientContext class.
   * @param options The parameter options
   */
  constructor(options?: BodyComplexClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }

    const defaults: BodyComplexClientOptionalParams = {
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
    this.apiVersion = options.apiVersion || "2016-02-29";
  }
}

/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { RegexConstraintOptionalParams } from "./models";

export class RegexConstraintContext extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the RegexConstraintContext class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: RegexConstraintOptionalParams) {
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: RegexConstraintOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint || "{$host}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.$host = $host;
  }
}

/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { UrlClientOptionalParams } from "./models";

export class UrlClientContext extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the UrlClientContext class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: UrlClientOptionalParams) {
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: UrlClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} url/1.0.0-preview1`
        : `url/1.0.0-preview1`;
    options.userAgentOptions = {
      userAgentPrefix: userAgentPrefix
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

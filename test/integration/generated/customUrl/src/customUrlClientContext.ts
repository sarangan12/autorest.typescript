/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { CustomUrlClientOptionalParams } from "./models";

const packageName = "custom-url";
export const packageVersion = "1.0.0-preview1";

export class CustomUrlClientContext extends coreHttp.ServiceClient {
  host: string;

  /**
   * Initializes a new instance of the CustomUrlClientContext class.
   * @param options The parameter options
   */
  constructor(options?: CustomUrlClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "http://{accountName}{host}";

    // Assigning values to Constant parameters
    this.host = options.host || "host";
  }
}

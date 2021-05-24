/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { ManagedServiceIdentityClientOptionalParams } from "./models";

const packageName = "msi-resource-manager";
const packageVersion = "1.0.0-beta.1";

export class ManagedServiceIdentityClientContext extends coreHttp.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the ManagedServiceIdentityClientContext class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The Id of the Subscription to which the identity belongs.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    subscriptionId: string,
    options?: ManagedServiceIdentityClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.requestContentType = "application/json; charset=utf-8";
    this.baseUri = options.endpoint || "https://management.azure.com";
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2018-11-30";
  }
}

/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreHttps from "@azure/core-rest-pipeline";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureSpecialPropertiesClientContext } from "../azureSpecialPropertiesClientContext";
import { OdataGetWithFilterOptionalParams } from "../models";

/** Class representing a Odata. */
export class Odata {
  private readonly client: AzureSpecialPropertiesClientContext;

  /**
   * Initialize a new instance of the class Odata class.
   * @param client Reference to the service client
   */
  constructor(client: AzureSpecialPropertiesClientContext) {
    this.client = client;
  }

  /**
   * Specify filter parameter with value '$filter=id gt 5 and name eq 'foo'&$orderby=id&$top=10'
   * @param options The options parameters.
   */
  getWithFilter(options?: OdataGetWithFilterOptionalParams): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getWithFilterOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getWithFilterOperationSpec: coreClient.OperationSpec = {
  path: "/azurespecials/odata/filter",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.filter, Parameters.top, Parameters.orderby],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};

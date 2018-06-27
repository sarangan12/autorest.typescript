/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/readonlypropertyMappers";
import { AzureCompositeModelContext } from "../azureCompositeModelContext";

/** Class representing a Readonlyproperty. */
export class Readonlyproperty {
  private readonly client: AzureCompositeModelContext;

  /**
   * Create a Readonlyproperty.
   * @param {AzureCompositeModelContext} client Reference to the service client.
   */
  constructor(client: AzureCompositeModelContext) {
    this.client = client;
  }

  /**
   * Get complex types that have readonly properties
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async getValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ReadonlyObj>> {

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        msRest.createOperationArguments(
          {
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          options),
        getValidOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Put complex types that have readonly properties
   *
   * @param {ReadonlypropertyPutValidOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async putValidWithHttpOperationResponse(options?: Models.ReadonlypropertyPutValidOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    let size = (options && options.size !== undefined) ? options.size : undefined;

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        msRest.createOperationArguments(
          {
            size,
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          options),
        putValidOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Get complex types that have readonly properties
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ReadonlyObj} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ReadonlyObj} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getValid(): Promise<Models.ReadonlyObj>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.ReadonlyObj>;
  getValid(callback: msRest.ServiceCallback<Models.ReadonlyObj>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReadonlyObj>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ReadonlyObj>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.ReadonlyObj>;
    if (!callback) {
      return this.getValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.ReadonlyObj);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.ReadonlyObj;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Put complex types that have readonly properties
   *
   * @param {ReadonlypropertyPutValidOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  putValid(): Promise<void>;
  putValid(options: Models.ReadonlypropertyPutValidOptionalParams): Promise<void>;
  putValid(callback: msRest.ServiceCallback<void>): void;
  putValid(options: Models.ReadonlypropertyPutValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putValid(options?: Models.ReadonlypropertyPutValidOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.putValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.putValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

}

// Operation Specifications
const getValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/readonlyproperty/valid",
  headerParameters: [
    {
      parameterPath: "this.client.acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ReadonlyObj
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const putValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/readonlyproperty/valid",
  headerParameters: [
    {
      parameterPath: "this.client.acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  requestBody: {
    parameterPath: {
      size: "size"
    },
    mapper: {
      ...Mappers.ReadonlyObj,
      required: true
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

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
import * as Mappers from "../models/dictionaryMappers";
import { AzureCompositeModelContext } from "../azureCompositeModelContext";

/** Class representing a Dictionary. */
export class Dictionary {
  private readonly client: AzureCompositeModelContext;

  /**
   * Create a Dictionary.
   * @param {AzureCompositeModelContext} client Reference to the service client.
   */
  constructor(client: AzureCompositeModelContext) {
    this.client = client;
  }

  /**
   * Get complex types with dictionary property
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async getValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DictionaryWrapper>> {

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
   * Put complex types with dictionary property
   *
   * @param {DictionaryPutValidOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async putValidWithHttpOperationResponse(options?: Models.DictionaryPutValidOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    let defaultProgram = (options && options.defaultProgram !== undefined) ? options.defaultProgram : undefined;

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        msRest.createOperationArguments(
          {
            defaultProgram,
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
   * Get complex types with dictionary property which is empty
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async getEmptyWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DictionaryWrapper>> {

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        msRest.createOperationArguments(
          {
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          options),
        getEmptyOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Put complex types with dictionary property which is empty
   *
   * @param {DictionaryPutEmptyOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async putEmptyWithHttpOperationResponse(options?: Models.DictionaryPutEmptyOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    let defaultProgram = (options && options.defaultProgram !== undefined) ? options.defaultProgram : undefined;

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        msRest.createOperationArguments(
          {
            defaultProgram,
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          options),
        putEmptyOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Get complex types with dictionary property which is null
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async getNullWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DictionaryWrapper>> {

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        msRest.createOperationArguments(
          {
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          options),
        getNullOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Get complex types with dictionary property while server doesn't provide a response payload
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async getNotProvidedWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DictionaryWrapper>> {

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        msRest.createOperationArguments(
          {
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          options),
        getNotProvidedOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Get complex types with dictionary property
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.DictionaryWrapper} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.DictionaryWrapper} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getValid(): Promise<Models.DictionaryWrapper>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.DictionaryWrapper>;
  getValid(callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DictionaryWrapper>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.DictionaryWrapper>;
    if (!callback) {
      return this.getValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.DictionaryWrapper);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.DictionaryWrapper;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Put complex types with dictionary property
   *
   * @param {DictionaryPutValidOptionalParams} [options] Optional Parameters.
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
  putValid(options: Models.DictionaryPutValidOptionalParams): Promise<void>;
  putValid(callback: msRest.ServiceCallback<void>): void;
  putValid(options: Models.DictionaryPutValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putValid(options?: Models.DictionaryPutValidOptionalParams, callback?: msRest.ServiceCallback<void>): any {
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

  /**
   * Get complex types with dictionary property which is empty
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.DictionaryWrapper} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.DictionaryWrapper} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getEmpty(): Promise<Models.DictionaryWrapper>;
  getEmpty(options: msRest.RequestOptionsBase): Promise<Models.DictionaryWrapper>;
  getEmpty(callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getEmpty(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getEmpty(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DictionaryWrapper>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.DictionaryWrapper>;
    if (!callback) {
      return this.getEmptyWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.DictionaryWrapper);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getEmptyWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.DictionaryWrapper;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Put complex types with dictionary property which is empty
   *
   * @param {DictionaryPutEmptyOptionalParams} [options] Optional Parameters.
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
  putEmpty(): Promise<void>;
  putEmpty(options: Models.DictionaryPutEmptyOptionalParams): Promise<void>;
  putEmpty(callback: msRest.ServiceCallback<void>): void;
  putEmpty(options: Models.DictionaryPutEmptyOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putEmpty(options?: Models.DictionaryPutEmptyOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.putEmptyWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.putEmptyWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Get complex types with dictionary property which is null
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.DictionaryWrapper} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.DictionaryWrapper} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getNull(): Promise<Models.DictionaryWrapper>;
  getNull(options: msRest.RequestOptionsBase): Promise<Models.DictionaryWrapper>;
  getNull(callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getNull(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getNull(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DictionaryWrapper>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.DictionaryWrapper>;
    if (!callback) {
      return this.getNullWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.DictionaryWrapper);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getNullWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.DictionaryWrapper;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Get complex types with dictionary property while server doesn't provide a response payload
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.DictionaryWrapper} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.DictionaryWrapper} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getNotProvided(): Promise<Models.DictionaryWrapper>;
  getNotProvided(options: msRest.RequestOptionsBase): Promise<Models.DictionaryWrapper>;
  getNotProvided(callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getNotProvided(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getNotProvided(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DictionaryWrapper>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.DictionaryWrapper>;
    if (!callback) {
      return this.getNotProvidedWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.DictionaryWrapper);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getNotProvidedWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.DictionaryWrapper;
        return cb(err, result, data.request, data);
      });
    }
  }

}

// Operation Specifications
const getValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/dictionary/typed/valid",
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
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const putValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/dictionary/typed/valid",
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
      defaultProgram: "defaultProgram"
    },
    mapper: {
      ...Mappers.DictionaryWrapper,
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

const getEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/dictionary/typed/empty",
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
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const putEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/dictionary/typed/empty",
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
      defaultProgram: "defaultProgram"
    },
    mapper: {
      ...Mappers.DictionaryWrapper,
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

const getNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/dictionary/typed/null",
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
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const getNotProvidedOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/dictionary/typed/notprovided",
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
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

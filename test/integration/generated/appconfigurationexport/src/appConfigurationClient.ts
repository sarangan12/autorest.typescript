/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { AppConfigurationClientContext } from "./appConfigurationClientContext";
import {
  AppConfigurationClientOptionalParams,
  Key,
  AppConfigurationClientGetKeysNextOptionalParams,
  AppConfigurationClientGetKeysOptionalParams,
  KeyValue,
  AppConfigurationClientGetKeyValuesNextOptionalParams,
  AppConfigurationClientGetKeyValuesOptionalParams,
  Label,
  AppConfigurationClientGetLabelsNextOptionalParams,
  AppConfigurationClientGetLabelsOptionalParams,
  AppConfigurationClientGetRevisionsNextOptionalParams,
  AppConfigurationClientGetRevisionsOptionalParams,
  AppConfigurationClientGetKeysResponse,
  AppConfigurationClientCheckKeysOptionalParams,
  AppConfigurationClientCheckKeysResponse,
  AppConfigurationClientGetKeyValuesResponse,
  AppConfigurationClientCheckKeyValuesOptionalParams,
  AppConfigurationClientCheckKeyValuesResponse,
  AppConfigurationClientGetKeyValueOptionalParams,
  AppConfigurationClientGetKeyValueResponse,
  AppConfigurationClientPutKeyValueOptionalParams,
  AppConfigurationClientPutKeyValueResponse,
  AppConfigurationClientDeleteKeyValueOptionalParams,
  AppConfigurationClientDeleteKeyValueResponse,
  AppConfigurationClientCheckKeyValueOptionalParams,
  AppConfigurationClientCheckKeyValueResponse,
  AppConfigurationClientGetLabelsResponse,
  AppConfigurationClientCheckLabelsOptionalParams,
  AppConfigurationClientCheckLabelsResponse,
  AppConfigurationClientPutLockOptionalParams,
  AppConfigurationClientPutLockResponse,
  AppConfigurationClientDeleteLockOptionalParams,
  AppConfigurationClientDeleteLockResponse,
  AppConfigurationClientGetRevisionsResponse,
  AppConfigurationClientCheckRevisionsOptionalParams,
  AppConfigurationClientCheckRevisionsResponse,
  AppConfigurationClientGetKeysNextResponse,
  AppConfigurationClientGetKeyValuesNextResponse,
  AppConfigurationClientGetLabelsNextResponse,
  AppConfigurationClientGetRevisionsNextResponse
} from "./models";

/** @internal */
export class AppConfigurationClient extends AppConfigurationClientContext {
  /**
   * Initializes a new instance of the AppConfigurationClient class.
   * @param endpoint The endpoint of the App Configuration instance to send requests to.
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    options?: AppConfigurationClientOptionalParams
  ) {
    super(endpoint, options);
  }

  /**
   * Gets a list of keys.
   * @param options The options parameters.
   */
  public listKeys(
    options?: AppConfigurationClientGetKeysOptionalParams
  ): PagedAsyncIterableIterator<Key> {
    const iter = this.getKeysPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getKeysPagingPage(options);
      }
    };
  }

  private async *getKeysPagingPage(
    options?: AppConfigurationClientGetKeysOptionalParams
  ): AsyncIterableIterator<Key[]> {
    let result = await this._getKeys(options);
    yield result.items || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getKeysNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.items || [];
    }
  }

  private async *getKeysPagingAll(
    options?: AppConfigurationClientGetKeysOptionalParams
  ): AsyncIterableIterator<Key> {
    for await (const page of this.getKeysPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of key-values.
   * @param options The options parameters.
   */
  public listKeyValues(
    options?: AppConfigurationClientGetKeyValuesOptionalParams
  ): PagedAsyncIterableIterator<KeyValue> {
    const iter = this.getKeyValuesPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getKeyValuesPagingPage(options);
      }
    };
  }

  private async *getKeyValuesPagingPage(
    options?: AppConfigurationClientGetKeyValuesOptionalParams
  ): AsyncIterableIterator<KeyValue[]> {
    let result = await this._getKeyValues(options);
    yield result.items || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getKeyValuesNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.items || [];
    }
  }

  private async *getKeyValuesPagingAll(
    options?: AppConfigurationClientGetKeyValuesOptionalParams
  ): AsyncIterableIterator<KeyValue> {
    for await (const page of this.getKeyValuesPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of labels.
   * @param options The options parameters.
   */
  public listLabels(
    options?: AppConfigurationClientGetLabelsOptionalParams
  ): PagedAsyncIterableIterator<Label> {
    const iter = this.getLabelsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getLabelsPagingPage(options);
      }
    };
  }

  private async *getLabelsPagingPage(
    options?: AppConfigurationClientGetLabelsOptionalParams
  ): AsyncIterableIterator<Label[]> {
    let result = await this._getLabels(options);
    yield result.items || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getLabelsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.items || [];
    }
  }

  private async *getLabelsPagingAll(
    options?: AppConfigurationClientGetLabelsOptionalParams
  ): AsyncIterableIterator<Label> {
    for await (const page of this.getLabelsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of key-value revisions.
   * @param options The options parameters.
   */
  public listRevisions(
    options?: AppConfigurationClientGetRevisionsOptionalParams
  ): PagedAsyncIterableIterator<KeyValue> {
    const iter = this.getRevisionsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getRevisionsPagingPage(options);
      }
    };
  }

  private async *getRevisionsPagingPage(
    options?: AppConfigurationClientGetRevisionsOptionalParams
  ): AsyncIterableIterator<KeyValue[]> {
    let result = await this._getRevisions(options);
    yield result.items || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getRevisionsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.items || [];
    }
  }

  private async *getRevisionsPagingAll(
    options?: AppConfigurationClientGetRevisionsOptionalParams
  ): AsyncIterableIterator<KeyValue> {
    for await (const page of this.getRevisionsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of keys.
   * @param options The options parameters.
   */
  private _getKeys(
    options?: AppConfigurationClientGetKeysOptionalParams
  ): Promise<AppConfigurationClientGetKeysResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getKeysOperationSpec
    ) as Promise<AppConfigurationClientGetKeysResponse>;
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkKeys(
    options?: AppConfigurationClientCheckKeysOptionalParams
  ): Promise<AppConfigurationClientCheckKeysResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      checkKeysOperationSpec
    ) as Promise<AppConfigurationClientCheckKeysResponse>;
  }

  /**
   * Gets a list of key-values.
   * @param options The options parameters.
   */
  private _getKeyValues(
    options?: AppConfigurationClientGetKeyValuesOptionalParams
  ): Promise<AppConfigurationClientGetKeyValuesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getKeyValuesOperationSpec
    ) as Promise<AppConfigurationClientGetKeyValuesResponse>;
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkKeyValues(
    options?: AppConfigurationClientCheckKeyValuesOptionalParams
  ): Promise<AppConfigurationClientCheckKeyValuesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      checkKeyValuesOperationSpec
    ) as Promise<AppConfigurationClientCheckKeyValuesResponse>;
  }

  /**
   * Gets a single key-value.
   * @param key The key of the key-value to retrieve.
   * @param options The options parameters.
   */
  getKeyValue(
    key: string,
    options?: AppConfigurationClientGetKeyValueOptionalParams
  ): Promise<AppConfigurationClientGetKeyValueResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      key,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getKeyValueOperationSpec
    ) as Promise<AppConfigurationClientGetKeyValueResponse>;
  }

  /**
   * Creates a key-value.
   * @param key The key of the key-value to create.
   * @param options The options parameters.
   */
  putKeyValue(
    key: string,
    options?: AppConfigurationClientPutKeyValueOptionalParams
  ): Promise<AppConfigurationClientPutKeyValueResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      key,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      putKeyValueOperationSpec
    ) as Promise<AppConfigurationClientPutKeyValueResponse>;
  }

  /**
   * Deletes a key-value.
   * @param key The key of the key-value to delete.
   * @param options The options parameters.
   */
  deleteKeyValue(
    key: string,
    options?: AppConfigurationClientDeleteKeyValueOptionalParams
  ): Promise<AppConfigurationClientDeleteKeyValueResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      key,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      deleteKeyValueOperationSpec
    ) as Promise<AppConfigurationClientDeleteKeyValueResponse>;
  }

  /**
   * Requests the headers and status of the given resource.
   * @param key The key of the key-value to retrieve.
   * @param options The options parameters.
   */
  checkKeyValue(
    key: string,
    options?: AppConfigurationClientCheckKeyValueOptionalParams
  ): Promise<AppConfigurationClientCheckKeyValueResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      key,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      checkKeyValueOperationSpec
    ) as Promise<AppConfigurationClientCheckKeyValueResponse>;
  }

  /**
   * Gets a list of labels.
   * @param options The options parameters.
   */
  private _getLabels(
    options?: AppConfigurationClientGetLabelsOptionalParams
  ): Promise<AppConfigurationClientGetLabelsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getLabelsOperationSpec
    ) as Promise<AppConfigurationClientGetLabelsResponse>;
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkLabels(
    options?: AppConfigurationClientCheckLabelsOptionalParams
  ): Promise<AppConfigurationClientCheckLabelsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      checkLabelsOperationSpec
    ) as Promise<AppConfigurationClientCheckLabelsResponse>;
  }

  /**
   * Locks a key-value.
   * @param key The key of the key-value to lock.
   * @param options The options parameters.
   */
  putLock(
    key: string,
    options?: AppConfigurationClientPutLockOptionalParams
  ): Promise<AppConfigurationClientPutLockResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      key,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      putLockOperationSpec
    ) as Promise<AppConfigurationClientPutLockResponse>;
  }

  /**
   * Unlocks a key-value.
   * @param key The key of the key-value to unlock.
   * @param options The options parameters.
   */
  deleteLock(
    key: string,
    options?: AppConfigurationClientDeleteLockOptionalParams
  ): Promise<AppConfigurationClientDeleteLockResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      key,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      deleteLockOperationSpec
    ) as Promise<AppConfigurationClientDeleteLockResponse>;
  }

  /**
   * Gets a list of key-value revisions.
   * @param options The options parameters.
   */
  private _getRevisions(
    options?: AppConfigurationClientGetRevisionsOptionalParams
  ): Promise<AppConfigurationClientGetRevisionsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getRevisionsOperationSpec
    ) as Promise<AppConfigurationClientGetRevisionsResponse>;
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkRevisions(
    options?: AppConfigurationClientCheckRevisionsOptionalParams
  ): Promise<AppConfigurationClientCheckRevisionsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      checkRevisionsOperationSpec
    ) as Promise<AppConfigurationClientCheckRevisionsResponse>;
  }

  /**
   * GetKeysNext
   * @param nextLink The nextLink from the previous successful call to the GetKeys method.
   * @param options The options parameters.
   */
  private _getKeysNext(
    nextLink: string,
    options?: AppConfigurationClientGetKeysNextOptionalParams
  ): Promise<AppConfigurationClientGetKeysNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getKeysNextOperationSpec
    ) as Promise<AppConfigurationClientGetKeysNextResponse>;
  }

  /**
   * GetKeyValuesNext
   * @param nextLink The nextLink from the previous successful call to the GetKeyValues method.
   * @param options The options parameters.
   */
  private _getKeyValuesNext(
    nextLink: string,
    options?: AppConfigurationClientGetKeyValuesNextOptionalParams
  ): Promise<AppConfigurationClientGetKeyValuesNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getKeyValuesNextOperationSpec
    ) as Promise<AppConfigurationClientGetKeyValuesNextResponse>;
  }

  /**
   * GetLabelsNext
   * @param nextLink The nextLink from the previous successful call to the GetLabels method.
   * @param options The options parameters.
   */
  private _getLabelsNext(
    nextLink: string,
    options?: AppConfigurationClientGetLabelsNextOptionalParams
  ): Promise<AppConfigurationClientGetLabelsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getLabelsNextOperationSpec
    ) as Promise<AppConfigurationClientGetLabelsNextResponse>;
  }

  /**
   * GetRevisionsNext
   * @param nextLink The nextLink from the previous successful call to the GetRevisions method.
   * @param options The options parameters.
   */
  private _getRevisionsNext(
    nextLink: string,
    options?: AppConfigurationClientGetRevisionsNextOptionalParams
  ): Promise<AppConfigurationClientGetRevisionsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getRevisionsNextOperationSpec
    ) as Promise<AppConfigurationClientGetRevisionsNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getKeysOperationSpec: coreHttp.OperationSpec = {
  path: "/keys",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyListResult,
      headersMapper: Mappers.AppConfigurationClientGetKeysHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.name, Parameters.apiVersion, Parameters.after],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.accept,
    Parameters.syncToken,
    Parameters.acceptDatetime
  ],
  serializer
};
const checkKeysOperationSpec: coreHttp.OperationSpec = {
  path: "/keys",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationClientCheckKeysHeaders
    },
    default: {}
  },
  queryParameters: [Parameters.name, Parameters.apiVersion, Parameters.after],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.acceptDatetime],
  serializer
};
const getKeyValuesOperationSpec: coreHttp.OperationSpec = {
  path: "/kv",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.AppConfigurationClientGetKeyValuesHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1
  ],
  serializer
};
const checkKeyValuesOperationSpec: coreHttp.OperationSpec = {
  path: "/kv",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationClientCheckKeyValuesHeaders
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select1
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.acceptDatetime],
  serializer
};
const getKeyValueOperationSpec: coreHttp.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue,
      headersMapper: Mappers.AppConfigurationClientGetKeyValueHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.label,
    Parameters.select2
  ],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept2,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const putKeyValueOperationSpec: coreHttp.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue,
      headersMapper: Mappers.AppConfigurationClientPutKeyValueHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.entity,
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.accept2,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const deleteKeyValueOperationSpec: coreHttp.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue,
      headersMapper: Mappers.AppConfigurationClientDeleteKeyValueHeaders
    },
    204: {
      headersMapper: Mappers.AppConfigurationClientDeleteKeyValueHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.accept2,
    Parameters.ifMatch
  ],
  serializer
};
const checkKeyValueOperationSpec: coreHttp.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationClientCheckKeyValueHeaders
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.label,
    Parameters.select3
  ],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const getLabelsOperationSpec: coreHttp.OperationSpec = {
  path: "/labels",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LabelListResult,
      headersMapper: Mappers.AppConfigurationClientGetLabelsHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.name,
    Parameters.apiVersion,
    Parameters.after,
    Parameters.select4
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept3
  ],
  serializer
};
const checkLabelsOperationSpec: coreHttp.OperationSpec = {
  path: "/labels",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationClientCheckLabelsHeaders
    },
    default: {}
  },
  queryParameters: [
    Parameters.name,
    Parameters.apiVersion,
    Parameters.after,
    Parameters.select4
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.acceptDatetime],
  serializer
};
const putLockOperationSpec: coreHttp.OperationSpec = {
  path: "/locks/{key}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue,
      headersMapper: Mappers.AppConfigurationClientPutLockHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.accept2,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const deleteLockOperationSpec: coreHttp.OperationSpec = {
  path: "/locks/{key}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue,
      headersMapper: Mappers.AppConfigurationClientDeleteLockHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.accept2,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const getRevisionsOperationSpec: coreHttp.OperationSpec = {
  path: "/revisions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.AppConfigurationClientGetRevisionsHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select5
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1
  ],
  serializer
};
const checkRevisionsOperationSpec: coreHttp.OperationSpec = {
  path: "/revisions",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationClientCheckRevisionsHeaders
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select6
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.acceptDatetime],
  serializer
};
const getKeysNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyListResult,
      headersMapper: Mappers.AppConfigurationClientGetKeysNextHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.name, Parameters.apiVersion, Parameters.after],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.syncToken,
    Parameters.acceptDatetime
  ],
  serializer
};
const getKeyValuesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.AppConfigurationClientGetKeyValuesNextHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select
  ],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1
  ],
  serializer
};
const getLabelsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LabelListResult,
      headersMapper: Mappers.AppConfigurationClientGetLabelsNextHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.name,
    Parameters.apiVersion,
    Parameters.after,
    Parameters.select4
  ],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept3
  ],
  serializer
};
const getRevisionsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.AppConfigurationClientGetRevisionsNextHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select5
  ],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1
  ],
  serializer
};

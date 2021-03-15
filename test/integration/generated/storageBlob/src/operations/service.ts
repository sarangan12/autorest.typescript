import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageBlobContext } from "../storageBlobContext";
import {
  BlobServiceProperties,
  ServiceSetPropertiesOptionalParams,
  ServiceSetPropertiesResponse,
  ServiceGetPropertiesOptionalParams,
  ServiceGetPropertiesResponse,
  ServiceGetStatisticsOptionalParams,
  ServiceGetStatisticsResponse,
  ServiceListContainersSegmentOptionalParams,
  ServiceListContainersSegmentResponse,
  KeyInfo,
  ServiceGetUserDelegationKeyOptionalParams,
  ServiceGetUserDelegationKeyResponse,
  ServiceGetAccountInfoResponse,
  ServiceSubmitBatchOptionalParams,
  ServiceSubmitBatchResponse,
  ServiceFilterBlobsOptionalParams,
  ServiceFilterBlobsResponse,
  ServiceListContainersSegmentNextOptionalParams,
  ServiceListContainersSegmentNextResponse
} from "../models";

/** Class representing a Service. */
export class Service {
  private readonly client: StorageBlobContext;

  /**
   * Initialize a new instance of the class Service class.
   * @param client Reference to the service client
   */
  constructor(client: StorageBlobContext) {
    this.client = client;
  }

  /**
   * Sets properties for a storage account's Blob service endpoint, including properties for Storage
   * Analytics and CORS (Cross-Origin Resource Sharing) rules
   * @param blobServiceProperties The StorageService properties.
   * @param options The options parameters.
   */
  setProperties(
    blobServiceProperties: BlobServiceProperties,
    options?: ServiceSetPropertiesOptionalParams
  ): Promise<ServiceSetPropertiesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      blobServiceProperties,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setPropertiesOperationSpec
    ) as Promise<ServiceSetPropertiesResponse>;
  }

  /**
   * gets the properties of a storage account's Blob service, including properties for Storage Analytics
   * and CORS (Cross-Origin Resource Sharing) rules.
   * @param options The options parameters.
   */
  getProperties(
    options?: ServiceGetPropertiesOptionalParams
  ): Promise<ServiceGetPropertiesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getPropertiesOperationSpec
    ) as Promise<ServiceGetPropertiesResponse>;
  }

  /**
   * Retrieves statistics related to replication for the Blob service. It is only available on the
   * secondary location endpoint when read-access geo-redundant replication is enabled for the storage
   * account.
   * @param options The options parameters.
   */
  getStatistics(
    options?: ServiceGetStatisticsOptionalParams
  ): Promise<ServiceGetStatisticsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getStatisticsOperationSpec
    ) as Promise<ServiceGetStatisticsResponse>;
  }

  /**
   * The List Containers Segment operation returns a list of the containers under the specified account
   * @param options The options parameters.
   */
  listContainersSegment(
    options?: ServiceListContainersSegmentOptionalParams
  ): Promise<ServiceListContainersSegmentResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listContainersSegmentOperationSpec
    ) as Promise<ServiceListContainersSegmentResponse>;
  }

  /**
   * Retrieves a user delegation key for the Blob service. This is only a valid operation when using
   * bearer token authentication.
   * @param keyInfo Key information
   * @param options The options parameters.
   */
  getUserDelegationKey(
    keyInfo: KeyInfo,
    options?: ServiceGetUserDelegationKeyOptionalParams
  ): Promise<ServiceGetUserDelegationKeyResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      keyInfo,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getUserDelegationKeyOperationSpec
    ) as Promise<ServiceGetUserDelegationKeyResponse>;
  }

  /**
   * Returns the sku name and account kind
   * @param options The options parameters.
   */
  getAccountInfo(
    options?: coreHttp.OperationOptions
  ): Promise<ServiceGetAccountInfoResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getAccountInfoOperationSpec
    ) as Promise<ServiceGetAccountInfoResponse>;
  }

  /**
   * The Batch operation allows multiple API calls to be embedded into a single HTTP request.
   * @param contentLength The length of the request.
   * @param multipartContentType Required. The value of this header must be multipart/mixed with a batch
   *                             boundary. Example header value: multipart/mixed; boundary=batch_<GUID>
   * @param body Initial data
   * @param options The options parameters.
   */
  submitBatch(
    contentLength: number,
    multipartContentType: string,
    body: coreHttp.HttpRequestBody,
    options?: ServiceSubmitBatchOptionalParams
  ): Promise<ServiceSubmitBatchResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      contentLength,
      multipartContentType,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      submitBatchOperationSpec
    ) as Promise<ServiceSubmitBatchResponse>;
  }

  /**
   * The Filter Blobs operation enables callers to list blobs across all containers whose tags match a
   * given search expression.  Filter blobs searches across all containers within a storage account but
   * can be scoped within the expression to a single container.
   * @param options The options parameters.
   */
  filterBlobs(
    options?: ServiceFilterBlobsOptionalParams
  ): Promise<ServiceFilterBlobsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      filterBlobsOperationSpec
    ) as Promise<ServiceFilterBlobsResponse>;
  }

  /**
   * ListContainersSegmentNext
   * @param nextLink The nextLink from the previous successful call to the ListContainersSegment method.
   * @param options The options parameters.
   */
  listContainersSegmentNext(
    nextLink: string,
    options?: ServiceListContainersSegmentNextOptionalParams
  ): Promise<ServiceListContainersSegmentNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listContainersSegmentNextOperationSpec
    ) as Promise<ServiceListContainersSegmentNextResponse>;
  }
}
// Operation Specifications
const xmlSerializer = new coreHttp.Serializer(Mappers, /* isXml */ true);

const setPropertiesOperationSpec: coreHttp.OperationSpec = {
  path: "/",
  httpMethod: "PUT",
  responses: {
    202: {
      headersMapper: Mappers.ServiceSetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ServiceSetPropertiesExceptionHeaders
    }
  },
  requestBody: Parameters.blobServiceProperties,
  queryParameters: [
    Parameters.restype,
    Parameters.comp,
    Parameters.timeoutInSeconds
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.version,
    Parameters.requestId
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getPropertiesOperationSpec: coreHttp.OperationSpec = {
  path: "/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BlobServiceProperties,
      headersMapper: Mappers.ServiceGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ServiceGetPropertiesExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.restype,
    Parameters.comp,
    Parameters.timeoutInSeconds
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getStatisticsOperationSpec: coreHttp.OperationSpec = {
  path: "/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BlobServiceStatistics,
      headersMapper: Mappers.ServiceGetStatisticsHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ServiceGetStatisticsExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.restype,
    Parameters.timeoutInSeconds,
    Parameters.comp1
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const listContainersSegmentOperationSpec: coreHttp.OperationSpec = {
  path: "/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListContainersSegmentResponse,
      headersMapper: Mappers.ServiceListContainersSegmentHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ServiceListContainersSegmentExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp2,
    Parameters.prefix,
    Parameters.marker,
    Parameters.maxPageSize,
    Parameters.include
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getUserDelegationKeyOperationSpec: coreHttp.OperationSpec = {
  path: "/",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.UserDelegationKey,
      headersMapper: Mappers.ServiceGetUserDelegationKeyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ServiceGetUserDelegationKeyExceptionHeaders
    }
  },
  requestBody: Parameters.keyInfo,
  queryParameters: [
    Parameters.restype,
    Parameters.timeoutInSeconds,
    Parameters.comp3
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.version,
    Parameters.requestId
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getAccountInfoOperationSpec: coreHttp.OperationSpec = {
  path: "/",
  httpMethod: "GET",
  responses: {
    200: {
      headersMapper: Mappers.ServiceGetAccountInfoHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ServiceGetAccountInfoExceptionHeaders
    }
  },
  queryParameters: [Parameters.comp, Parameters.restype1],
  urlParameters: [Parameters.url],
  headerParameters: [Parameters.version, Parameters.accept1],
  isXML: true,
  serializer: xmlSerializer
};
const submitBatchOperationSpec: coreHttp.OperationSpec = {
  path: "/",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: {
        type: { name: "Stream" },
        serializedName: "parsedResponse"
      },
      headersMapper: Mappers.ServiceSubmitBatchHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ServiceSubmitBatchExceptionHeaders
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp4],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.version,
    Parameters.requestId,
    Parameters.contentLength,
    Parameters.multipartContentType
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const filterBlobsOperationSpec: coreHttp.OperationSpec = {
  path: "/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FilterBlobSegment,
      headersMapper: Mappers.ServiceFilterBlobsHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ServiceFilterBlobsExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.marker,
    Parameters.maxPageSize,
    Parameters.comp5,
    Parameters.where
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const listContainersSegmentNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListContainersSegmentResponse,
      headersMapper: Mappers.ServiceListContainersSegmentNextHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ServiceListContainersSegmentNextExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp2,
    Parameters.prefix,
    Parameters.marker,
    Parameters.maxPageSize,
    Parameters.include
  ],
  urlParameters: [Parameters.url, Parameters.nextLink],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1
  ],
  isXML: true,
  serializer: xmlSerializer
};

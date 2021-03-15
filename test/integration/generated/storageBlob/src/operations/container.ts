import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageBlobContext } from "../storageBlobContext";
import {
  ContainerCreateOptionalParams,
  ContainerCreateResponse,
  ContainerGetPropertiesOptionalParams,
  ContainerGetPropertiesResponse,
  ContainerDeleteOptionalParams,
  ContainerDeleteResponse,
  ContainerSetMetadataOptionalParams,
  ContainerSetMetadataResponse,
  ContainerGetAccessPolicyOptionalParams,
  ContainerGetAccessPolicyResponse,
  ContainerSetAccessPolicyOptionalParams,
  ContainerSetAccessPolicyResponse,
  ContainerRestoreOptionalParams,
  ContainerRestoreResponse,
  ContainerRenameOptionalParams,
  ContainerRenameResponse,
  ContainerSubmitBatchOptionalParams,
  ContainerSubmitBatchResponse,
  ContainerAcquireLeaseOptionalParams,
  ContainerAcquireLeaseResponse,
  ContainerReleaseLeaseOptionalParams,
  ContainerReleaseLeaseResponse,
  ContainerRenewLeaseOptionalParams,
  ContainerRenewLeaseResponse,
  ContainerBreakLeaseOptionalParams,
  ContainerBreakLeaseResponse,
  ContainerChangeLeaseOptionalParams,
  ContainerChangeLeaseResponse,
  ContainerListBlobFlatSegmentOptionalParams,
  ContainerListBlobFlatSegmentResponse,
  ContainerListBlobHierarchySegmentOptionalParams,
  ContainerListBlobHierarchySegmentResponse,
  ContainerGetAccountInfoResponse,
  ContainerListBlobFlatSegmentNextOptionalParams,
  ContainerListBlobFlatSegmentNextResponse,
  ContainerListBlobHierarchySegmentNextOptionalParams,
  ContainerListBlobHierarchySegmentNextResponse
} from "../models";

/** Class representing a Container. */
export class Container {
  private readonly client: StorageBlobContext;

  /**
   * Initialize a new instance of the class Container class.
   * @param client Reference to the service client
   */
  constructor(client: StorageBlobContext) {
    this.client = client;
  }

  /**
   * creates a new container under the specified account. If the container with the same name already
   * exists, the operation fails
   * @param options The options parameters.
   */
  create(
    options?: ContainerCreateOptionalParams
  ): Promise<ContainerCreateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOperationSpec
    ) as Promise<ContainerCreateResponse>;
  }

  /**
   * returns all user-defined metadata and system properties for the specified container. The data
   * returned does not include the container's list of blobs
   * @param options The options parameters.
   */
  getProperties(
    options?: ContainerGetPropertiesOptionalParams
  ): Promise<ContainerGetPropertiesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getPropertiesOperationSpec
    ) as Promise<ContainerGetPropertiesResponse>;
  }

  /**
   * operation marks the specified container for deletion. The container and any blobs contained within
   * it are later deleted during garbage collection
   * @param options The options parameters.
   */
  delete(
    options?: ContainerDeleteOptionalParams
  ): Promise<ContainerDeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<ContainerDeleteResponse>;
  }

  /**
   * operation sets one or more user-defined name-value pairs for the specified container.
   * @param options The options parameters.
   */
  setMetadata(
    options?: ContainerSetMetadataOptionalParams
  ): Promise<ContainerSetMetadataResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setMetadataOperationSpec
    ) as Promise<ContainerSetMetadataResponse>;
  }

  /**
   * gets the permissions for the specified container. The permissions indicate whether container data
   * may be accessed publicly.
   * @param options The options parameters.
   */
  getAccessPolicy(
    options?: ContainerGetAccessPolicyOptionalParams
  ): Promise<ContainerGetAccessPolicyResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getAccessPolicyOperationSpec
    ) as Promise<ContainerGetAccessPolicyResponse>;
  }

  /**
   * sets the permissions for the specified container. The permissions indicate whether blobs in a
   * container may be accessed publicly.
   * @param options The options parameters.
   */
  setAccessPolicy(
    options?: ContainerSetAccessPolicyOptionalParams
  ): Promise<ContainerSetAccessPolicyResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setAccessPolicyOperationSpec
    ) as Promise<ContainerSetAccessPolicyResponse>;
  }

  /**
   * Restores a previously-deleted container.
   * @param options The options parameters.
   */
  restore(
    options?: ContainerRestoreOptionalParams
  ): Promise<ContainerRestoreResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      restoreOperationSpec
    ) as Promise<ContainerRestoreResponse>;
  }

  /**
   * Renames an existing container.
   * @param sourceContainerName Required.  Specifies the name of the container to rename.
   * @param options The options parameters.
   */
  rename(
    sourceContainerName: string,
    options?: ContainerRenameOptionalParams
  ): Promise<ContainerRenameResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      sourceContainerName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      renameOperationSpec
    ) as Promise<ContainerRenameResponse>;
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
    options?: ContainerSubmitBatchOptionalParams
  ): Promise<ContainerSubmitBatchResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      contentLength,
      multipartContentType,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      submitBatchOperationSpec
    ) as Promise<ContainerSubmitBatchResponse>;
  }

  /**
   * [Update] establishes and manages a lock on a container for delete operations. The lock duration can
   * be 15 to 60 seconds, or can be infinite
   * @param options The options parameters.
   */
  acquireLease(
    options?: ContainerAcquireLeaseOptionalParams
  ): Promise<ContainerAcquireLeaseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      acquireLeaseOperationSpec
    ) as Promise<ContainerAcquireLeaseResponse>;
  }

  /**
   * [Update] establishes and manages a lock on a container for delete operations. The lock duration can
   * be 15 to 60 seconds, or can be infinite
   * @param leaseId Specifies the current lease ID on the resource.
   * @param options The options parameters.
   */
  releaseLease(
    leaseId: string,
    options?: ContainerReleaseLeaseOptionalParams
  ): Promise<ContainerReleaseLeaseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      leaseId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      releaseLeaseOperationSpec
    ) as Promise<ContainerReleaseLeaseResponse>;
  }

  /**
   * [Update] establishes and manages a lock on a container for delete operations. The lock duration can
   * be 15 to 60 seconds, or can be infinite
   * @param leaseId Specifies the current lease ID on the resource.
   * @param options The options parameters.
   */
  renewLease(
    leaseId: string,
    options?: ContainerRenewLeaseOptionalParams
  ): Promise<ContainerRenewLeaseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      leaseId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      renewLeaseOperationSpec
    ) as Promise<ContainerRenewLeaseResponse>;
  }

  /**
   * [Update] establishes and manages a lock on a container for delete operations. The lock duration can
   * be 15 to 60 seconds, or can be infinite
   * @param options The options parameters.
   */
  breakLease(
    options?: ContainerBreakLeaseOptionalParams
  ): Promise<ContainerBreakLeaseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      breakLeaseOperationSpec
    ) as Promise<ContainerBreakLeaseResponse>;
  }

  /**
   * [Update] establishes and manages a lock on a container for delete operations. The lock duration can
   * be 15 to 60 seconds, or can be infinite
   * @param leaseId Specifies the current lease ID on the resource.
   * @param proposedLeaseId Proposed lease ID, in a GUID string format. The Blob service returns 400
   *                        (Invalid request) if the proposed lease ID is not in the correct format. See Guid Constructor
   *                        (String) for a list of valid GUID string formats.
   * @param options The options parameters.
   */
  changeLease(
    leaseId: string,
    proposedLeaseId: string,
    options?: ContainerChangeLeaseOptionalParams
  ): Promise<ContainerChangeLeaseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      leaseId,
      proposedLeaseId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      changeLeaseOperationSpec
    ) as Promise<ContainerChangeLeaseResponse>;
  }

  /**
   * [Update] The List Blobs operation returns a list of the blobs under the specified container
   * @param options The options parameters.
   */
  listBlobFlatSegment(
    options?: ContainerListBlobFlatSegmentOptionalParams
  ): Promise<ContainerListBlobFlatSegmentResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBlobFlatSegmentOperationSpec
    ) as Promise<ContainerListBlobFlatSegmentResponse>;
  }

  /**
   * [Update] The List Blobs operation returns a list of the blobs under the specified container
   * @param delimiter When the request includes this parameter, the operation returns a BlobPrefix
   *                  element in the response body that acts as a placeholder for all blobs whose names begin with the
   *                  same substring up to the appearance of the delimiter character. The delimiter may be a single
   *                  character or a string.
   * @param options The options parameters.
   */
  listBlobHierarchySegment(
    delimiter: string,
    options?: ContainerListBlobHierarchySegmentOptionalParams
  ): Promise<ContainerListBlobHierarchySegmentResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      delimiter,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBlobHierarchySegmentOperationSpec
    ) as Promise<ContainerListBlobHierarchySegmentResponse>;
  }

  /**
   * Returns the sku name and account kind
   * @param options The options parameters.
   */
  getAccountInfo(
    options?: coreHttp.OperationOptions
  ): Promise<ContainerGetAccountInfoResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getAccountInfoOperationSpec
    ) as Promise<ContainerGetAccountInfoResponse>;
  }

  /**
   * ListBlobFlatSegmentNext
   * @param nextLink The nextLink from the previous successful call to the ListBlobFlatSegment method.
   * @param options The options parameters.
   */
  listBlobFlatSegmentNext(
    nextLink: string,
    options?: ContainerListBlobFlatSegmentNextOptionalParams
  ): Promise<ContainerListBlobFlatSegmentNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBlobFlatSegmentNextOperationSpec
    ) as Promise<ContainerListBlobFlatSegmentNextResponse>;
  }

  /**
   * ListBlobHierarchySegmentNext
   * @param delimiter When the request includes this parameter, the operation returns a BlobPrefix
   *                  element in the response body that acts as a placeholder for all blobs whose names begin with the
   *                  same substring up to the appearance of the delimiter character. The delimiter may be a single
   *                  character or a string.
   * @param nextLink The nextLink from the previous successful call to the ListBlobHierarchySegment
   *                 method.
   * @param options The options parameters.
   */
  listBlobHierarchySegmentNext(
    delimiter: string,
    nextLink: string,
    options?: ContainerListBlobHierarchySegmentNextOptionalParams
  ): Promise<ContainerListBlobHierarchySegmentNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      delimiter,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBlobHierarchySegmentNextOperationSpec
    ) as Promise<ContainerListBlobHierarchySegmentNextResponse>;
  }
}
// Operation Specifications
const xmlSerializer = new coreHttp.Serializer(Mappers, /* isXml */ true);

const createOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.ContainerCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerCreateExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.restype2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.access,
    Parameters.defaultEncryptionScope,
    Parameters.preventEncryptionScopeOverride
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getPropertiesOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "GET",
  responses: {
    200: {
      headersMapper: Mappers.ContainerGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerGetPropertiesExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.restype2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId
  ],
  isXML: true,
  serializer: xmlSerializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "DELETE",
  responses: {
    202: {
      headersMapper: Mappers.ContainerDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerDeleteExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.restype2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setMetadataOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ContainerSetMetadataHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerSetMetadataExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp6
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.leaseId,
    Parameters.ifModifiedSince
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getAccessPolicyOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "SignedIdentifier" }
          }
        },
        serializedName: "SignedIdentifiers",
        xmlName: "SignedIdentifiers",
        xmlIsWrapped: true,
        xmlElementName: "SignedIdentifier"
      },
      headersMapper: Mappers.ContainerGetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerGetAccessPolicyExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp7
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setAccessPolicyOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ContainerSetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerSetAccessPolicyExceptionHeaders
    }
  },
  requestBody: Parameters.containerAcl,
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp7
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.version,
    Parameters.requestId,
    Parameters.access,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const restoreOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.ContainerRestoreHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerRestoreExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp8
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.deletedContainerName,
    Parameters.deletedContainerVersion
  ],
  isXML: true,
  serializer: xmlSerializer
};
const renameOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ContainerRenameHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerRenameExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp9
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.sourceContainerName,
    Parameters.sourceLeaseId
  ],
  isXML: true,
  serializer: xmlSerializer
};
const submitBatchOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: {
        type: { name: "Stream" },
        serializedName: "parsedResponse"
      },
      headersMapper: Mappers.ContainerSubmitBatchHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerSubmitBatchExceptionHeaders
    }
  },
  requestBody: Parameters.body,
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp4,
    Parameters.restype2
  ],
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
const acquireLeaseOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.ContainerAcquireLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerAcquireLeaseExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp10
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.action,
    Parameters.duration,
    Parameters.proposedLeaseId
  ],
  isXML: true,
  serializer: xmlSerializer
};
const releaseLeaseOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ContainerReleaseLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerReleaseLeaseExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp10
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.action1,
    Parameters.leaseId1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const renewLeaseOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ContainerRenewLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerRenewLeaseExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp10
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.leaseId1,
    Parameters.action2
  ],
  isXML: true,
  serializer: xmlSerializer
};
const breakLeaseOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    202: {
      headersMapper: Mappers.ContainerBreakLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerBreakLeaseExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp10
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.action3,
    Parameters.breakPeriod
  ],
  isXML: true,
  serializer: xmlSerializer
};
const changeLeaseOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ContainerChangeLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerChangeLeaseExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp10
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.leaseId1,
    Parameters.action4,
    Parameters.proposedLeaseId1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const listBlobFlatSegmentOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListBlobsFlatSegmentResponse,
      headersMapper: Mappers.ContainerListBlobFlatSegmentHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerListBlobFlatSegmentExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp2,
    Parameters.prefix,
    Parameters.marker,
    Parameters.maxPageSize,
    Parameters.restype2,
    Parameters.include1
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
const listBlobHierarchySegmentOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListBlobsHierarchySegmentResponse,
      headersMapper: Mappers.ContainerListBlobHierarchySegmentHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerListBlobHierarchySegmentExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp2,
    Parameters.prefix,
    Parameters.marker,
    Parameters.maxPageSize,
    Parameters.restype2,
    Parameters.include1,
    Parameters.delimiter
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
const getAccountInfoOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "GET",
  responses: {
    200: {
      headersMapper: Mappers.ContainerGetAccountInfoHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerGetAccountInfoExceptionHeaders
    }
  },
  queryParameters: [Parameters.comp, Parameters.restype1],
  urlParameters: [Parameters.url],
  headerParameters: [Parameters.version, Parameters.accept1],
  isXML: true,
  serializer: xmlSerializer
};
const listBlobFlatSegmentNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListBlobsFlatSegmentResponse,
      headersMapper: Mappers.ContainerListBlobFlatSegmentNextHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerListBlobFlatSegmentNextExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp2,
    Parameters.prefix,
    Parameters.marker,
    Parameters.maxPageSize,
    Parameters.restype2,
    Parameters.include1
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
const listBlobHierarchySegmentNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListBlobsHierarchySegmentResponse,
      headersMapper: Mappers.ContainerListBlobHierarchySegmentNextHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper:
        Mappers.ContainerListBlobHierarchySegmentNextExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp2,
    Parameters.prefix,
    Parameters.marker,
    Parameters.maxPageSize,
    Parameters.restype2,
    Parameters.include1,
    Parameters.delimiter
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

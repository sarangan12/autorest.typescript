import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageBlobContext } from "../storageBlobContext";
import {
  BlobDownloadOptionalParams,
  BlobDownloadResponse,
  BlobGetPropertiesOptionalParams,
  BlobGetPropertiesResponse,
  BlobDeleteOptionalParams,
  BlobDeleteResponse,
  BlobSetAccessControlOptionalParams,
  BlobSetAccessControlResponse,
  BlobGetAccessControlOptionalParams,
  BlobGetAccessControlResponse,
  BlobRenameOptionalParams,
  BlobRenameResponse,
  BlobUndeleteOptionalParams,
  BlobUndeleteResponse,
  BlobExpiryOptions,
  BlobSetExpiryOptionalParams,
  BlobSetExpiryResponse,
  BlobSetHttpHeadersOptionalParams,
  BlobSetHttpHeadersResponse,
  BlobSetMetadataOptionalParams,
  BlobSetMetadataResponse,
  BlobAcquireLeaseOptionalParams,
  BlobAcquireLeaseResponse,
  BlobReleaseLeaseOptionalParams,
  BlobReleaseLeaseResponse,
  BlobRenewLeaseOptionalParams,
  BlobRenewLeaseResponse,
  BlobChangeLeaseOptionalParams,
  BlobChangeLeaseResponse,
  BlobBreakLeaseOptionalParams,
  BlobBreakLeaseResponse,
  BlobCreateSnapshotOptionalParams,
  BlobCreateSnapshotResponse,
  BlobStartCopyFromURLOptionalParams,
  BlobStartCopyFromURLResponse,
  BlobCopyFromURLOptionalParams,
  BlobCopyFromURLResponse,
  BlobAbortCopyFromURLOptionalParams,
  BlobAbortCopyFromURLResponse,
  AccessTier,
  BlobSetTierOptionalParams,
  BlobSetTierResponse,
  BlobGetAccountInfoResponse,
  BlobQueryOptionalParams,
  BlobQueryResponse,
  BlobGetTagsOptionalParams,
  BlobGetTagsResponse,
  BlobSetTagsOptionalParams,
  BlobSetTagsResponse
} from "../models";

/** Class representing a Blob. */
export class Blob {
  private readonly client: StorageBlobContext;

  /**
   * Initialize a new instance of the class Blob class.
   * @param client Reference to the service client
   */
  constructor(client: StorageBlobContext) {
    this.client = client;
  }

  /**
   * The Download operation reads or downloads a blob from the system, including its metadata and
   * properties. You can also call Download to read a snapshot.
   * @param options The options parameters.
   */
  download(
    options?: BlobDownloadOptionalParams
  ): Promise<BlobDownloadResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      downloadOperationSpec
    ) as Promise<BlobDownloadResponse>;
  }

  /**
   * The Get Properties operation returns all user-defined metadata, standard HTTP properties, and system
   * properties for the blob. It does not return the content of the blob.
   * @param options The options parameters.
   */
  getProperties(
    options?: BlobGetPropertiesOptionalParams
  ): Promise<BlobGetPropertiesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getPropertiesOperationSpec
    ) as Promise<BlobGetPropertiesResponse>;
  }

  /**
   * If the storage account's soft delete feature is disabled then, when a blob is deleted, it is
   * permanently removed from the storage account. If the storage account's soft delete feature is
   * enabled, then, when a blob is deleted, it is marked for deletion and becomes inaccessible
   * immediately. However, the blob service retains the blob or snapshot for the number of days specified
   * by the DeleteRetentionPolicy section of [Storage service properties]
   * (Set-Blob-Service-Properties.md). After the specified number of days has passed, the blob's data is
   * permanently removed from the storage account. Note that you continue to be charged for the
   * soft-deleted blob's storage until it is permanently removed. Use the List Blobs API and specify the
   * "include=deleted" query parameter to discover which blobs and snapshots have been soft deleted. You
   * can then use the Undelete Blob API to restore a soft-deleted blob. All other operations on a
   * soft-deleted blob or snapshot causes the service to return an HTTP status code of 404
   * (ResourceNotFound).
   * @param options The options parameters.
   */
  delete(options?: BlobDeleteOptionalParams): Promise<BlobDeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<BlobDeleteResponse>;
  }

  /**
   * Set the owner, group, permissions, or access control list for a blob.
   * @param options The options parameters.
   */
  setAccessControl(
    options?: BlobSetAccessControlOptionalParams
  ): Promise<BlobSetAccessControlResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setAccessControlOperationSpec
    ) as Promise<BlobSetAccessControlResponse>;
  }

  /**
   * Get the owner, group, permissions, or access control list for a blob.
   * @param options The options parameters.
   */
  getAccessControl(
    options?: BlobGetAccessControlOptionalParams
  ): Promise<BlobGetAccessControlResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getAccessControlOperationSpec
    ) as Promise<BlobGetAccessControlResponse>;
  }

  /**
   * Rename a blob/file.  By default, the destination is overwritten and if the destination already
   * exists and has a lease the lease is broken.  This operation supports conditional HTTP requests.  For
   * more information, see [Specifying Conditional Headers for Blob Service
   * Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
   *  To fail if the destination already exists, use a conditional request with If-None-Match: "*".
   * @param renameSource The file or directory to be renamed. The value must have the following format:
   *                     "/{filesysystem}/{path}".  If "x-ms-properties" is specified, the properties will overwrite the
   *                     existing properties; otherwise, the existing properties will be preserved.
   * @param options The options parameters.
   */
  rename(
    renameSource: string,
    options?: BlobRenameOptionalParams
  ): Promise<BlobRenameResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      renameSource,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      renameOperationSpec
    ) as Promise<BlobRenameResponse>;
  }

  /**
   * Undelete a blob that was previously soft deleted
   * @param options The options parameters.
   */
  undelete(
    options?: BlobUndeleteOptionalParams
  ): Promise<BlobUndeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      undeleteOperationSpec
    ) as Promise<BlobUndeleteResponse>;
  }

  /**
   * Sets the time a blob will expire and be deleted.
   * @param expiryOptions Required. Indicates mode of the expiry time
   * @param options The options parameters.
   */
  setExpiry(
    expiryOptions: BlobExpiryOptions,
    options?: BlobSetExpiryOptionalParams
  ): Promise<BlobSetExpiryResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      expiryOptions,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setExpiryOperationSpec
    ) as Promise<BlobSetExpiryResponse>;
  }

  /**
   * The Set HTTP Headers operation sets system properties on the blob
   * @param options The options parameters.
   */
  setHttpHeaders(
    options?: BlobSetHttpHeadersOptionalParams
  ): Promise<BlobSetHttpHeadersResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setHttpHeadersOperationSpec
    ) as Promise<BlobSetHttpHeadersResponse>;
  }

  /**
   * The Set Blob Metadata operation sets user-defined metadata for the specified blob as one or more
   * name-value pairs
   * @param options The options parameters.
   */
  setMetadata(
    options?: BlobSetMetadataOptionalParams
  ): Promise<BlobSetMetadataResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setMetadataOperationSpec
    ) as Promise<BlobSetMetadataResponse>;
  }

  /**
   * [Update] The Lease Blob operation establishes and manages a lock on a blob for write and delete
   * operations
   * @param options The options parameters.
   */
  acquireLease(
    options?: BlobAcquireLeaseOptionalParams
  ): Promise<BlobAcquireLeaseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      acquireLeaseOperationSpec
    ) as Promise<BlobAcquireLeaseResponse>;
  }

  /**
   * [Update] The Lease Blob operation establishes and manages a lock on a blob for write and delete
   * operations
   * @param leaseId Specifies the current lease ID on the resource.
   * @param options The options parameters.
   */
  releaseLease(
    leaseId: string,
    options?: BlobReleaseLeaseOptionalParams
  ): Promise<BlobReleaseLeaseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      leaseId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      releaseLeaseOperationSpec
    ) as Promise<BlobReleaseLeaseResponse>;
  }

  /**
   * [Update] The Lease Blob operation establishes and manages a lock on a blob for write and delete
   * operations
   * @param leaseId Specifies the current lease ID on the resource.
   * @param options The options parameters.
   */
  renewLease(
    leaseId: string,
    options?: BlobRenewLeaseOptionalParams
  ): Promise<BlobRenewLeaseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      leaseId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      renewLeaseOperationSpec
    ) as Promise<BlobRenewLeaseResponse>;
  }

  /**
   * [Update] The Lease Blob operation establishes and manages a lock on a blob for write and delete
   * operations
   * @param leaseId Specifies the current lease ID on the resource.
   * @param proposedLeaseId Proposed lease ID, in a GUID string format. The Blob service returns 400
   *                        (Invalid request) if the proposed lease ID is not in the correct format. See Guid Constructor
   *                        (String) for a list of valid GUID string formats.
   * @param options The options parameters.
   */
  changeLease(
    leaseId: string,
    proposedLeaseId: string,
    options?: BlobChangeLeaseOptionalParams
  ): Promise<BlobChangeLeaseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      leaseId,
      proposedLeaseId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      changeLeaseOperationSpec
    ) as Promise<BlobChangeLeaseResponse>;
  }

  /**
   * [Update] The Lease Blob operation establishes and manages a lock on a blob for write and delete
   * operations
   * @param options The options parameters.
   */
  breakLease(
    options?: BlobBreakLeaseOptionalParams
  ): Promise<BlobBreakLeaseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      breakLeaseOperationSpec
    ) as Promise<BlobBreakLeaseResponse>;
  }

  /**
   * The Create Snapshot operation creates a read-only snapshot of a blob
   * @param options The options parameters.
   */
  createSnapshot(
    options?: BlobCreateSnapshotOptionalParams
  ): Promise<BlobCreateSnapshotResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createSnapshotOperationSpec
    ) as Promise<BlobCreateSnapshotResponse>;
  }

  /**
   * The Start Copy From URL operation copies a blob or an internet resource to a new blob.
   * @param copySource Specifies the name of the source page blob snapshot. This value is a URL of up to
   *                   2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it would
   *                   appear in a request URI. The source blob must either be public or must be authenticated via a shared
   *                   access signature.
   * @param options The options parameters.
   */
  startCopyFromURL(
    copySource: string,
    options?: BlobStartCopyFromURLOptionalParams
  ): Promise<BlobStartCopyFromURLResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      copySource,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      startCopyFromURLOperationSpec
    ) as Promise<BlobStartCopyFromURLResponse>;
  }

  /**
   * The Copy From URL operation copies a blob or an internet resource to a new blob. It will not return
   * a response until the copy is complete.
   * @param copySource Specifies the name of the source page blob snapshot. This value is a URL of up to
   *                   2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it would
   *                   appear in a request URI. The source blob must either be public or must be authenticated via a shared
   *                   access signature.
   * @param options The options parameters.
   */
  copyFromURL(
    copySource: string,
    options?: BlobCopyFromURLOptionalParams
  ): Promise<BlobCopyFromURLResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      copySource,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      copyFromURLOperationSpec
    ) as Promise<BlobCopyFromURLResponse>;
  }

  /**
   * The Abort Copy From URL operation aborts a pending Copy From URL operation, and leaves a destination
   * blob with zero length and full metadata.
   * @param copyId The copy identifier provided in the x-ms-copy-id header of the original Copy Blob
   *               operation.
   * @param options The options parameters.
   */
  abortCopyFromURL(
    copyId: string,
    options?: BlobAbortCopyFromURLOptionalParams
  ): Promise<BlobAbortCopyFromURLResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      copyId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      abortCopyFromURLOperationSpec
    ) as Promise<BlobAbortCopyFromURLResponse>;
  }

  /**
   * The Set Tier operation sets the tier on a blob. The operation is allowed on a page blob in a premium
   * storage account and on a block blob in a blob storage account (locally redundant storage only). A
   * premium page blob's tier determines the allowed size, IOPS, and bandwidth of the blob. A block
   * blob's tier determines Hot/Cool/Archive storage type. This operation does not update the blob's
   * ETag.
   * @param tier Indicates the tier to be set on the blob.
   * @param options The options parameters.
   */
  setTier(
    tier: AccessTier,
    options?: BlobSetTierOptionalParams
  ): Promise<BlobSetTierResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      tier,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setTierOperationSpec
    ) as Promise<BlobSetTierResponse>;
  }

  /**
   * Returns the sku name and account kind
   * @param options The options parameters.
   */
  getAccountInfo(
    options?: coreHttp.OperationOptions
  ): Promise<BlobGetAccountInfoResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getAccountInfoOperationSpec
    ) as Promise<BlobGetAccountInfoResponse>;
  }

  /**
   * The Query operation enables users to select/project on blob data by providing simple query
   * expressions.
   * @param options The options parameters.
   */
  query(options?: BlobQueryOptionalParams): Promise<BlobQueryResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      queryOperationSpec
    ) as Promise<BlobQueryResponse>;
  }

  /**
   * The Get Tags operation enables users to get the tags associated with a blob.
   * @param options The options parameters.
   */
  getTags(options?: BlobGetTagsOptionalParams): Promise<BlobGetTagsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getTagsOperationSpec
    ) as Promise<BlobGetTagsResponse>;
  }

  /**
   * The Set Tags operation enables users to set tags on a blob.
   * @param options The options parameters.
   */
  setTags(options?: BlobSetTagsOptionalParams): Promise<BlobSetTagsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setTagsOperationSpec
    ) as Promise<BlobSetTagsResponse>;
  }
}
// Operation Specifications
const xmlSerializer = new coreHttp.Serializer(Mappers, /* isXml */ true);

const downloadOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Stream" },
        serializedName: "parsedResponse"
      },
      headersMapper: Mappers.BlobDownloadHeaders
    },
    206: {
      bodyMapper: {
        type: { name: "Stream" },
        serializedName: "parsedResponse"
      },
      headersMapper: Mappers.BlobDownloadHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobDownloadExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.snapshot,
    Parameters.versionId
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.range,
    Parameters.rangeGetContentMD5,
    Parameters.rangeGetContentCRC64,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifTags
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getPropertiesOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.BlobGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobGetPropertiesExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.snapshot,
    Parameters.versionId
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifTags
  ],
  isXML: true,
  serializer: xmlSerializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "DELETE",
  responses: {
    202: {
      headersMapper: Mappers.BlobDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobDeleteExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.snapshot,
    Parameters.versionId,
    Parameters.blobDeleteType
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.deleteSnapshots
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setAccessControlOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "PATCH",
  responses: {
    200: {
      headersMapper: Mappers.BlobSetAccessControlHeaders
    },
    default: {
      bodyMapper: Mappers.DataLakeStorageError,
      headersMapper: Mappers.BlobSetAccessControlExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.action5],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.posixPermissions,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.owner,
    Parameters.group,
    Parameters.posixAcl
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getAccessControlOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.BlobGetAccessControlHeaders
    },
    default: {
      bodyMapper: Mappers.DataLakeStorageError,
      headersMapper: Mappers.BlobGetAccessControlExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.action6,
    Parameters.upn
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  isXML: true,
  serializer: xmlSerializer
};
const renameOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.BlobRenameHeaders
    },
    default: {
      bodyMapper: Mappers.DataLakeStorageError,
      headersMapper: Mappers.BlobRenameExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.pathRenameMode],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.sourceLeaseId,
    Parameters.directoryProperties,
    Parameters.posixPermissions,
    Parameters.posixUmask,
    Parameters.cacheControl,
    Parameters.contentType1,
    Parameters.contentEncoding,
    Parameters.contentLanguage,
    Parameters.contentDisposition,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.renameSource,
    Parameters.sourceIfModifiedSince,
    Parameters.sourceIfUnmodifiedSince,
    Parameters.sourceIfMatch,
    Parameters.sourceIfNoneMatch
  ],
  isXML: true,
  serializer: xmlSerializer
};
const undeleteOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.BlobUndeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobUndeleteExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp8],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setExpiryOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.BlobSetExpiryHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobSetExpiryExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp11],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.expiryOptions,
    Parameters.expiresOn
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setHttpHeadersOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.BlobSetHttpHeadersHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobSetHttpHeadersExceptionHeaders
    }
  },
  queryParameters: [Parameters.comp, Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.blobCacheControl,
    Parameters.blobContentType,
    Parameters.blobContentMD5,
    Parameters.blobContentEncoding,
    Parameters.blobContentLanguage,
    Parameters.blobContentDisposition
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setMetadataOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.BlobSetMetadataHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobSetMetadataExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp6],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifTags,
    Parameters.encryptionScope
  ],
  isXML: true,
  serializer: xmlSerializer
};
const acquireLeaseOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.BlobAcquireLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobAcquireLeaseExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp10],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.action,
    Parameters.duration,
    Parameters.proposedLeaseId,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags
  ],
  isXML: true,
  serializer: xmlSerializer
};
const releaseLeaseOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.BlobReleaseLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobReleaseLeaseExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp10],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.action1,
    Parameters.leaseId1,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags
  ],
  isXML: true,
  serializer: xmlSerializer
};
const renewLeaseOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.BlobRenewLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobRenewLeaseExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp10],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.leaseId1,
    Parameters.action2,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags
  ],
  isXML: true,
  serializer: xmlSerializer
};
const changeLeaseOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.BlobChangeLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobChangeLeaseExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp10],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.leaseId1,
    Parameters.action4,
    Parameters.proposedLeaseId1,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags
  ],
  isXML: true,
  serializer: xmlSerializer
};
const breakLeaseOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    202: {
      headersMapper: Mappers.BlobBreakLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobBreakLeaseExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp10],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.action3,
    Parameters.breakPeriod,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags
  ],
  isXML: true,
  serializer: xmlSerializer
};
const createSnapshotOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.BlobCreateSnapshotHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobCreateSnapshotExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp12],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifTags,
    Parameters.encryptionScope
  ],
  isXML: true,
  serializer: xmlSerializer
};
const startCopyFromURLOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    202: {
      headersMapper: Mappers.BlobStartCopyFromURLHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobStartCopyFromURLExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.sourceIfModifiedSince,
    Parameters.sourceIfUnmodifiedSince,
    Parameters.sourceIfMatch,
    Parameters.sourceIfNoneMatch,
    Parameters.ifTags,
    Parameters.tier,
    Parameters.rehydratePriority,
    Parameters.sourceIfTags,
    Parameters.copySource,
    Parameters.blobTagsString,
    Parameters.sealBlob
  ],
  isXML: true,
  serializer: xmlSerializer
};
const copyFromURLOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    202: {
      headersMapper: Mappers.BlobCopyFromURLHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobCopyFromURLExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.sourceIfModifiedSince,
    Parameters.sourceIfUnmodifiedSince,
    Parameters.sourceIfMatch,
    Parameters.sourceIfNoneMatch,
    Parameters.ifTags,
    Parameters.tier,
    Parameters.copySource,
    Parameters.blobTagsString,
    Parameters.xMsRequiresSync,
    Parameters.sourceContentMD5
  ],
  isXML: true,
  serializer: xmlSerializer
};
const abortCopyFromURLOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    204: {
      headersMapper: Mappers.BlobAbortCopyFromURLHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobAbortCopyFromURLExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp13,
    Parameters.copyId
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.copyActionAbortConstant
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setTierOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.BlobSetTierHeaders
    },
    202: {
      headersMapper: Mappers.BlobSetTierHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobSetTierExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.snapshot,
    Parameters.versionId,
    Parameters.comp14
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifTags,
    Parameters.rehydratePriority,
    Parameters.tier1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getAccountInfoOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "GET",
  responses: {
    200: {
      headersMapper: Mappers.BlobGetAccountInfoHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobGetAccountInfoExceptionHeaders
    }
  },
  queryParameters: [Parameters.comp, Parameters.restype1],
  urlParameters: [Parameters.url],
  headerParameters: [Parameters.version, Parameters.accept1],
  isXML: true,
  serializer: xmlSerializer
};
const queryOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Stream" },
        serializedName: "parsedResponse"
      },
      headersMapper: Mappers.BlobQueryHeaders
    },
    206: {
      bodyMapper: {
        type: { name: "Stream" },
        serializedName: "parsedResponse"
      },
      headersMapper: Mappers.BlobQueryHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobQueryExceptionHeaders
    }
  },
  requestBody: Parameters.queryRequest,
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.snapshot,
    Parameters.comp15
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.version,
    Parameters.requestId,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifTags
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getTagsOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BlobTags,
      headersMapper: Mappers.BlobGetTagsHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobGetTagsExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.snapshot,
    Parameters.versionId,
    Parameters.comp16
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifTags
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setTagsOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    204: {
      headersMapper: Mappers.BlobSetTagsHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlobSetTagsExceptionHeaders
    }
  },
  requestBody: Parameters.tags,
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.versionId,
    Parameters.comp16
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.version,
    Parameters.requestId,
    Parameters.leaseId,
    Parameters.ifTags,
    Parameters.transactionalContentMD5,
    Parameters.transactionalContentCrc64
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};

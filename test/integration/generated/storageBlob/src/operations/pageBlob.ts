import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageBlobContext } from "../storageBlobContext";
import {
  PageBlobCreateOptionalParams,
  PageBlobCreateResponse,
  PageBlobUploadPagesOptionalParams,
  PageBlobUploadPagesResponse,
  PageBlobClearPagesOptionalParams,
  PageBlobClearPagesResponse,
  PageBlobUploadPagesFromURLOptionalParams,
  PageBlobUploadPagesFromURLResponse,
  PageBlobGetPageRangesOptionalParams,
  PageBlobGetPageRangesResponse,
  PageBlobGetPageRangesDiffOptionalParams,
  PageBlobGetPageRangesDiffResponse,
  PageBlobResizeOptionalParams,
  PageBlobResizeResponse,
  SequenceNumberActionType,
  PageBlobUpdateSequenceNumberOptionalParams,
  PageBlobUpdateSequenceNumberResponse,
  PageBlobCopyIncrementalOptionalParams,
  PageBlobCopyIncrementalResponse
} from "../models";

/** Class representing a PageBlob. */
export class PageBlob {
  private readonly client: StorageBlobContext;

  /**
   * Initialize a new instance of the class PageBlob class.
   * @param client Reference to the service client
   */
  constructor(client: StorageBlobContext) {
    this.client = client;
  }

  /**
   * The Create operation creates a new page blob.
   * @param contentLength The length of the request.
   * @param blobContentLength This header specifies the maximum size for the page blob, up to 1 TB. The
   *                          page blob size must be aligned to a 512-byte boundary.
   * @param options The options parameters.
   */
  create(
    contentLength: number,
    blobContentLength: number,
    options?: PageBlobCreateOptionalParams
  ): Promise<PageBlobCreateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      contentLength,
      blobContentLength,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOperationSpec
    ) as Promise<PageBlobCreateResponse>;
  }

  /**
   * The Upload Pages operation writes a range of pages to a page blob
   * @param contentLength The length of the request.
   * @param body Initial data
   * @param options The options parameters.
   */
  uploadPages(
    contentLength: number,
    body: coreHttp.HttpRequestBody,
    options?: PageBlobUploadPagesOptionalParams
  ): Promise<PageBlobUploadPagesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      contentLength,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      uploadPagesOperationSpec
    ) as Promise<PageBlobUploadPagesResponse>;
  }

  /**
   * The Clear Pages operation clears a set of pages from a page blob
   * @param contentLength The length of the request.
   * @param options The options parameters.
   */
  clearPages(
    contentLength: number,
    options?: PageBlobClearPagesOptionalParams
  ): Promise<PageBlobClearPagesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      contentLength,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      clearPagesOperationSpec
    ) as Promise<PageBlobClearPagesResponse>;
  }

  /**
   * The Upload Pages operation writes a range of pages to a page blob where the contents are read from a
   * URL
   * @param sourceUrl Specify a URL to the copy source.
   * @param sourceRange Bytes of source data in the specified range. The length of this range should
   *                    match the ContentLength header and x-ms-range/Range destination range header.
   * @param contentLength The length of the request.
   * @param range The range of bytes to which the source range would be written. The range should be 512
   *              aligned and range-end is required.
   * @param options The options parameters.
   */
  uploadPagesFromURL(
    sourceUrl: string,
    sourceRange: string,
    contentLength: number,
    range: string,
    options?: PageBlobUploadPagesFromURLOptionalParams
  ): Promise<PageBlobUploadPagesFromURLResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      sourceUrl,
      sourceRange,
      contentLength,
      range,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      uploadPagesFromURLOperationSpec
    ) as Promise<PageBlobUploadPagesFromURLResponse>;
  }

  /**
   * The Get Page Ranges operation returns the list of valid page ranges for a page blob or snapshot of a
   * page blob
   * @param options The options parameters.
   */
  getPageRanges(
    options?: PageBlobGetPageRangesOptionalParams
  ): Promise<PageBlobGetPageRangesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getPageRangesOperationSpec
    ) as Promise<PageBlobGetPageRangesResponse>;
  }

  /**
   * The Get Page Ranges Diff operation returns the list of valid page ranges for a page blob that were
   * changed between target blob and previous snapshot.
   * @param options The options parameters.
   */
  getPageRangesDiff(
    options?: PageBlobGetPageRangesDiffOptionalParams
  ): Promise<PageBlobGetPageRangesDiffResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getPageRangesDiffOperationSpec
    ) as Promise<PageBlobGetPageRangesDiffResponse>;
  }

  /**
   * Resize the Blob
   * @param blobContentLength This header specifies the maximum size for the page blob, up to 1 TB. The
   *                          page blob size must be aligned to a 512-byte boundary.
   * @param options The options parameters.
   */
  resize(
    blobContentLength: number,
    options?: PageBlobResizeOptionalParams
  ): Promise<PageBlobResizeResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      blobContentLength,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      resizeOperationSpec
    ) as Promise<PageBlobResizeResponse>;
  }

  /**
   * Update the sequence number of the blob
   * @param sequenceNumberAction Required if the x-ms-blob-sequence-number header is set for the request.
   *                             This property applies to page blobs only. This property indicates how the service should modify the
   *                             blob's sequence number
   * @param options The options parameters.
   */
  updateSequenceNumber(
    sequenceNumberAction: SequenceNumberActionType,
    options?: PageBlobUpdateSequenceNumberOptionalParams
  ): Promise<PageBlobUpdateSequenceNumberResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      sequenceNumberAction,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateSequenceNumberOperationSpec
    ) as Promise<PageBlobUpdateSequenceNumberResponse>;
  }

  /**
   * The Copy Incremental operation copies a snapshot of the source page blob to a destination page blob.
   * The snapshot is copied such that only the differential changes between the previously copied
   * snapshot are transferred to the destination. The copied snapshots are complete copies of the
   * original snapshot and can be read or copied from as usual. This API is supported since REST version
   * 2016-05-31.
   * @param copySource Specifies the name of the source page blob snapshot. This value is a URL of up to
   *                   2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it would
   *                   appear in a request URI. The source blob must either be public or must be authenticated via a shared
   *                   access signature.
   * @param options The options parameters.
   */
  copyIncremental(
    copySource: string,
    options?: PageBlobCopyIncrementalOptionalParams
  ): Promise<PageBlobCopyIncrementalResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      copySource,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      copyIncrementalOperationSpec
    ) as Promise<PageBlobCopyIncrementalResponse>;
  }
}
// Operation Specifications
const xmlSerializer = new coreHttp.Serializer(Mappers, /* isXml */ true);

const createOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.PageBlobCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobCreateExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.contentLength,
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
    Parameters.blobCacheControl,
    Parameters.blobContentType,
    Parameters.blobContentMD5,
    Parameters.blobContentEncoding,
    Parameters.blobContentLanguage,
    Parameters.blobContentDisposition,
    Parameters.encryptionScope,
    Parameters.tier,
    Parameters.blobTagsString,
    Parameters.blobType,
    Parameters.blobContentLength,
    Parameters.blobSequenceNumber
  ],
  isXML: true,
  serializer: xmlSerializer
};
const uploadPagesOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.PageBlobUploadPagesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobUploadPagesExceptionHeaders
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp17],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.contentLength,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.range,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifTags,
    Parameters.encryptionScope,
    Parameters.transactionalContentMD5,
    Parameters.transactionalContentCrc64,
    Parameters.contentType2,
    Parameters.accept2,
    Parameters.pageWrite,
    Parameters.ifSequenceNumberLessThanOrEqualTo,
    Parameters.ifSequenceNumberLessThan,
    Parameters.ifSequenceNumberEqualTo
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "binary",
  serializer: xmlSerializer
};
const clearPagesOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.PageBlobClearPagesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobClearPagesExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp17],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.contentLength,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.range,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifTags,
    Parameters.encryptionScope,
    Parameters.ifSequenceNumberLessThanOrEqualTo,
    Parameters.ifSequenceNumberLessThan,
    Parameters.ifSequenceNumberEqualTo,
    Parameters.pageWrite1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const uploadPagesFromURLOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.PageBlobUploadPagesFromURLHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobUploadPagesFromURLExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp17],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.contentLength,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.sourceIfModifiedSince,
    Parameters.sourceIfUnmodifiedSince,
    Parameters.sourceIfMatch,
    Parameters.sourceIfNoneMatch,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifTags,
    Parameters.encryptionScope,
    Parameters.sourceContentMD5,
    Parameters.pageWrite,
    Parameters.ifSequenceNumberLessThanOrEqualTo,
    Parameters.ifSequenceNumberLessThan,
    Parameters.ifSequenceNumberEqualTo,
    Parameters.sourceUrl,
    Parameters.sourceRange,
    Parameters.sourceContentCrc64,
    Parameters.range1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getPageRangesOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageList,
      headersMapper: Mappers.PageBlobGetPageRangesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobGetPageRangesExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.snapshot,
    Parameters.comp18
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
    Parameters.ifTags
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getPageRangesDiffOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageList,
      headersMapper: Mappers.PageBlobGetPageRangesDiffHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobGetPageRangesDiffExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.snapshot,
    Parameters.comp18,
    Parameters.prevsnapshot
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
    Parameters.ifTags,
    Parameters.prevSnapshotUrl
  ],
  isXML: true,
  serializer: xmlSerializer
};
const resizeOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.PageBlobResizeHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobResizeExceptionHeaders
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
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifTags,
    Parameters.encryptionScope,
    Parameters.blobContentLength
  ],
  isXML: true,
  serializer: xmlSerializer
};
const updateSequenceNumberOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.PageBlobUpdateSequenceNumberHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobUpdateSequenceNumberExceptionHeaders
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
    Parameters.blobSequenceNumber,
    Parameters.sequenceNumberAction
  ],
  isXML: true,
  serializer: xmlSerializer
};
const copyIncrementalOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    202: {
      headersMapper: Mappers.PageBlobCopyIncrementalHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PageBlobCopyIncrementalExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp19],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.copySource
  ],
  isXML: true,
  serializer: xmlSerializer
};

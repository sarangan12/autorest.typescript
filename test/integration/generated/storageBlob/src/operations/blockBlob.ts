import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageBlobContext } from "../storageBlobContext";
import {
  BlockBlobUploadOptionalParams,
  BlockBlobUploadResponse,
  BlockBlobPutBlobFromUrlOptionalParams,
  BlockBlobPutBlobFromUrlResponse,
  BlockBlobStageBlockOptionalParams,
  BlockBlobStageBlockResponse,
  BlockBlobStageBlockFromURLOptionalParams,
  BlockBlobStageBlockFromURLResponse,
  BlockLookupList,
  BlockBlobCommitBlockListOptionalParams,
  BlockBlobCommitBlockListResponse,
  BlockListType,
  BlockBlobGetBlockListOptionalParams,
  BlockBlobGetBlockListResponse
} from "../models";

/** Class representing a BlockBlob. */
export class BlockBlob {
  private readonly client: StorageBlobContext;

  /**
   * Initialize a new instance of the class BlockBlob class.
   * @param client Reference to the service client
   */
  constructor(client: StorageBlobContext) {
    this.client = client;
  }

  /**
   * The Upload Block Blob operation updates the content of an existing block blob. Updating an existing
   * block blob overwrites any existing metadata on the blob. Partial updates are not supported with Put
   * Blob; the content of the existing blob is overwritten with the content of the new blob. To perform a
   * partial update of the content of a block blob, use the Put Block List operation.
   * @param contentLength The length of the request.
   * @param body Initial data
   * @param options The options parameters.
   */
  upload(
    contentLength: number,
    body: coreHttp.HttpRequestBody,
    options?: BlockBlobUploadOptionalParams
  ): Promise<BlockBlobUploadResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      contentLength,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      uploadOperationSpec
    ) as Promise<BlockBlobUploadResponse>;
  }

  /**
   * The Put Blob from URL operation creates a new Block Blob where the contents of the blob are read
   * from a given URL.  This API is supported beginning with the 2020-04-08 version. Partial updates are
   * not supported with Put Blob from URL; the content of an existing blob is overwritten with the
   * content of the new blob.  To perform partial updates to a block blob’s contents using a source URL,
   * use the Put Block from URL API in conjunction with Put Block List.
   * @param contentLength The length of the request.
   * @param copySource Specifies the name of the source page blob snapshot. This value is a URL of up to
   *                   2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it would
   *                   appear in a request URI. The source blob must either be public or must be authenticated via a shared
   *                   access signature.
   * @param options The options parameters.
   */
  putBlobFromUrl(
    contentLength: number,
    copySource: string,
    options?: BlockBlobPutBlobFromUrlOptionalParams
  ): Promise<BlockBlobPutBlobFromUrlResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      contentLength,
      copySource,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putBlobFromUrlOperationSpec
    ) as Promise<BlockBlobPutBlobFromUrlResponse>;
  }

  /**
   * The Stage Block operation creates a new block to be committed as part of a blob
   * @param blockId A valid Base64 string value that identifies the block. Prior to encoding, the string
   *                must be less than or equal to 64 bytes in size. For a given blob, the length of the value specified
   *                for the blockid parameter must be the same size for each block.
   * @param contentLength The length of the request.
   * @param body Initial data
   * @param options The options parameters.
   */
  stageBlock(
    blockId: string,
    contentLength: number,
    body: coreHttp.HttpRequestBody,
    options?: BlockBlobStageBlockOptionalParams
  ): Promise<BlockBlobStageBlockResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      blockId,
      contentLength,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      stageBlockOperationSpec
    ) as Promise<BlockBlobStageBlockResponse>;
  }

  /**
   * The Stage Block operation creates a new block to be committed as part of a blob where the contents
   * are read from a URL.
   * @param blockId A valid Base64 string value that identifies the block. Prior to encoding, the string
   *                must be less than or equal to 64 bytes in size. For a given blob, the length of the value specified
   *                for the blockid parameter must be the same size for each block.
   * @param contentLength The length of the request.
   * @param sourceUrl Specify a URL to the copy source.
   * @param options The options parameters.
   */
  stageBlockFromURL(
    blockId: string,
    contentLength: number,
    sourceUrl: string,
    options?: BlockBlobStageBlockFromURLOptionalParams
  ): Promise<BlockBlobStageBlockFromURLResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      blockId,
      contentLength,
      sourceUrl,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      stageBlockFromURLOperationSpec
    ) as Promise<BlockBlobStageBlockFromURLResponse>;
  }

  /**
   * The Commit Block List operation writes a blob by specifying the list of block IDs that make up the
   * blob. In order to be written as part of a blob, a block must have been successfully written to the
   * server in a prior Put Block operation. You can call Put Block List to update a blob by uploading
   * only those blocks that have changed, then committing the new and existing blocks together. You can
   * do this by specifying whether to commit a block from the committed block list or from the
   * uncommitted block list, or to commit the most recently uploaded version of the block, whichever list
   * it may belong to.
   * @param blocks
   * @param options The options parameters.
   */
  commitBlockList(
    blocks: BlockLookupList,
    options?: BlockBlobCommitBlockListOptionalParams
  ): Promise<BlockBlobCommitBlockListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      blocks,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      commitBlockListOperationSpec
    ) as Promise<BlockBlobCommitBlockListResponse>;
  }

  /**
   * The Get Block List operation retrieves the list of blocks that have been uploaded as part of a block
   * blob
   * @param listType Specifies whether to return the list of committed blocks, the list of uncommitted
   *                 blocks, or both lists together.
   * @param options The options parameters.
   */
  getBlockList(
    listType: BlockListType,
    options?: BlockBlobGetBlockListOptionalParams
  ): Promise<BlockBlobGetBlockListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      listType,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getBlockListOperationSpec
    ) as Promise<BlockBlobGetBlockListResponse>;
  }
}
// Operation Specifications
const xmlSerializer = new coreHttp.Serializer(Mappers, /* isXml */ true);

const uploadOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.BlockBlobUploadHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlockBlobUploadExceptionHeaders
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
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
    Parameters.transactionalContentMD5,
    Parameters.contentType2,
    Parameters.accept2,
    Parameters.blobType2
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "binary",
  serializer: xmlSerializer
};
const putBlobFromUrlOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.BlockBlobPutBlobFromUrlHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlockBlobPutBlobFromUrlExceptionHeaders
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
    Parameters.sourceIfModifiedSince,
    Parameters.sourceIfUnmodifiedSince,
    Parameters.sourceIfMatch,
    Parameters.sourceIfNoneMatch,
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
    Parameters.sourceIfTags,
    Parameters.copySource,
    Parameters.blobTagsString,
    Parameters.sourceContentMD5,
    Parameters.transactionalContentMD5,
    Parameters.blobType2,
    Parameters.copySourceBlobProperties
  ],
  isXML: true,
  serializer: xmlSerializer
};
const stageBlockOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.BlockBlobStageBlockHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlockBlobStageBlockExceptionHeaders
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp22,
    Parameters.blockId
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.contentLength,
    Parameters.leaseId,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.encryptionScope,
    Parameters.transactionalContentMD5,
    Parameters.transactionalContentCrc64,
    Parameters.contentType2,
    Parameters.accept2
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "binary",
  serializer: xmlSerializer
};
const stageBlockFromURLOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.BlockBlobStageBlockFromURLHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlockBlobStageBlockFromURLExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp22,
    Parameters.blockId
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.contentLength,
    Parameters.leaseId,
    Parameters.sourceIfModifiedSince,
    Parameters.sourceIfUnmodifiedSince,
    Parameters.sourceIfMatch,
    Parameters.sourceIfNoneMatch,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.encryptionScope,
    Parameters.sourceContentMD5,
    Parameters.sourceUrl,
    Parameters.sourceContentCrc64,
    Parameters.sourceRange1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const commitBlockListOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.BlockBlobCommitBlockListHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlockBlobCommitBlockListExceptionHeaders
    }
  },
  requestBody: Parameters.blocks,
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp23],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.version,
    Parameters.requestId,
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
    Parameters.transactionalContentMD5,
    Parameters.transactionalContentCrc64
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getBlockListOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BlockList,
      headersMapper: Mappers.BlockBlobGetBlockListHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlockBlobGetBlockListExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.snapshot,
    Parameters.comp23,
    Parameters.listType
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

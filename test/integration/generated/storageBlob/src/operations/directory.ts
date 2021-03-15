import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageBlobContext } from "../storageBlobContext";
import {
  DirectoryCreateOptionalParams,
  DirectoryCreateResponse,
  DirectoryRenameOptionalParams,
  DirectoryRenameResponse,
  DirectoryDeleteOptionalParams,
  DirectoryDeleteResponse,
  DirectorySetAccessControlOptionalParams,
  DirectorySetAccessControlResponse,
  DirectoryGetAccessControlOptionalParams,
  DirectoryGetAccessControlResponse
} from "../models";

/** Class representing a Directory. */
export class Directory {
  private readonly client: StorageBlobContext;

  /**
   * Initialize a new instance of the class Directory class.
   * @param client Reference to the service client
   */
  constructor(client: StorageBlobContext) {
    this.client = client;
  }

  /**
   * Create a directory. By default, the destination is overwritten and if the destination already exists
   * and has a lease the lease is broken. This operation supports conditional HTTP requests.  For more
   * information, see [Specifying Conditional Headers for Blob Service
   * Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
   *  To fail if the destination already exists, use a conditional request with If-None-Match: "*".
   * @param options The options parameters.
   */
  create(
    options?: DirectoryCreateOptionalParams
  ): Promise<DirectoryCreateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOperationSpec
    ) as Promise<DirectoryCreateResponse>;
  }

  /**
   * Rename a directory. By default, the destination is overwritten and if the destination already exists
   * and has a lease the lease is broken. This operation supports conditional HTTP requests. For more
   * information, see [Specifying Conditional Headers for Blob Service
   * Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
   * To fail if the destination already exists, use a conditional request with If-None-Match: "*".
   * @param renameSource The file or directory to be renamed. The value must have the following format:
   *                     "/{filesysystem}/{path}".  If "x-ms-properties" is specified, the properties will overwrite the
   *                     existing properties; otherwise, the existing properties will be preserved.
   * @param options The options parameters.
   */
  rename(
    renameSource: string,
    options?: DirectoryRenameOptionalParams
  ): Promise<DirectoryRenameResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      renameSource,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      renameOperationSpec
    ) as Promise<DirectoryRenameResponse>;
  }

  /**
   * Deletes the directory
   * @param recursiveDirectoryDelete If "true", all paths beneath the directory will be deleted. If
   *                                 "false" and the directory is non-empty, an error occurs.
   * @param options The options parameters.
   */
  delete(
    recursiveDirectoryDelete: boolean,
    options?: DirectoryDeleteOptionalParams
  ): Promise<DirectoryDeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      recursiveDirectoryDelete,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<DirectoryDeleteResponse>;
  }

  /**
   * Set the owner, group, permissions, or access control list for a directory.
   * @param options The options parameters.
   */
  setAccessControl(
    options?: DirectorySetAccessControlOptionalParams
  ): Promise<DirectorySetAccessControlResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setAccessControlOperationSpec
    ) as Promise<DirectorySetAccessControlResponse>;
  }

  /**
   * Get the owner, group, permissions, or access control list for a directory.
   * @param options The options parameters.
   */
  getAccessControl(
    options?: DirectoryGetAccessControlOptionalParams
  ): Promise<DirectoryGetAccessControlResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getAccessControlOperationSpec
    ) as Promise<DirectoryGetAccessControlResponse>;
  }
}
// Operation Specifications
const xmlSerializer = new coreHttp.Serializer(Mappers, /* isXml */ true);

const createOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.DirectoryCreateHeaders
    },
    default: {
      bodyMapper: Mappers.DataLakeStorageError,
      headersMapper: Mappers.DirectoryCreateExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.resource],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.directoryProperties,
    Parameters.posixPermissions,
    Parameters.posixUmask,
    Parameters.cacheControl,
    Parameters.contentType1,
    Parameters.contentEncoding,
    Parameters.contentLanguage,
    Parameters.contentDisposition,
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
      headersMapper: Mappers.DirectoryRenameHeaders
    },
    default: {
      bodyMapper: Mappers.DataLakeStorageError,
      headersMapper: Mappers.DirectoryRenameExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.marker1,
    Parameters.pathRenameMode
  ],
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
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.DirectoryDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.DataLakeStorageError,
      headersMapper: Mappers.DirectoryDeleteExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.marker1,
    Parameters.recursiveDirectoryDelete
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
const setAccessControlOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "PATCH",
  responses: {
    200: {
      headersMapper: Mappers.DirectorySetAccessControlHeaders
    },
    default: {
      bodyMapper: Mappers.DataLakeStorageError,
      headersMapper: Mappers.DirectorySetAccessControlExceptionHeaders
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
      headersMapper: Mappers.DirectoryGetAccessControlHeaders
    },
    default: {
      bodyMapper: Mappers.DataLakeStorageError,
      headersMapper: Mappers.DirectoryGetAccessControlExceptionHeaders
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

import * as coreHttp from "@azure/core-http";

/** Storage Service Properties. */
export interface BlobServiceProperties {
  /** Azure Analytics Logging settings. */
  blobAnalyticsLogging?: Logging;
  /** a summary of request statistics grouped by API in hour or minute aggregates for blobs */
  hourMetrics?: Metrics;
  /** a summary of request statistics grouped by API in hour or minute aggregates for blobs */
  minuteMetrics?: Metrics;
  /** The set of CORS rules. */
  cors?: CorsRule[];
  /** The default version to use for requests to the Blob service if an incoming request's version is not specified. Possible values include version 2008-10-27 and all more recent versions */
  defaultServiceVersion?: string;
  /** the retention policy which determines how long the associated data should persist */
  deleteRetentionPolicy?: RetentionPolicy;
  /** The properties that enable an account to host a static website */
  staticWebsite?: StaticWebsite;
}

/** Azure Analytics Logging settings. */
export interface Logging {
  /** The version of Storage Analytics to configure. */
  version: string;
  /** Indicates whether all delete requests should be logged. */
  delete: boolean;
  /** Indicates whether all read requests should be logged. */
  read: boolean;
  /** Indicates whether all write requests should be logged. */
  write: boolean;
  /** the retention policy which determines how long the associated data should persist */
  retentionPolicy: RetentionPolicy;
}

/** the retention policy which determines how long the associated data should persist */
export interface RetentionPolicy {
  /** Indicates whether a retention policy is enabled for the storage service */
  enabled: boolean;
  /** Indicates the number of days that metrics or logging or soft-deleted data should be retained. All data older than this value will be deleted */
  days?: number;
}

/** a summary of request statistics grouped by API in hour or minute aggregates for blobs */
export interface Metrics {
  /** The version of Storage Analytics to configure. */
  version?: string;
  /** Indicates whether metrics are enabled for the Blob service. */
  enabled: boolean;
  /** Indicates whether metrics should generate summary statistics for called API operations. */
  includeAPIs?: boolean;
  /** the retention policy which determines how long the associated data should persist */
  retentionPolicy?: RetentionPolicy;
}

/** CORS is an HTTP feature that enables a web application running under one domain to access resources in another domain. Web browsers implement a security restriction known as same-origin policy that prevents a web page from calling APIs in a different domain; CORS provides a secure way to allow one domain (the origin domain) to call APIs in another domain */
export interface CorsRule {
  /** The origin domains that are permitted to make a request against the storage service via CORS. The origin domain is the domain from which the request originates. Note that the origin must be an exact case-sensitive match with the origin that the user age sends to the service. You can also use the wildcard character '*' to allow all origin domains to make requests via CORS. */
  allowedOrigins: string;
  /** The methods (HTTP request verbs) that the origin domain may use for a CORS request. (comma separated) */
  allowedMethods: string;
  /** the request headers that the origin domain may specify on the CORS request. */
  allowedHeaders: string;
  /** The response headers that may be sent in the response to the CORS request and exposed by the browser to the request issuer */
  exposedHeaders: string;
  /** The maximum amount time that a browser should cache the preflight OPTIONS request. */
  maxAgeInSeconds: number;
}

/** The properties that enable an account to host a static website */
export interface StaticWebsite {
  /** Indicates whether this account is hosting a static website */
  enabled: boolean;
  /** The default name of the index page under each directory */
  indexDocument?: string;
  /** The absolute path of the custom 404 page */
  errorDocument404Path?: string;
  /** Absolute path of the default index page */
  defaultIndexDocumentPath?: string;
}

export interface StorageError {
  message?: string;
  code?: string;
}

/** Stats for the storage service. */
export interface BlobServiceStatistics {
  /** Geo-Replication information for the Secondary Storage Service */
  geoReplication?: GeoReplication;
}

/** Geo-Replication information for the Secondary Storage Service */
export interface GeoReplication {
  /** The status of the secondary location */
  status: GeoReplicationStatusType;
  /** A GMT date/time value, to the second. All primary writes preceding this value are guaranteed to be available for read operations at the secondary. Primary writes after this point in time may or may not be available for reads. */
  lastSyncOn: Date;
}

/** An enumeration of containers */
export interface ListContainersSegmentResponse {
  serviceEndpoint: string;
  prefix?: string;
  marker?: string;
  maxPageSize?: number;
  containerItems: ContainerItem[];
  continuationToken?: string;
}

/** An Azure Storage container */
export interface ContainerItem {
  name: string;
  deleted?: boolean;
  version?: string;
  /** Properties of a container */
  properties: ContainerProperties;
  /** Dictionary of <string> */
  metadata?: { [propertyName: string]: string };
}

/** Properties of a container */
export interface ContainerProperties {
  lastModified: Date;
  etag: string;
  leaseStatus?: LeaseStatusType;
  leaseState?: LeaseStateType;
  leaseDuration?: LeaseDurationType;
  publicAccess?: PublicAccessType;
  hasImmutabilityPolicy?: boolean;
  hasLegalHold?: boolean;
  defaultEncryptionScope?: string;
  preventEncryptionScopeOverride?: boolean;
  deletedOn?: Date;
  remainingRetentionDays?: number;
}

/** Key information */
export interface KeyInfo {
  /** The date-time the key is active in ISO 8601 UTC time */
  startsOn: string;
  /** The date-time the key expires in ISO 8601 UTC time */
  expiresOn: string;
}

/** A user delegation key */
export interface UserDelegationKey {
  /** The Azure Active Directory object ID in GUID format. */
  signedObjectId: string;
  /** The Azure Active Directory tenant ID in GUID format */
  signedTenantId: string;
  /** The date-time the key is active */
  signedStartsOn: Date;
  /** The date-time the key expires */
  signedExpiresOn: Date;
  /** Abbreviation of the Azure Storage service that accepts the key */
  signedService: string;
  /** The service version that created the key */
  signedVersion: string;
  /** The key as a base64 string */
  value: string;
}

/** The result of a Filter Blobs API call */
export interface FilterBlobSegment {
  serviceEndpoint: string;
  where: string;
  blobs: FilterBlobItem[];
  continuationToken?: string;
}

/** Blob info from a Filter Blobs API call */
export interface FilterBlobItem {
  name: string;
  containerName: string;
  /** Blob tags */
  tags?: BlobTags;
}

/** Blob tags */
export interface BlobTags {
  blobTagSet: BlobTag[];
}

export interface BlobTag {
  key: string;
  value: string;
}

/** signed identifier */
export interface SignedIdentifier {
  /** a unique id */
  id: string;
  /** An Access policy */
  accessPolicy: AccessPolicy;
}

/** An Access policy */
export interface AccessPolicy {
  /** the date-time the policy is active */
  startsOn?: Date;
  /** the date-time the policy expires */
  expiresOn?: Date;
  /** the permissions for the acl policy */
  permissions?: string;
}

/** An enumeration of blobs */
export interface ListBlobsFlatSegmentResponse {
  serviceEndpoint: string;
  containerName: string;
  prefix?: string;
  marker?: string;
  maxPageSize?: number;
  segment: BlobFlatListSegment;
  continuationToken?: string;
}

export interface BlobFlatListSegment {
  blobItems: BlobItemInternal[];
}

/** An Azure Storage blob */
export interface BlobItemInternal {
  name: string;
  deleted: boolean;
  snapshot: string;
  versionId?: string;
  isCurrentVersion?: boolean;
  /** Properties of a blob */
  properties: BlobPropertiesInternal;
  /** Dictionary of <string> */
  metadata?: { [propertyName: string]: string };
  /** Blob tags */
  blobTags?: BlobTags;
  /** Dictionary of <string> */
  objectReplicationMetadata?: { [propertyName: string]: string };
}

/** Properties of a blob */
export interface BlobPropertiesInternal {
  createdOn?: Date;
  lastModified: Date;
  etag: string;
  /** Size in bytes */
  contentLength?: number;
  contentType?: string;
  contentEncoding?: string;
  contentLanguage?: string;
  contentMD5?: Uint8Array;
  contentDisposition?: string;
  cacheControl?: string;
  blobSequenceNumber?: number;
  blobType?: BlobType;
  leaseStatus?: LeaseStatusType;
  leaseState?: LeaseStateType;
  leaseDuration?: LeaseDurationType;
  copyId?: string;
  copyStatus?: CopyStatusType;
  copySource?: string;
  copyProgress?: string;
  copyCompletedOn?: Date;
  copyStatusDescription?: string;
  serverEncrypted?: boolean;
  incrementalCopy?: boolean;
  destinationSnapshot?: string;
  deletedOn?: Date;
  remainingRetentionDays?: number;
  accessTier?: AccessTier;
  accessTierInferred?: boolean;
  archiveStatus?: ArchiveStatus;
  customerProvidedKeySha256?: string;
  /** The name of the encryption scope under which the blob is encrypted. */
  encryptionScope?: string;
  accessTierChangedOn?: Date;
  tagCount?: number;
  expiresOn?: Date;
  isSealed?: boolean;
  /** If an object is in rehydrate pending state then this header is returned with priority of rehydrate. Valid values are High and Standard. */
  rehydratePriority?: RehydratePriority;
  lastAccessedOn?: Date;
}

/** An enumeration of blobs */
export interface ListBlobsHierarchySegmentResponse {
  serviceEndpoint: string;
  containerName: string;
  prefix?: string;
  marker?: string;
  maxPageSize?: number;
  delimiter?: string;
  segment: BlobHierarchyListSegment;
  continuationToken?: string;
}

export interface BlobHierarchyListSegment {
  blobPrefixes?: BlobPrefix[];
  blobItems: BlobItemInternal[];
}

export interface BlobPrefix {
  name: string;
}

export interface DataLakeStorageError {
  /** The service error response object. */
  dataLakeStorageErrorDetails?: DataLakeStorageErrorError;
}

/** The service error response object. */
export interface DataLakeStorageErrorError {
  /** The service error code. */
  code?: string;
  /** The service error message. */
  message?: string;
}

export interface BlockLookupList {
  committed?: string[];
  uncommitted?: string[];
  latest?: string[];
}

export interface BlockList {
  committedBlocks?: Block[];
  uncommittedBlocks?: Block[];
}

/** Represents a single block in a block blob.  It describes the block's ID and size. */
export interface Block {
  /** The base64 encoded block ID. */
  name: string;
  /** The block size in bytes. */
  size: number;
}

/** the list of pages */
export interface PageList {
  pageRange?: PageRange[];
  clearRange?: ClearRange[];
}

export interface PageRange {
  start: number;
  end: number;
}

export interface ClearRange {
  start: number;
  end: number;
}

/** the quick query body */
export interface QueryRequest {
  /** the query type */
  queryType: "SQL";
  /** a query statement */
  expression: string;
  inputSerialization?: QuerySerialization;
  outputSerialization?: QuerySerialization;
}

export interface QuerySerialization {
  format: QueryFormat;
}

export interface QueryFormat {
  /** The quick query format type. */
  type?: QueryFormatType;
  /** delimited text configuration */
  delimitedTextConfiguration?: DelimitedTextConfiguration;
  /** json text configuration */
  jsonTextConfiguration?: JsonTextConfiguration;
  /** arrow configuration */
  arrowConfiguration?: ArrowConfiguration;
}

/** delimited text configuration */
export interface DelimitedTextConfiguration {
  /** column separator */
  columnSeparator: string;
  /** field quote */
  fieldQuote: string;
  /** record separator */
  recordSeparator: string;
  /** escape char */
  escapeChar: string;
  /** has headers */
  headersPresent: boolean;
}

/** json text configuration */
export interface JsonTextConfiguration {
  /** record separator */
  recordSeparator: string;
}

/** arrow configuration */
export interface ArrowConfiguration {
  schema: ArrowField[];
}

/** field of an arrow schema */
export interface ArrowField {
  type: string;
  name?: string;
  precision?: number;
  scale?: number;
}

/** Defines headers for Service_setProperties operation. */
export interface ServiceSetPropertiesHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
}

/** Defines headers for Service_setProperties operation. */
export interface ServiceSetPropertiesExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Service_getProperties operation. */
export interface ServiceGetPropertiesHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
}

/** Defines headers for Service_getProperties operation. */
export interface ServiceGetPropertiesExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Service_getStatistics operation. */
export interface ServiceGetStatisticsHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Service_getStatistics operation. */
export interface ServiceGetStatisticsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Service_listContainersSegment operation. */
export interface ServiceListContainersSegmentHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
}

/** Defines headers for Service_listContainersSegment operation. */
export interface ServiceListContainersSegmentExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Service_getUserDelegationKey operation. */
export interface ServiceGetUserDelegationKeyHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Service_getUserDelegationKey operation. */
export interface ServiceGetUserDelegationKeyExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Service_getAccountInfo operation. */
export interface ServiceGetAccountInfoHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** Identifies the sku name of the account */
  skuName?: SkuName;
  /** Identifies the account kind */
  accountKind?: AccountKind;
  /** Version 2019-07-07 and newer. Indicates if the account has a hierarchical namespace enabled. */
  isHierarchicalNamespaceEnabled?: boolean;
}

/** Defines headers for Service_getAccountInfo operation. */
export interface ServiceGetAccountInfoExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Service_submitBatch operation. */
export interface ServiceSubmitBatchHeaders {
  /** The media type of the body of the response. For batch requests, this is multipart/mixed; boundary=batchresponse_GUID */
  contentType?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
}

/** Defines headers for Service_submitBatch operation. */
export interface ServiceSubmitBatchExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Service_filterBlobs operation. */
export interface ServiceFilterBlobsHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Service_filterBlobs operation. */
export interface ServiceFilterBlobsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Service_listContainersSegmentNext operation. */
export interface ServiceListContainersSegmentNextHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
}

/** Defines headers for Service_listContainersSegmentNext operation. */
export interface ServiceListContainersSegmentNextExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_create operation. */
export interface ContainerCreateHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_create operation. */
export interface ContainerCreateExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_getProperties operation. */
export interface ContainerGetPropertiesHeaders {
  metadata?: { [propertyName: string]: string };
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** When a blob is leased, specifies whether the lease is of infinite or fixed duration. */
  leaseDuration?: LeaseDurationType;
  /** Lease state of the blob. */
  leaseState?: LeaseStateType;
  /** The current lease status of the blob. */
  leaseStatus?: LeaseStatusType;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** Indicated whether data in the container may be accessed publicly and the level of access */
  blobPublicAccess?: PublicAccessType;
  /** Indicates whether the container has an immutability policy set on it. */
  hasImmutabilityPolicy?: boolean;
  /** Indicates whether the container has a legal hold. */
  hasLegalHold?: boolean;
  /** The default encryption scope for the container. */
  defaultEncryptionScope?: string;
  /** Indicates whether the container's default encryption scope can be overriden. */
  denyEncryptionScopeOverride?: boolean;
}

/** Defines headers for Container_getProperties operation. */
export interface ContainerGetPropertiesExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_delete operation. */
export interface ContainerDeleteHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_delete operation. */
export interface ContainerDeleteExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_setMetadata operation. */
export interface ContainerSetMetadataHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_setMetadata operation. */
export interface ContainerSetMetadataExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_getAccessPolicy operation. */
export interface ContainerGetAccessPolicyHeaders {
  /** Indicated whether data in the container may be accessed publicly and the level of access */
  blobPublicAccess?: PublicAccessType;
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_getAccessPolicy operation. */
export interface ContainerGetAccessPolicyExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_setAccessPolicy operation. */
export interface ContainerSetAccessPolicyHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_setAccessPolicy operation. */
export interface ContainerSetAccessPolicyExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_restore operation. */
export interface ContainerRestoreHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_restore operation. */
export interface ContainerRestoreExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_rename operation. */
export interface ContainerRenameHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_rename operation. */
export interface ContainerRenameExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_submitBatch operation. */
export interface ContainerSubmitBatchHeaders {
  /** The media type of the body of the response. For batch requests, this is multipart/mixed; boundary=batchresponse_GUID */
  contentType?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
}

/** Defines headers for Container_submitBatch operation. */
export interface ContainerSubmitBatchExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_acquireLease operation. */
export interface ContainerAcquireLeaseHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** Uniquely identifies a container's lease */
  leaseId?: string;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_acquireLease operation. */
export interface ContainerAcquireLeaseExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_releaseLease operation. */
export interface ContainerReleaseLeaseHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_releaseLease operation. */
export interface ContainerReleaseLeaseExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_renewLease operation. */
export interface ContainerRenewLeaseHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** Uniquely identifies a container's lease */
  leaseId?: string;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_renewLease operation. */
export interface ContainerRenewLeaseExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_breakLease operation. */
export interface ContainerBreakLeaseHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** Approximate time remaining in the lease period, in seconds. */
  leaseTime?: number;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_breakLease operation. */
export interface ContainerBreakLeaseExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_changeLease operation. */
export interface ContainerChangeLeaseHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** Uniquely identifies a container's lease */
  leaseId?: string;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_changeLease operation. */
export interface ContainerChangeLeaseExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_listBlobFlatSegment operation. */
export interface ContainerListBlobFlatSegmentHeaders {
  /** The media type of the body of the response. For List Blobs this is 'application/xml' */
  contentType?: string;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_listBlobFlatSegment operation. */
export interface ContainerListBlobFlatSegmentExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_listBlobHierarchySegment operation. */
export interface ContainerListBlobHierarchySegmentHeaders {
  /** The media type of the body of the response. For List Blobs this is 'application/xml' */
  contentType?: string;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_listBlobHierarchySegment operation. */
export interface ContainerListBlobHierarchySegmentExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_getAccountInfo operation. */
export interface ContainerGetAccountInfoHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** Identifies the sku name of the account */
  skuName?: SkuName;
  /** Identifies the account kind */
  accountKind?: AccountKind;
}

/** Defines headers for Container_getAccountInfo operation. */
export interface ContainerGetAccountInfoExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_listBlobFlatSegmentNext operation. */
export interface ContainerListBlobFlatSegmentNextHeaders {
  /** The media type of the body of the response. For List Blobs this is 'application/xml' */
  contentType?: string;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_listBlobFlatSegmentNext operation. */
export interface ContainerListBlobFlatSegmentNextExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Container_listBlobHierarchySegmentNext operation. */
export interface ContainerListBlobHierarchySegmentNextHeaders {
  /** The media type of the body of the response. For List Blobs this is 'application/xml' */
  contentType?: string;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Container_listBlobHierarchySegmentNext operation. */
export interface ContainerListBlobHierarchySegmentNextExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Directory_create operation. */
export interface DirectoryCreateHeaders {
  /** An HTTP entity tag associated with the file or directory. */
  etag?: string;
  /** The data and time the file or directory was last modified. Write operations on the file or directory update the last modified time. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
  /** The size of the resource in bytes. */
  contentLength?: number;
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
}

/** Defines headers for Directory_create operation. */
export interface DirectoryCreateExceptionHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
}

/** Defines headers for Directory_rename operation. */
export interface DirectoryRenameHeaders {
  /** When renaming a directory, the number of paths that are renamed with each invocation is limited. If the number of paths to be renamed exceeds this limit, a continuation token is returned in this response header. When a continuation token is returned in the response, it must be specified in a subsequent invocation of the rename operation to continue renaming the directory. */
  marker?: string;
  /** An HTTP entity tag associated with the file or directory. */
  etag?: string;
  /** The data and time the file or directory was last modified. Write operations on the file or directory update the last modified time. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
  /** The size of the resource in bytes. */
  contentLength?: number;
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
}

/** Defines headers for Directory_rename operation. */
export interface DirectoryRenameExceptionHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
}

/** Defines headers for Directory_delete operation. */
export interface DirectoryDeleteHeaders {
  /** When renaming a directory, the number of paths that are renamed with each invocation is limited. If the number of paths to be renamed exceeds this limit, a continuation token is returned in this response header. When a continuation token is returned in the response, it must be specified in a subsequent invocation of the rename operation to continue renaming the directory. */
  marker?: string;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
}

/** Defines headers for Directory_delete operation. */
export interface DirectoryDeleteExceptionHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
}

/** Defines headers for Directory_setAccessControl operation. */
export interface DirectorySetAccessControlHeaders {
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** An HTTP entity tag associated with the file or directory. */
  etag?: string;
  /** The data and time the file or directory was last modified. Write operations on the file or directory update the last modified time. */
  lastModified?: Date;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
}

/** Defines headers for Directory_setAccessControl operation. */
export interface DirectorySetAccessControlExceptionHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
}

/** Defines headers for Directory_getAccessControl operation. */
export interface DirectoryGetAccessControlHeaders {
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** An HTTP entity tag associated with the file or directory. */
  etag?: string;
  /** The data and time the file or directory was last modified. Write operations on the file or directory update the last modified time. */
  lastModified?: Date;
  /** The owner of the file or directory. Included in the response if Hierarchical Namespace is enabled for the account. */
  xMsOwner?: string;
  /** The owning group of the file or directory. Included in the response if Hierarchical Namespace is enabled for the account. */
  xMsGroup?: string;
  /** The POSIX access permissions for the file owner, the file owning group, and others. Included in the response if Hierarchical Namespace is enabled for the account. */
  xMsPermissions?: string;
  /** The POSIX access control list for the file or directory.  Included in the response only if the action is "getAccessControl" and Hierarchical Namespace is enabled for the account. */
  xMsAcl?: string;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
}

/** Defines headers for Directory_getAccessControl operation. */
export interface DirectoryGetAccessControlExceptionHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
}

/** Defines headers for Blob_download operation. */
export interface BlobDownloadHeaders {
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  metadata?: { [propertyName: string]: string };
  /** Optional. Only valid when Object Replication is enabled for the storage container and on the destination blob of the replication. */
  objectReplicationPolicyId?: string;
  /** Optional. Only valid when Object Replication is enabled for the storage container and on the source blob of the replication. When retrieving this header, it will return the header with the policy id and rule id (e.g. x-ms-or-policyid_ruleid), and the value will be the status of the replication (e.g. complete, failed). */
  objectReplicationRules?: { [propertyName: string]: string };
  /** The number of bytes present in the response body. */
  contentLength?: number;
  /** The media type of the body of the response. For Download Blob this is 'application/octet-stream' */
  contentType?: string;
  /** Indicates the range of bytes returned in the event that the client requested a subset of the blob by setting the 'Range' request header. */
  contentRange?: string;
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** This header returns the value that was specified for the Content-Encoding request header */
  contentEncoding?: string;
  /** This header is returned if it was previously specified for the blob. */
  cacheControl?: string;
  /** This header returns the value that was specified for the 'x-ms-blob-content-disposition' header. The Content-Disposition response header field conveys additional information about how to process the response payload, and also can be used to attach additional metadata. For example, if set to attachment, it indicates that the user-agent should not display the response, but instead show a Save As dialog with a filename other than the blob name specified. */
  contentDisposition?: string;
  /** This header returns the value that was specified for the Content-Language request header. */
  contentLanguage?: string;
  /** The current sequence number for a page blob. This header is not returned for block blobs or append blobs */
  blobSequenceNumber?: number;
  /** The blob's type. */
  blobType?: BlobType;
  /** Conclusion time of the last attempted Copy Blob operation where this blob was the destination blob. This value can specify the time of a completed, aborted, or failed copy attempt. This header does not appear if a copy is pending, if this blob has never been the destination in a Copy Blob operation, or if this blob has been modified after a concluded Copy Blob operation using Set Blob Properties, Put Blob, or Put Block List. */
  copyCompletedOn?: Date;
  /** Only appears when x-ms-copy-status is failed or pending. Describes the cause of the last fatal or non-fatal copy operation failure. This header does not appear if this blob has never been the destination in a Copy Blob operation, or if this blob has been modified after a concluded Copy Blob operation using Set Blob Properties, Put Blob, or Put Block List */
  copyStatusDescription?: string;
  /** String identifier for this copy operation. Use with Get Blob Properties to check the status of this copy operation, or pass to Abort Copy Blob to abort a pending copy. */
  copyId?: string;
  /** Contains the number of bytes copied and the total bytes in the source in the last attempted Copy Blob operation where this blob was the destination blob. Can show between 0 and Content-Length bytes copied. This header does not appear if this blob has never been the destination in a Copy Blob operation, or if this blob has been modified after a concluded Copy Blob operation using Set Blob Properties, Put Blob, or Put Block List */
  copyProgress?: string;
  /** URL up to 2 KB in length that specifies the source blob or file used in the last attempted Copy Blob operation where this blob was the destination blob. This header does not appear if this blob has never been the destination in a Copy Blob operation, or if this blob has been modified after a concluded Copy Blob operation using Set Blob Properties, Put Blob, or Put Block List. */
  copySource?: string;
  /** State of the copy operation identified by x-ms-copy-id. */
  copyStatus?: CopyStatusType;
  /** When a blob is leased, specifies whether the lease is of infinite or fixed duration. */
  leaseDuration?: LeaseDurationType;
  /** Lease state of the blob. */
  leaseState?: LeaseStateType;
  /** The current lease status of the blob. */
  leaseStatus?: LeaseStatusType;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** A DateTime value returned by the service that uniquely identifies the blob. The value of this header indicates the blob version, and may be used in subsequent requests to access this version of the blob. */
  versionId?: string;
  /** The value of this header indicates whether version of this blob is a current version, see also x-ms-version-id header. */
  isCurrentVersion?: boolean;
  /** Indicates that the service supports requests for partial blob content. */
  acceptRanges?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** The number of committed blocks present in the blob. This header is returned only for append blobs. */
  blobCommittedBlockCount?: number;
  /** The value of this header is set to true if the blob data and application metadata are completely encrypted using the specified algorithm. Otherwise, the value is set to false (when the blob is unencrypted, or if only parts of the blob/application metadata are encrypted). */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the blob. This header is only returned when the blob was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
  /** If the blob has a MD5 hash, and if request contains range header (Range or x-ms-range), this response header is returned with the value of the whole blob's MD5 value. This value may or may not be equal to the value returned in Content-MD5 header, with the latter calculated from the requested range */
  blobContentMD5?: Uint8Array;
  /** The number of tags associated with the blob */
  tagCount?: number;
  /** If this blob has been sealed */
  isSealed?: boolean;
  /** UTC date/time value generated by the service that indicates the time at which the blob was last read or written to */
  lastAccessed?: Date;
}

/** Defines headers for Blob_download operation. */
export interface BlobDownloadExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_getProperties operation. */
export interface BlobGetPropertiesHeaders {
  /** Returns the date and time the blob was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** Returns the date and time the blob was created. */
  createdOn?: Date;
  metadata?: { [propertyName: string]: string };
  /** Optional. Only valid when Object Replication is enabled for the storage container and on the destination blob of the replication. */
  objectReplicationPolicyId?: string;
  /** Optional. Only valid when Object Replication is enabled for the storage container and on the source blob of the replication. When retrieving this header, it will return the header with the policy id and rule id (e.g. x-ms-or-policyid_ruleid), and the value will be the status of the replication (e.g. complete, failed). */
  objectReplicationRules?: { [propertyName: string]: string };
  /** The blob's type. */
  blobType?: BlobType;
  /** Conclusion time of the last attempted Copy Blob operation where this blob was the destination blob. This value can specify the time of a completed, aborted, or failed copy attempt. This header does not appear if a copy is pending, if this blob has never been the destination in a Copy Blob operation, or if this blob has been modified after a concluded Copy Blob operation using Set Blob Properties, Put Blob, or Put Block List. */
  copyCompletedOn?: Date;
  /** Only appears when x-ms-copy-status is failed or pending. Describes the cause of the last fatal or non-fatal copy operation failure. This header does not appear if this blob has never been the destination in a Copy Blob operation, or if this blob has been modified after a concluded Copy Blob operation using Set Blob Properties, Put Blob, or Put Block List */
  copyStatusDescription?: string;
  /** String identifier for this copy operation. Use with Get Blob Properties to check the status of this copy operation, or pass to Abort Copy Blob to abort a pending copy. */
  copyId?: string;
  /** Contains the number of bytes copied and the total bytes in the source in the last attempted Copy Blob operation where this blob was the destination blob. Can show between 0 and Content-Length bytes copied. This header does not appear if this blob has never been the destination in a Copy Blob operation, or if this blob has been modified after a concluded Copy Blob operation using Set Blob Properties, Put Blob, or Put Block List */
  copyProgress?: string;
  /** URL up to 2 KB in length that specifies the source blob or file used in the last attempted Copy Blob operation where this blob was the destination blob. This header does not appear if this blob has never been the destination in a Copy Blob operation, or if this blob has been modified after a concluded Copy Blob operation using Set Blob Properties, Put Blob, or Put Block List. */
  copySource?: string;
  /** State of the copy operation identified by x-ms-copy-id. */
  copyStatus?: CopyStatusType;
  /** Included if the blob is incremental copy blob. */
  isIncrementalCopy?: boolean;
  /** Included if the blob is incremental copy blob or incremental copy snapshot, if x-ms-copy-status is success. Snapshot time of the last successful incremental copy snapshot for this blob. */
  destinationSnapshot?: string;
  /** When a blob is leased, specifies whether the lease is of infinite or fixed duration. */
  leaseDuration?: LeaseDurationType;
  /** Lease state of the blob. */
  leaseState?: LeaseStateType;
  /** The current lease status of the blob. */
  leaseStatus?: LeaseStatusType;
  /** The size of the blob in bytes. For a page blob, this header returns the value of the x-ms-blob-content-length header that is stored with the blob. */
  contentLength?: number;
  /** The content type specified for the blob. The default content type is 'application/octet-stream' */
  contentType?: string;
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** This header returns the value that was specified for the Content-Encoding request header */
  contentEncoding?: string;
  /** This header returns the value that was specified for the 'x-ms-blob-content-disposition' header. The Content-Disposition response header field conveys additional information about how to process the response payload, and also can be used to attach additional metadata. For example, if set to attachment, it indicates that the user-agent should not display the response, but instead show a Save As dialog with a filename other than the blob name specified. */
  contentDisposition?: string;
  /** This header returns the value that was specified for the Content-Language request header. */
  contentLanguage?: string;
  /** This header is returned if it was previously specified for the blob. */
  cacheControl?: string;
  /** The current sequence number for a page blob. This header is not returned for block blobs or append blobs */
  blobSequenceNumber?: number;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** Indicates that the service supports requests for partial blob content. */
  acceptRanges?: string;
  /** The number of committed blocks present in the blob. This header is returned only for append blobs. */
  blobCommittedBlockCount?: number;
  /** The value of this header is set to true if the blob data and application metadata are completely encrypted using the specified algorithm. Otherwise, the value is set to false (when the blob is unencrypted, or if only parts of the blob/application metadata are encrypted). */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the metadata. This header is only returned when the metadata was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
  /** The tier of page blob on a premium storage account or tier of block blob on blob storage LRS accounts. For a list of allowed premium page blob tiers, see https://docs.microsoft.com/en-us/azure/virtual-machines/windows/premium-storage#features. For blob storage LRS accounts, valid values are Hot/Cool/Archive. */
  accessTier?: string;
  /** For page blobs on a premium storage account only. If the access tier is not explicitly set on the blob, the tier is inferred based on its content length and this header will be returned with true value. */
  accessTierInferred?: boolean;
  /** For blob storage LRS accounts, valid values are rehydrate-pending-to-hot/rehydrate-pending-to-cool. If the blob is being rehydrated and is not complete then this header is returned indicating that rehydrate is pending and also tells the destination tier. */
  archiveStatus?: string;
  /** The time the tier was changed on the object. This is only returned if the tier on the block blob was ever set. */
  accessTierChangedOn?: Date;
  /** A DateTime value returned by the service that uniquely identifies the blob. The value of this header indicates the blob version, and may be used in subsequent requests to access this version of the blob. */
  versionId?: string;
  /** The value of this header indicates whether version of this blob is a current version, see also x-ms-version-id header. */
  isCurrentVersion?: boolean;
  /** The number of tags associated with the blob */
  tagCount?: number;
  /** The time this blob will expire. */
  expiresOn?: Date;
  /** If this blob has been sealed */
  isSealed?: boolean;
  /** If an object is in rehydrate pending state then this header is returned with priority of rehydrate. */
  rehydratePriority?: RehydratePriority;
  /** UTC date/time value generated by the service that indicates the time at which the blob was last read or written to */
  lastAccessed?: Date;
}

/** Defines headers for Blob_getProperties operation. */
export interface BlobGetPropertiesExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_delete operation. */
export interface BlobDeleteHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Blob_delete operation. */
export interface BlobDeleteExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_setAccessControl operation. */
export interface BlobSetAccessControlHeaders {
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** An HTTP entity tag associated with the file or directory. */
  etag?: string;
  /** The data and time the file or directory was last modified. Write operations on the file or directory update the last modified time. */
  lastModified?: Date;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
}

/** Defines headers for Blob_setAccessControl operation. */
export interface BlobSetAccessControlExceptionHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
}

/** Defines headers for Blob_getAccessControl operation. */
export interface BlobGetAccessControlHeaders {
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** An HTTP entity tag associated with the file or directory. */
  etag?: string;
  /** The data and time the file or directory was last modified. Write operations on the file or directory update the last modified time. */
  lastModified?: Date;
  /** The owner of the file or directory. Included in the response if Hierarchical Namespace is enabled for the account. */
  xMsOwner?: string;
  /** The owning group of the file or directory. Included in the response if Hierarchical Namespace is enabled for the account. */
  xMsGroup?: string;
  /** The POSIX access permissions for the file owner, the file owning group, and others. Included in the response if Hierarchical Namespace is enabled for the account. */
  xMsPermissions?: string;
  /** The POSIX access control list for the file or directory.  Included in the response only if the action is "getAccessControl" and Hierarchical Namespace is enabled for the account. */
  xMsAcl?: string;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
}

/** Defines headers for Blob_getAccessControl operation. */
export interface BlobGetAccessControlExceptionHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
}

/** Defines headers for Blob_rename operation. */
export interface BlobRenameHeaders {
  /** An HTTP entity tag associated with the file or directory. */
  etag?: string;
  /** The data and time the file or directory was last modified.  Write operations on the file or directory update the last modified time. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
  /** The size of the resource in bytes. */
  contentLength?: number;
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
}

/** Defines headers for Blob_rename operation. */
export interface BlobRenameExceptionHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
}

/** Defines headers for Blob_undelete operation. */
export interface BlobUndeleteHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
}

/** Defines headers for Blob_undelete operation. */
export interface BlobUndeleteExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_setExpiry operation. */
export interface BlobSetExpiryHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
}

/** Defines headers for Blob_setExpiry operation. */
export interface BlobSetExpiryExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_setHttpHeaders operation. */
export interface BlobSetHttpHeadersHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** The current sequence number for a page blob. This header is not returned for block blobs or append blobs */
  blobSequenceNumber?: number;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Blob_setHttpHeaders operation. */
export interface BlobSetHttpHeadersExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_setMetadata operation. */
export interface BlobSetMetadataHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** A DateTime value returned by the service that uniquely identifies the blob. The value of this header indicates the blob version, and may be used in subsequent requests to access this version of the blob. */
  versionId?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the metadata. This header is only returned when the metadata was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for Blob_setMetadata operation. */
export interface BlobSetMetadataExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_acquireLease operation. */
export interface BlobAcquireLeaseHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the blob was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** Uniquely identifies a blobs's lease */
  leaseId?: string;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Blob_acquireLease operation. */
export interface BlobAcquireLeaseExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_releaseLease operation. */
export interface BlobReleaseLeaseHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the blob was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Blob_releaseLease operation. */
export interface BlobReleaseLeaseExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_renewLease operation. */
export interface BlobRenewLeaseHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the blob was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** Uniquely identifies a blobs's lease */
  leaseId?: string;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Blob_renewLease operation. */
export interface BlobRenewLeaseExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_changeLease operation. */
export interface BlobChangeLeaseHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the blob was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Uniquely identifies a blobs's lease */
  leaseId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Blob_changeLease operation. */
export interface BlobChangeLeaseExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_breakLease operation. */
export interface BlobBreakLeaseHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the blob was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** Approximate time remaining in the lease period, in seconds. */
  leaseTime?: number;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Blob_breakLease operation. */
export interface BlobBreakLeaseExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_createSnapshot operation. */
export interface BlobCreateSnapshotHeaders {
  /** Uniquely identifies the snapshot and indicates the snapshot version. It may be used in subsequent requests to access the snapshot */
  snapshot?: string;
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** A DateTime value returned by the service that uniquely identifies the blob. The value of this header indicates the blob version, and may be used in subsequent requests to access this version of the blob. */
  versionId?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** True if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. For a snapshot request, this header is set to true when metadata was provided in the request and encrypted with a customer-provided key. */
  isServerEncrypted?: boolean;
}

/** Defines headers for Blob_createSnapshot operation. */
export interface BlobCreateSnapshotExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_startCopyFromURL operation. */
export interface BlobStartCopyFromURLHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** A DateTime value returned by the service that uniquely identifies the blob. The value of this header indicates the blob version, and may be used in subsequent requests to access this version of the blob. */
  versionId?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** String identifier for this copy operation. Use with Get Blob Properties to check the status of this copy operation, or pass to Abort Copy Blob to abort a pending copy. */
  copyId?: string;
  /** State of the copy operation identified by x-ms-copy-id. */
  copyStatus?: CopyStatusType;
}

/** Defines headers for Blob_startCopyFromURL operation. */
export interface BlobStartCopyFromURLExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_copyFromURL operation. */
export interface BlobCopyFromURLHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** A DateTime value returned by the service that uniquely identifies the blob. The value of this header indicates the blob version, and may be used in subsequent requests to access this version of the blob. */
  versionId?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** String identifier for this copy operation. */
  copyId?: string;
  /** State of the copy operation identified by x-ms-copy-id. */
  copyStatus?: "success";
  /** This response header is returned so that the client can check for the integrity of the copied content. This header is only returned if the source content MD5 was specified. */
  contentMD5?: Uint8Array;
  /** This response header is returned so that the client can check for the integrity of the copied content. */
  xMsContentCrc64?: Uint8Array;
}

/** Defines headers for Blob_copyFromURL operation. */
export interface BlobCopyFromURLExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_abortCopyFromURL operation. */
export interface BlobAbortCopyFromURLHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Blob_abortCopyFromURL operation. */
export interface BlobAbortCopyFromURLExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_setTier operation. */
export interface BlobSetTierHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and newer. */
  version?: string;
}

/** Defines headers for Blob_setTier operation. */
export interface BlobSetTierExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_getAccountInfo operation. */
export interface BlobGetAccountInfoHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** Identifies the sku name of the account */
  skuName?: SkuName;
  /** Identifies the account kind */
  accountKind?: AccountKind;
}

/** Defines headers for Blob_getAccountInfo operation. */
export interface BlobGetAccountInfoExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_query operation. */
export interface BlobQueryHeaders {
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  metadata?: { [propertyName: string]: string };
  /** The number of bytes present in the response body. */
  contentLength?: number;
  /** The media type of the body of the response. For Download Blob this is 'application/octet-stream' */
  contentType?: string;
  /** Indicates the range of bytes returned in the event that the client requested a subset of the blob by setting the 'Range' request header. */
  contentRange?: string;
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** This header returns the value that was specified for the Content-Encoding request header */
  contentEncoding?: string;
  /** This header is returned if it was previously specified for the blob. */
  cacheControl?: string;
  /** This header returns the value that was specified for the 'x-ms-blob-content-disposition' header. The Content-Disposition response header field conveys additional information about how to process the response payload, and also can be used to attach additional metadata. For example, if set to attachment, it indicates that the user-agent should not display the response, but instead show a Save As dialog with a filename other than the blob name specified. */
  contentDisposition?: string;
  /** This header returns the value that was specified for the Content-Language request header. */
  contentLanguage?: string;
  /** The current sequence number for a page blob. This header is not returned for block blobs or append blobs */
  blobSequenceNumber?: number;
  /** The blob's type. */
  blobType?: BlobType;
  /** Conclusion time of the last attempted Copy Blob operation where this blob was the destination blob. This value can specify the time of a completed, aborted, or failed copy attempt. This header does not appear if a copy is pending, if this blob has never been the destination in a Copy Blob operation, or if this blob has been modified after a concluded Copy Blob operation using Set Blob Properties, Put Blob, or Put Block List. */
  copyCompletionTime?: Date;
  /** Only appears when x-ms-copy-status is failed or pending. Describes the cause of the last fatal or non-fatal copy operation failure. This header does not appear if this blob has never been the destination in a Copy Blob operation, or if this blob has been modified after a concluded Copy Blob operation using Set Blob Properties, Put Blob, or Put Block List */
  copyStatusDescription?: string;
  /** String identifier for this copy operation. Use with Get Blob Properties to check the status of this copy operation, or pass to Abort Copy Blob to abort a pending copy. */
  copyId?: string;
  /** Contains the number of bytes copied and the total bytes in the source in the last attempted Copy Blob operation where this blob was the destination blob. Can show between 0 and Content-Length bytes copied. This header does not appear if this blob has never been the destination in a Copy Blob operation, or if this blob has been modified after a concluded Copy Blob operation using Set Blob Properties, Put Blob, or Put Block List */
  copyProgress?: string;
  /** URL up to 2 KB in length that specifies the source blob or file used in the last attempted Copy Blob operation where this blob was the destination blob. This header does not appear if this blob has never been the destination in a Copy Blob operation, or if this blob has been modified after a concluded Copy Blob operation using Set Blob Properties, Put Blob, or Put Block List. */
  copySource?: string;
  /** State of the copy operation identified by x-ms-copy-id. */
  copyStatus?: CopyStatusType;
  /** When a blob is leased, specifies whether the lease is of infinite or fixed duration. */
  leaseDuration?: LeaseDurationType;
  /** Lease state of the blob. */
  leaseState?: LeaseStateType;
  /** The current lease status of the blob. */
  leaseStatus?: LeaseStatusType;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** Indicates that the service supports requests for partial blob content. */
  acceptRanges?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** The number of committed blocks present in the blob. This header is returned only for append blobs. */
  blobCommittedBlockCount?: number;
  /** The value of this header is set to true if the blob data and application metadata are completely encrypted using the specified algorithm. Otherwise, the value is set to false (when the blob is unencrypted, or if only parts of the blob/application metadata are encrypted). */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the blob. This header is only returned when the blob was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
  /** If the blob has a MD5 hash, and if request contains range header (Range or x-ms-range), this response header is returned with the value of the whole blob's MD5 value. This value may or may not be equal to the value returned in Content-MD5 header, with the latter calculated from the requested range */
  blobContentMD5?: Uint8Array;
}

/** Defines headers for Blob_query operation. */
export interface BlobQueryExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_getTags operation. */
export interface BlobGetTagsHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Blob_getTags operation. */
export interface BlobGetTagsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Blob_setTags operation. */
export interface BlobSetTagsHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for Blob_setTags operation. */
export interface BlobSetTagsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for PageBlob_create operation. */
export interface PageBlobCreateHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** A DateTime value returned by the service that uniquely identifies the blob. The value of this header indicates the blob version, and may be used in subsequent requests to access this version of the blob. */
  versionId?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the blob. This header is only returned when the blob was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for PageBlob_create operation. */
export interface PageBlobCreateExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for PageBlob_uploadPages operation. */
export interface PageBlobUploadPagesHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** This header is returned so that the client can check for message content integrity. The value of this header is computed by the Blob service; it is not necessarily the same value specified in the request headers. */
  xMsContentCrc64?: Uint8Array;
  /** The current sequence number for the page blob. */
  blobSequenceNumber?: number;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the pages. This header is only returned when the pages were encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for PageBlob_uploadPages operation. */
export interface PageBlobUploadPagesExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for PageBlob_clearPages operation. */
export interface PageBlobClearPagesHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** This header is returned so that the client can check for message content integrity. The value of this header is computed by the Blob service; it is not necessarily the same value specified in the request headers. */
  xMsContentCrc64?: Uint8Array;
  /** The current sequence number for the page blob. */
  blobSequenceNumber?: number;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for PageBlob_clearPages operation. */
export interface PageBlobClearPagesExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for PageBlob_uploadPagesFromURL operation. */
export interface PageBlobUploadPagesFromURLHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** This header is returned so that the client can check for message content integrity. The value of this header is computed by the Blob service; it is not necessarily the same value specified in the request headers. */
  xMsContentCrc64?: Uint8Array;
  /** The current sequence number for the page blob. */
  blobSequenceNumber?: number;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the blob. This header is only returned when the blob was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for PageBlob_uploadPagesFromURL operation. */
export interface PageBlobUploadPagesFromURLExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for PageBlob_getPageRanges operation. */
export interface PageBlobGetPageRangesHeaders {
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** The size of the blob in bytes. */
  blobContentLength?: number;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for PageBlob_getPageRanges operation. */
export interface PageBlobGetPageRangesExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for PageBlob_getPageRangesDiff operation. */
export interface PageBlobGetPageRangesDiffHeaders {
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** The size of the blob in bytes. */
  blobContentLength?: number;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for PageBlob_getPageRangesDiff operation. */
export interface PageBlobGetPageRangesDiffExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for PageBlob_resize operation. */
export interface PageBlobResizeHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** The current sequence number for a page blob. This header is not returned for block blobs or append blobs */
  blobSequenceNumber?: number;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for PageBlob_resize operation. */
export interface PageBlobResizeExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for PageBlob_updateSequenceNumber operation. */
export interface PageBlobUpdateSequenceNumberHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** The current sequence number for a page blob. This header is not returned for block blobs or append blobs */
  blobSequenceNumber?: number;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for PageBlob_updateSequenceNumber operation. */
export interface PageBlobUpdateSequenceNumberExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for PageBlob_copyIncremental operation. */
export interface PageBlobCopyIncrementalHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** String identifier for this copy operation. Use with Get Blob Properties to check the status of this copy operation, or pass to Abort Copy Blob to abort a pending copy. */
  copyId?: string;
  /** State of the copy operation identified by x-ms-copy-id. */
  copyStatus?: CopyStatusType;
}

/** Defines headers for PageBlob_copyIncremental operation. */
export interface PageBlobCopyIncrementalExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for AppendBlob_create operation. */
export interface AppendBlobCreateHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** A DateTime value returned by the service that uniquely identifies the blob. The value of this header indicates the blob version, and may be used in subsequent requests to access this version of the blob. */
  versionId?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the blob. This header is only returned when the blob was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for AppendBlob_create operation. */
export interface AppendBlobCreateExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for AppendBlob_appendBlock operation. */
export interface AppendBlobAppendBlockHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** This header is returned so that the client can check for message content integrity. The value of this header is computed by the Blob service; it is not necessarily the same value specified in the request headers. */
  xMsContentCrc64?: Uint8Array;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** This response header is returned only for append operations. It returns the offset at which the block was committed, in bytes. */
  blobAppendOffset?: string;
  /** The number of committed blocks present in the blob. This header is returned only for append blobs. */
  blobCommittedBlockCount?: number;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the block. This header is only returned when the block was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for AppendBlob_appendBlock operation. */
export interface AppendBlobAppendBlockExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for AppendBlob_appendBlockFromUrl operation. */
export interface AppendBlobAppendBlockFromUrlHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** This header is returned so that the client can check for message content integrity. The value of this header is computed by the Blob service; it is not necessarily the same value specified in the request headers. */
  xMsContentCrc64?: Uint8Array;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** This response header is returned only for append operations. It returns the offset at which the block was committed, in bytes. */
  blobAppendOffset?: string;
  /** The number of committed blocks present in the blob. This header is returned only for append blobs. */
  blobCommittedBlockCount?: number;
  /** The SHA-256 hash of the encryption key used to encrypt the block. This header is only returned when the block was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
}

/** Defines headers for AppendBlob_appendBlockFromUrl operation. */
export interface AppendBlobAppendBlockFromUrlExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for AppendBlob_seal operation. */
export interface AppendBlobSealHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** If this blob has been sealed */
  isSealed?: boolean;
}

/** Defines headers for AppendBlob_seal operation. */
export interface AppendBlobSealExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for BlockBlob_upload operation. */
export interface BlockBlobUploadHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** A DateTime value returned by the service that uniquely identifies the blob. The value of this header indicates the blob version, and may be used in subsequent requests to access this version of the blob. */
  versionId?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the blob. This header is only returned when the blob was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for BlockBlob_upload operation. */
export interface BlockBlobUploadExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for BlockBlob_putBlobFromUrl operation. */
export interface BlockBlobPutBlobFromUrlHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** A DateTime value returned by the service that uniquely identifies the blob. The value of this header indicates the blob version, and may be used in subsequent requests to access this version of the blob. */
  versionId?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the blob. This header is only returned when the blob was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for BlockBlob_putBlobFromUrl operation. */
export interface BlockBlobPutBlobFromUrlExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for BlockBlob_stageBlock operation. */
export interface BlockBlobStageBlockHeaders {
  /** This header is returned so that the client can check for message content integrity. The value of this header is computed by the Blob service; it is not necessarily the same value specified in the request headers. */
  contentMD5?: Uint8Array;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** This header is returned so that the client can check for message content integrity. The value of this header is computed by the Blob service; it is not necessarily the same value specified in the request headers. */
  xMsContentCrc64?: Uint8Array;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the block. This header is only returned when the block was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for BlockBlob_stageBlock operation. */
export interface BlockBlobStageBlockExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for BlockBlob_stageBlockFromURL operation. */
export interface BlockBlobStageBlockFromURLHeaders {
  /** This header is returned so that the client can check for message content integrity. The value of this header is computed by the Blob service; it is not necessarily the same value specified in the request headers. */
  contentMD5?: Uint8Array;
  /** This header is returned so that the client can check for message content integrity. The value of this header is computed by the Blob service; it is not necessarily the same value specified in the request headers. */
  xMsContentCrc64?: Uint8Array;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the block. This header is only returned when the block was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for BlockBlob_stageBlockFromURL operation. */
export interface BlockBlobStageBlockFromURLExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for BlockBlob_commitBlockList operation. */
export interface BlockBlobCommitBlockListHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** This header is returned so that the client can check for message content integrity. This header refers to the content of the request, meaning, in this case, the list of blocks, and not the content of the blob itself. */
  contentMD5?: Uint8Array;
  /** This header is returned so that the client can check for message content integrity. This header refers to the content of the request, meaning, in this case, the list of blocks, and not the content of the blob itself. */
  xMsContentCrc64?: Uint8Array;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** A DateTime value returned by the service that uniquely identifies the blob. The value of this header indicates the blob version, and may be used in subsequent requests to access this version of the blob. */
  versionId?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the blob. This header is only returned when the blob was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for BlockBlob_commitBlockList operation. */
export interface BlockBlobCommitBlockListExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for BlockBlob_getBlockList operation. */
export interface BlockBlobGetBlockListHeaders {
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  etag?: string;
  /** The media type of the body of the response. For Get Block List this is 'application/xml' */
  contentType?: string;
  /** The size of the blob in bytes. */
  blobContentLength?: number;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
}

/** Defines headers for BlockBlob_getBlockList operation. */
export interface BlockBlobGetBlockListExceptionHeaders {
  errorCode?: string;
}

/** Parameter group */
export interface ContainerEncryptionScope {
  /** Optional.  Version 2019-07-07 and later.  Specifies the default encryption scope to set on the container and use for all future writes. */
  defaultEncryptionScope?: string;
  /** Optional.  Version 2019-07-07 and newer.  If true, prevents any request from specifying a different encryption scope than the scope set on the container. */
  preventEncryptionScopeOverride?: boolean;
}

/** Parameter group */
export interface LeaseAccessConditions {
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  leaseId?: string;
}

/** Parameter group */
export interface ModifiedAccessConditions {
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  ifModifiedSince?: Date;
  /** Specify this header value to operate only on a blob if it has not been modified since the specified date/time. */
  ifUnmodifiedSince?: Date;
  /** Specify an ETag value to operate only on blobs with a matching value. */
  ifMatch?: string;
  /** Specify an ETag value to operate only on blobs without a matching value. */
  ifNoneMatch?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  ifTags?: string;
}

/** Parameter group */
export interface DirectoryHttpHeaders {
  /** Cache control for given resource */
  cacheControl?: string;
  /** Content type for given resource */
  contentType?: string;
  /** Content encoding for given resource */
  contentEncoding?: string;
  /** Content language for given resource */
  contentLanguage?: string;
  /** Content disposition for given resource */
  contentDisposition?: string;
}

/** Parameter group */
export interface SourceModifiedAccessConditions {
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  sourceIfModifiedSince?: Date;
  /** Specify this header value to operate only on a blob if it has not been modified since the specified date/time. */
  sourceIfUnmodifiedSince?: Date;
  /** Specify an ETag value to operate only on blobs with a matching value. */
  sourceIfMatch?: string;
  /** Specify an ETag value to operate only on blobs without a matching value. */
  sourceIfNoneMatch?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  sourceIfTags?: string;
}

/** Parameter group */
export interface CpkInfo {
  /** Optional. Specifies the encryption key to use to encrypt the data provided in the request. If not specified, encryption is performed with the root account encryption key.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionKey?: string;
  /** The SHA-256 hash of the provided encryption key. Must be provided if the x-ms-encryption-key header is provided. */
  encryptionKeySha256?: string;
}

/** Parameter group */
export interface BlobHttpHeaders {
  /** Optional. Sets the blob's cache control. If specified, this property is stored with the blob and returned with a read request. */
  blobCacheControl?: string;
  /** Optional. Sets the blob's content type. If specified, this property is stored with the blob and returned with a read request. */
  blobContentType?: string;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  blobContentMD5?: Uint8Array;
  /** Optional. Sets the blob's content encoding. If specified, this property is stored with the blob and returned with a read request. */
  blobContentEncoding?: string;
  /** Optional. Set the blob's content language. If specified, this property is stored with the blob and returned with a read request. */
  blobContentLanguage?: string;
  /** Optional. Sets the blob's Content-Disposition header. */
  blobContentDisposition?: string;
}

/** Parameter group */
export interface SequenceNumberAccessConditions {
  /** Specify this header value to operate only on a blob if it has a sequence number less than or equal to the specified. */
  ifSequenceNumberLessThanOrEqualTo?: number;
  /** Specify this header value to operate only on a blob if it has a sequence number less than the specified. */
  ifSequenceNumberLessThan?: number;
  /** Specify this header value to operate only on a blob if it has the specified sequence number. */
  ifSequenceNumberEqualTo?: number;
}

/** Parameter group */
export interface AppendPositionAccessConditions {
  /** Optional conditional header. The max length in bytes permitted for the append blob. If the Append Block operation would cause the blob to exceed that limit or if the blob size is already greater than the value specified in this header, the request will fail with MaxBlobSizeConditionNotMet error (HTTP status code 412 - Precondition Failed). */
  maxSize?: number;
  /** Optional conditional header, used only for the Append Block operation. A number indicating the byte offset to compare. Append Block will succeed only if the append position is equal to this number. If it is not, the request will fail with the AppendPositionConditionNotMet error (HTTP status code 412 - Precondition Failed). */
  appendPosition?: number;
}

/** Known values of {@link GeoReplicationStatusType} that the service accepts. */
export const enum KnownGeoReplicationStatusType {
  Live = "live",
  Bootstrap = "bootstrap",
  Unavailable = "unavailable"
}

/**
 * Defines values for GeoReplicationStatusType. \
 * {@link KnownGeoReplicationStatusType} can be used interchangeably with GeoReplicationStatusType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **live** \
 * **bootstrap** \
 * **unavailable**
 */
export type GeoReplicationStatusType = string;

/** Known values of {@link PublicAccessType} that the service accepts. */
export const enum KnownPublicAccessType {
  Container = "container",
  Blob = "blob"
}

/**
 * Defines values for PublicAccessType. \
 * {@link KnownPublicAccessType} can be used interchangeably with PublicAccessType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **container** \
 * **blob**
 */
export type PublicAccessType = string;

/** Known values of {@link AccessTier} that the service accepts. */
export const enum KnownAccessTier {
  P4 = "P4",
  P6 = "P6",
  P10 = "P10",
  P15 = "P15",
  P20 = "P20",
  P30 = "P30",
  P40 = "P40",
  P50 = "P50",
  P60 = "P60",
  P70 = "P70",
  P80 = "P80",
  Hot = "Hot",
  Cool = "Cool",
  Archive = "Archive"
}

/**
 * Defines values for AccessTier. \
 * {@link KnownAccessTier} can be used interchangeably with AccessTier,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **P4** \
 * **P6** \
 * **P10** \
 * **P15** \
 * **P20** \
 * **P30** \
 * **P40** \
 * **P50** \
 * **P60** \
 * **P70** \
 * **P80** \
 * **Hot** \
 * **Cool** \
 * **Archive**
 */
export type AccessTier = string;

/** Known values of {@link ArchiveStatus} that the service accepts. */
export const enum KnownArchiveStatus {
  RehydratePendingToHot = "rehydrate-pending-to-hot",
  RehydratePendingToCool = "rehydrate-pending-to-cool"
}

/**
 * Defines values for ArchiveStatus. \
 * {@link KnownArchiveStatus} can be used interchangeably with ArchiveStatus,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **rehydrate-pending-to-hot** \
 * **rehydrate-pending-to-cool**
 */
export type ArchiveStatus = string;

/** Known values of {@link RehydratePriority} that the service accepts. */
export const enum KnownRehydratePriority {
  High = "High",
  Standard = "Standard"
}

/**
 * Defines values for RehydratePriority. \
 * {@link KnownRehydratePriority} can be used interchangeably with RehydratePriority,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **High** \
 * **Standard**
 */
export type RehydratePriority = string;

/** Known values of {@link BlobExpiryOptions} that the service accepts. */
export const enum KnownBlobExpiryOptions {
  NeverExpire = "NeverExpire",
  RelativeToCreation = "RelativeToCreation",
  RelativeToNow = "RelativeToNow",
  Absolute = "Absolute"
}

/**
 * Defines values for BlobExpiryOptions. \
 * {@link KnownBlobExpiryOptions} can be used interchangeably with BlobExpiryOptions,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **NeverExpire** \
 * **RelativeToCreation** \
 * **RelativeToNow** \
 * **Absolute**
 */
export type BlobExpiryOptions = string;

/** Known values of {@link StorageErrorCode} that the service accepts. */
export const enum KnownStorageErrorCode {
  AccountAlreadyExists = "AccountAlreadyExists",
  AccountBeingCreated = "AccountBeingCreated",
  AccountIsDisabled = "AccountIsDisabled",
  AuthenticationFailed = "AuthenticationFailed",
  AuthorizationFailure = "AuthorizationFailure",
  ConditionHeadersNotSupported = "ConditionHeadersNotSupported",
  ConditionNotMet = "ConditionNotMet",
  EmptyMetadataKey = "EmptyMetadataKey",
  InsufficientAccountPermissions = "InsufficientAccountPermissions",
  InternalError = "InternalError",
  InvalidAuthenticationInfo = "InvalidAuthenticationInfo",
  InvalidHeaderValue = "InvalidHeaderValue",
  InvalidHttpVerb = "InvalidHttpVerb",
  InvalidInput = "InvalidInput",
  InvalidMd5 = "InvalidMd5",
  InvalidMetadata = "InvalidMetadata",
  InvalidQueryParameterValue = "InvalidQueryParameterValue",
  InvalidRange = "InvalidRange",
  InvalidResourceName = "InvalidResourceName",
  InvalidUri = "InvalidUri",
  InvalidXmlDocument = "InvalidXmlDocument",
  InvalidXmlNodeValue = "InvalidXmlNodeValue",
  Md5Mismatch = "Md5Mismatch",
  MetadataTooLarge = "MetadataTooLarge",
  MissingContentLengthHeader = "MissingContentLengthHeader",
  MissingRequiredQueryParameter = "MissingRequiredQueryParameter",
  MissingRequiredHeader = "MissingRequiredHeader",
  MissingRequiredXmlNode = "MissingRequiredXmlNode",
  MultipleConditionHeadersNotSupported = "MultipleConditionHeadersNotSupported",
  OperationTimedOut = "OperationTimedOut",
  OutOfRangeInput = "OutOfRangeInput",
  OutOfRangeQueryParameterValue = "OutOfRangeQueryParameterValue",
  RequestBodyTooLarge = "RequestBodyTooLarge",
  ResourceTypeMismatch = "ResourceTypeMismatch",
  RequestUrlFailedToParse = "RequestUrlFailedToParse",
  ResourceAlreadyExists = "ResourceAlreadyExists",
  ResourceNotFound = "ResourceNotFound",
  ServerBusy = "ServerBusy",
  UnsupportedHeader = "UnsupportedHeader",
  UnsupportedXmlNode = "UnsupportedXmlNode",
  UnsupportedQueryParameter = "UnsupportedQueryParameter",
  UnsupportedHttpVerb = "UnsupportedHttpVerb",
  AppendPositionConditionNotMet = "AppendPositionConditionNotMet",
  BlobAlreadyExists = "BlobAlreadyExists",
  BlobImmutableDueToPolicy = "BlobImmutableDueToPolicy",
  BlobNotFound = "BlobNotFound",
  BlobOverwritten = "BlobOverwritten",
  BlobTierInadequateForContentLength = "BlobTierInadequateForContentLength",
  BlockCountExceedsLimit = "BlockCountExceedsLimit",
  BlockListTooLong = "BlockListTooLong",
  CannotChangeToLowerTier = "CannotChangeToLowerTier",
  CannotVerifyCopySource = "CannotVerifyCopySource",
  ContainerAlreadyExists = "ContainerAlreadyExists",
  ContainerBeingDeleted = "ContainerBeingDeleted",
  ContainerDisabled = "ContainerDisabled",
  ContainerNotFound = "ContainerNotFound",
  ContentLengthLargerThanTierLimit = "ContentLengthLargerThanTierLimit",
  CopyAcrossAccountsNotSupported = "CopyAcrossAccountsNotSupported",
  CopyIdMismatch = "CopyIdMismatch",
  FeatureVersionMismatch = "FeatureVersionMismatch",
  IncrementalCopyBlobMismatch = "IncrementalCopyBlobMismatch",
  IncrementalCopyOfEralierVersionSnapshotNotAllowed = "IncrementalCopyOfEralierVersionSnapshotNotAllowed",
  IncrementalCopySourceMustBeSnapshot = "IncrementalCopySourceMustBeSnapshot",
  InfiniteLeaseDurationRequired = "InfiniteLeaseDurationRequired",
  InvalidBlobOrBlock = "InvalidBlobOrBlock",
  InvalidBlobTier = "InvalidBlobTier",
  InvalidBlobType = "InvalidBlobType",
  InvalidBlockId = "InvalidBlockId",
  InvalidBlockList = "InvalidBlockList",
  InvalidOperation = "InvalidOperation",
  InvalidPageRange = "InvalidPageRange",
  InvalidSourceBlobType = "InvalidSourceBlobType",
  InvalidSourceBlobUrl = "InvalidSourceBlobUrl",
  InvalidVersionForPageBlobOperation = "InvalidVersionForPageBlobOperation",
  LeaseAlreadyPresent = "LeaseAlreadyPresent",
  LeaseAlreadyBroken = "LeaseAlreadyBroken",
  LeaseIdMismatchWithBlobOperation = "LeaseIdMismatchWithBlobOperation",
  LeaseIdMismatchWithContainerOperation = "LeaseIdMismatchWithContainerOperation",
  LeaseIdMismatchWithLeaseOperation = "LeaseIdMismatchWithLeaseOperation",
  LeaseIdMissing = "LeaseIdMissing",
  LeaseIsBreakingAndCannotBeAcquired = "LeaseIsBreakingAndCannotBeAcquired",
  LeaseIsBreakingAndCannotBeChanged = "LeaseIsBreakingAndCannotBeChanged",
  LeaseIsBrokenAndCannotBeRenewed = "LeaseIsBrokenAndCannotBeRenewed",
  LeaseLost = "LeaseLost",
  LeaseNotPresentWithBlobOperation = "LeaseNotPresentWithBlobOperation",
  LeaseNotPresentWithContainerOperation = "LeaseNotPresentWithContainerOperation",
  LeaseNotPresentWithLeaseOperation = "LeaseNotPresentWithLeaseOperation",
  MaxBlobSizeConditionNotMet = "MaxBlobSizeConditionNotMet",
  NoAuthenticationInformation = "NoAuthenticationInformation",
  NoPendingCopyOperation = "NoPendingCopyOperation",
  OperationNotAllowedOnIncrementalCopyBlob = "OperationNotAllowedOnIncrementalCopyBlob",
  PendingCopyOperation = "PendingCopyOperation",
  PreviousSnapshotCannotBeNewer = "PreviousSnapshotCannotBeNewer",
  PreviousSnapshotNotFound = "PreviousSnapshotNotFound",
  PreviousSnapshotOperationNotSupported = "PreviousSnapshotOperationNotSupported",
  SequenceNumberConditionNotMet = "SequenceNumberConditionNotMet",
  SequenceNumberIncrementTooLarge = "SequenceNumberIncrementTooLarge",
  SnapshotCountExceeded = "SnapshotCountExceeded",
  SnaphotOperationRateExceeded = "SnaphotOperationRateExceeded",
  SnapshotsPresent = "SnapshotsPresent",
  SourceConditionNotMet = "SourceConditionNotMet",
  SystemInUse = "SystemInUse",
  TargetConditionNotMet = "TargetConditionNotMet",
  UnauthorizedBlobOverwrite = "UnauthorizedBlobOverwrite",
  BlobBeingRehydrated = "BlobBeingRehydrated",
  BlobArchived = "BlobArchived",
  BlobNotArchived = "BlobNotArchived",
  AuthorizationSourceIPMismatch = "AuthorizationSourceIPMismatch",
  AuthorizationProtocolMismatch = "AuthorizationProtocolMismatch",
  AuthorizationPermissionMismatch = "AuthorizationPermissionMismatch",
  AuthorizationServiceMismatch = "AuthorizationServiceMismatch",
  AuthorizationResourceTypeMismatch = "AuthorizationResourceTypeMismatch"
}

/**
 * Defines values for StorageErrorCode. \
 * {@link KnownStorageErrorCode} can be used interchangeably with StorageErrorCode,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **AccountAlreadyExists** \
 * **AccountBeingCreated** \
 * **AccountIsDisabled** \
 * **AuthenticationFailed** \
 * **AuthorizationFailure** \
 * **ConditionHeadersNotSupported** \
 * **ConditionNotMet** \
 * **EmptyMetadataKey** \
 * **InsufficientAccountPermissions** \
 * **InternalError** \
 * **InvalidAuthenticationInfo** \
 * **InvalidHeaderValue** \
 * **InvalidHttpVerb** \
 * **InvalidInput** \
 * **InvalidMd5** \
 * **InvalidMetadata** \
 * **InvalidQueryParameterValue** \
 * **InvalidRange** \
 * **InvalidResourceName** \
 * **InvalidUri** \
 * **InvalidXmlDocument** \
 * **InvalidXmlNodeValue** \
 * **Md5Mismatch** \
 * **MetadataTooLarge** \
 * **MissingContentLengthHeader** \
 * **MissingRequiredQueryParameter** \
 * **MissingRequiredHeader** \
 * **MissingRequiredXmlNode** \
 * **MultipleConditionHeadersNotSupported** \
 * **OperationTimedOut** \
 * **OutOfRangeInput** \
 * **OutOfRangeQueryParameterValue** \
 * **RequestBodyTooLarge** \
 * **ResourceTypeMismatch** \
 * **RequestUrlFailedToParse** \
 * **ResourceAlreadyExists** \
 * **ResourceNotFound** \
 * **ServerBusy** \
 * **UnsupportedHeader** \
 * **UnsupportedXmlNode** \
 * **UnsupportedQueryParameter** \
 * **UnsupportedHttpVerb** \
 * **AppendPositionConditionNotMet** \
 * **BlobAlreadyExists** \
 * **BlobImmutableDueToPolicy** \
 * **BlobNotFound** \
 * **BlobOverwritten** \
 * **BlobTierInadequateForContentLength** \
 * **BlockCountExceedsLimit** \
 * **BlockListTooLong** \
 * **CannotChangeToLowerTier** \
 * **CannotVerifyCopySource** \
 * **ContainerAlreadyExists** \
 * **ContainerBeingDeleted** \
 * **ContainerDisabled** \
 * **ContainerNotFound** \
 * **ContentLengthLargerThanTierLimit** \
 * **CopyAcrossAccountsNotSupported** \
 * **CopyIdMismatch** \
 * **FeatureVersionMismatch** \
 * **IncrementalCopyBlobMismatch** \
 * **IncrementalCopyOfEralierVersionSnapshotNotAllowed** \
 * **IncrementalCopySourceMustBeSnapshot** \
 * **InfiniteLeaseDurationRequired** \
 * **InvalidBlobOrBlock** \
 * **InvalidBlobTier** \
 * **InvalidBlobType** \
 * **InvalidBlockId** \
 * **InvalidBlockList** \
 * **InvalidOperation** \
 * **InvalidPageRange** \
 * **InvalidSourceBlobType** \
 * **InvalidSourceBlobUrl** \
 * **InvalidVersionForPageBlobOperation** \
 * **LeaseAlreadyPresent** \
 * **LeaseAlreadyBroken** \
 * **LeaseIdMismatchWithBlobOperation** \
 * **LeaseIdMismatchWithContainerOperation** \
 * **LeaseIdMismatchWithLeaseOperation** \
 * **LeaseIdMissing** \
 * **LeaseIsBreakingAndCannotBeAcquired** \
 * **LeaseIsBreakingAndCannotBeChanged** \
 * **LeaseIsBrokenAndCannotBeRenewed** \
 * **LeaseLost** \
 * **LeaseNotPresentWithBlobOperation** \
 * **LeaseNotPresentWithContainerOperation** \
 * **LeaseNotPresentWithLeaseOperation** \
 * **MaxBlobSizeConditionNotMet** \
 * **NoAuthenticationInformation** \
 * **NoPendingCopyOperation** \
 * **OperationNotAllowedOnIncrementalCopyBlob** \
 * **PendingCopyOperation** \
 * **PreviousSnapshotCannotBeNewer** \
 * **PreviousSnapshotNotFound** \
 * **PreviousSnapshotOperationNotSupported** \
 * **SequenceNumberConditionNotMet** \
 * **SequenceNumberIncrementTooLarge** \
 * **SnapshotCountExceeded** \
 * **SnaphotOperationRateExceeded** \
 * **SnapshotsPresent** \
 * **SourceConditionNotMet** \
 * **SystemInUse** \
 * **TargetConditionNotMet** \
 * **UnauthorizedBlobOverwrite** \
 * **BlobBeingRehydrated** \
 * **BlobArchived** \
 * **BlobNotArchived** \
 * **AuthorizationSourceIPMismatch** \
 * **AuthorizationProtocolMismatch** \
 * **AuthorizationPermissionMismatch** \
 * **AuthorizationServiceMismatch** \
 * **AuthorizationResourceTypeMismatch**
 */
export type StorageErrorCode = string;
/** Defines values for ListContainersIncludeType. */
export type ListContainersIncludeType = "metadata" | "deleted";
/** Defines values for LeaseStatusType. */
export type LeaseStatusType = "locked" | "unlocked";
/** Defines values for LeaseStateType. */
export type LeaseStateType =
  | "available"
  | "leased"
  | "expired"
  | "breaking"
  | "broken";
/** Defines values for LeaseDurationType. */
export type LeaseDurationType = "infinite" | "fixed";
/** Defines values for SkuName. */
export type SkuName =
  | "Standard_LRS"
  | "Standard_GRS"
  | "Standard_RAGRS"
  | "Standard_ZRS"
  | "Premium_LRS";
/** Defines values for AccountKind. */
export type AccountKind =
  | "Storage"
  | "BlobStorage"
  | "StorageV2"
  | "FileStorage"
  | "BlockBlobStorage";
/** Defines values for ListBlobsIncludeItem. */
export type ListBlobsIncludeItem =
  | "copy"
  | "deleted"
  | "metadata"
  | "snapshots"
  | "uncommittedblobs"
  | "versions"
  | "tags";
/** Defines values for BlobType. */
export type BlobType = "BlockBlob" | "PageBlob" | "AppendBlob";
/** Defines values for CopyStatusType. */
export type CopyStatusType = "pending" | "success" | "aborted" | "failed";
/** Defines values for PathRenameMode. */
export type PathRenameMode = "legacy" | "posix";
/** Defines values for DeleteSnapshotsOptionType. */
export type DeleteSnapshotsOptionType = "include" | "only";
/** Defines values for BlockListType. */
export type BlockListType = "committed" | "uncommitted" | "all";
/** Defines values for SequenceNumberActionType. */
export type SequenceNumberActionType = "max" | "update" | "increment";
/** Defines values for QueryFormatType. */
export type QueryFormatType = "delimited" | "json" | "arrow";

/** Optional parameters. */
export interface ServiceSetPropertiesOptionalParams
  extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the setProperties operation. */
export type ServiceSetPropertiesResponse = ServiceSetPropertiesHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ServiceSetPropertiesHeaders;
  };
};

/** Optional parameters. */
export interface ServiceGetPropertiesOptionalParams
  extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the getProperties operation. */
export type ServiceGetPropertiesResponse = ServiceGetPropertiesHeaders &
  BlobServiceProperties & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: BlobServiceProperties;
      /** The parsed HTTP response headers. */
      parsedHeaders: ServiceGetPropertiesHeaders;
    };
  };

/** Optional parameters. */
export interface ServiceGetStatisticsOptionalParams
  extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the getStatistics operation. */
export type ServiceGetStatisticsResponse = ServiceGetStatisticsHeaders &
  BlobServiceStatistics & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: BlobServiceStatistics;
      /** The parsed HTTP response headers. */
      parsedHeaders: ServiceGetStatisticsHeaders;
    };
  };

/** Optional parameters. */
export interface ServiceListContainersSegmentOptionalParams
  extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Filters the results to return only containers whose name begins with the specified prefix. */
  prefix?: string;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the ContinuationToken value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. Note that if the listing operation crosses a partition boundary, then the service will return a continuation token for retrieving the remainder of the results. For this reason, it is possible that the service will return fewer results than specified by maxresults, or than the default of 5000. */
  maxPageSize?: number;
  /** Include this parameter to specify that the container's metadata be returned as part of the response body. */
  include?: ListContainersIncludeType[];
}

/** Contains response data for the listContainersSegment operation. */
export type ServiceListContainersSegmentResponse = ServiceListContainersSegmentHeaders &
  ListContainersSegmentResponse & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: ListContainersSegmentResponse;
      /** The parsed HTTP response headers. */
      parsedHeaders: ServiceListContainersSegmentHeaders;
    };
  };

/** Optional parameters. */
export interface ServiceGetUserDelegationKeyOptionalParams
  extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the getUserDelegationKey operation. */
export type ServiceGetUserDelegationKeyResponse = ServiceGetUserDelegationKeyHeaders &
  UserDelegationKey & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: UserDelegationKey;
      /** The parsed HTTP response headers. */
      parsedHeaders: ServiceGetUserDelegationKeyHeaders;
    };
  };

/** Contains response data for the getAccountInfo operation. */
export type ServiceGetAccountInfoResponse = ServiceGetAccountInfoHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ServiceGetAccountInfoHeaders;
  };
};

/** Optional parameters. */
export interface ServiceSubmitBatchOptionalParams
  extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the submitBatch operation. */
export type ServiceSubmitBatchResponse = ServiceSubmitBatchHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ServiceSubmitBatchHeaders;
  };
};

/** Optional parameters. */
export interface ServiceFilterBlobsOptionalParams
  extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the ContinuationToken value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. Note that if the listing operation crosses a partition boundary, then the service will return a continuation token for retrieving the remainder of the results. For this reason, it is possible that the service will return fewer results than specified by maxresults, or than the default of 5000. */
  maxPageSize?: number;
  /** Filters the results to return only to return only blobs whose tags match the specified expression. */
  where?: string;
}

/** Contains response data for the filterBlobs operation. */
export type ServiceFilterBlobsResponse = ServiceFilterBlobsHeaders &
  FilterBlobSegment & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: FilterBlobSegment;
      /** The parsed HTTP response headers. */
      parsedHeaders: ServiceFilterBlobsHeaders;
    };
  };

/** Optional parameters. */
export interface ServiceListContainersSegmentNextOptionalParams
  extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Filters the results to return only containers whose name begins with the specified prefix. */
  prefix?: string;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the ContinuationToken value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. Note that if the listing operation crosses a partition boundary, then the service will return a continuation token for retrieving the remainder of the results. For this reason, it is possible that the service will return fewer results than specified by maxresults, or than the default of 5000. */
  maxPageSize?: number;
  /** Include this parameter to specify that the container's metadata be returned as part of the response body. */
  include?: ListContainersIncludeType[];
}

/** Contains response data for the listContainersSegmentNext operation. */
export type ServiceListContainersSegmentNextResponse = ServiceListContainersSegmentNextHeaders &
  ListContainersSegmentResponse & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: ListContainersSegmentResponse;
      /** The parsed HTTP response headers. */
      parsedHeaders: ServiceListContainersSegmentNextHeaders;
    };
  };

/** Optional parameters. */
export interface ContainerCreateOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  containerEncryptionScope?: ContainerEncryptionScope;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Specifies a user-defined name-value pair associated with the blob. If no name-value pairs are specified, the operation will copy the metadata from the source blob or file to the destination blob. If one or more name-value pairs are specified, the destination blob is created with the specified metadata, and metadata is not copied from the source blob or file. Note that beginning with version 2009-09-19, metadata names must adhere to the naming rules for C# identifiers. See Naming and Referencing Containers, Blobs, and Metadata for more information. */
  metadata?: { [propertyName: string]: string };
  /** Specifies whether data in the container may be accessed publicly and the level of access */
  access?: PublicAccessType;
}

/** Contains response data for the create operation. */
export type ContainerCreateResponse = ContainerCreateHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ContainerCreateHeaders;
  };
};

/** Optional parameters. */
export interface ContainerGetPropertiesOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the getProperties operation. */
export type ContainerGetPropertiesResponse = ContainerGetPropertiesHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ContainerGetPropertiesHeaders;
  };
};

/** Optional parameters. */
export interface ContainerDeleteOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the delete operation. */
export type ContainerDeleteResponse = ContainerDeleteHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ContainerDeleteHeaders;
  };
};

/** Optional parameters. */
export interface ContainerSetMetadataOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Specifies a user-defined name-value pair associated with the blob. If no name-value pairs are specified, the operation will copy the metadata from the source blob or file to the destination blob. If one or more name-value pairs are specified, the destination blob is created with the specified metadata, and metadata is not copied from the source blob or file. Note that beginning with version 2009-09-19, metadata names must adhere to the naming rules for C# identifiers. See Naming and Referencing Containers, Blobs, and Metadata for more information. */
  metadata?: { [propertyName: string]: string };
}

/** Contains response data for the setMetadata operation. */
export type ContainerSetMetadataResponse = ContainerSetMetadataHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ContainerSetMetadataHeaders;
  };
};

/** Optional parameters. */
export interface ContainerGetAccessPolicyOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the getAccessPolicy operation. */
export type ContainerGetAccessPolicyResponse = ContainerGetAccessPolicyHeaders &
  SignedIdentifier[] & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: SignedIdentifier[];
      /** The parsed HTTP response headers. */
      parsedHeaders: ContainerGetAccessPolicyHeaders;
    };
  };

/** Optional parameters. */
export interface ContainerSetAccessPolicyOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Specifies whether data in the container may be accessed publicly and the level of access */
  access?: PublicAccessType;
  /** the acls for the container */
  containerAcl?: SignedIdentifier[];
}

/** Contains response data for the setAccessPolicy operation. */
export type ContainerSetAccessPolicyResponse = ContainerSetAccessPolicyHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ContainerSetAccessPolicyHeaders;
  };
};

/** Optional parameters. */
export interface ContainerRestoreOptionalParams
  extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional.  Version 2019-12-12 and later.  Specifies the name of the deleted container to restore. */
  deletedContainerName?: string;
  /** Optional.  Version 2019-12-12 and later.  Specifies the version of the deleted container to restore. */
  deletedContainerVersion?: string;
}

/** Contains response data for the restore operation. */
export type ContainerRestoreResponse = ContainerRestoreHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ContainerRestoreHeaders;
  };
};

/** Optional parameters. */
export interface ContainerRenameOptionalParams
  extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** A lease ID for the source path. If specified, the source path must have an active lease and the lease ID must match. */
  sourceLeaseId?: string;
}

/** Contains response data for the rename operation. */
export type ContainerRenameResponse = ContainerRenameHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ContainerRenameHeaders;
  };
};

/** Optional parameters. */
export interface ContainerSubmitBatchOptionalParams
  extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the submitBatch operation. */
export type ContainerSubmitBatchResponse = ContainerSubmitBatchHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ContainerSubmitBatchHeaders;
  };
};

/** Optional parameters. */
export interface ContainerAcquireLeaseOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Specifies the duration of the lease, in seconds, or negative one (-1) for a lease that never expires. A non-infinite lease can be between 15 and 60 seconds. A lease duration cannot be changed using renew or change. */
  duration?: number;
  /** Proposed lease ID, in a GUID string format. The Blob service returns 400 (Invalid request) if the proposed lease ID is not in the correct format. See Guid Constructor (String) for a list of valid GUID string formats. */
  proposedLeaseId?: string;
}

/** Contains response data for the acquireLease operation. */
export type ContainerAcquireLeaseResponse = ContainerAcquireLeaseHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ContainerAcquireLeaseHeaders;
  };
};

/** Optional parameters. */
export interface ContainerReleaseLeaseOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the releaseLease operation. */
export type ContainerReleaseLeaseResponse = ContainerReleaseLeaseHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ContainerReleaseLeaseHeaders;
  };
};

/** Optional parameters. */
export interface ContainerRenewLeaseOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the renewLease operation. */
export type ContainerRenewLeaseResponse = ContainerRenewLeaseHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ContainerRenewLeaseHeaders;
  };
};

/** Optional parameters. */
export interface ContainerBreakLeaseOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** For a break operation, proposed duration the lease should continue before it is broken, in seconds, between 0 and 60. This break period is only used if it is shorter than the time remaining on the lease. If longer, the time remaining on the lease is used. A new lease will not be available before the break period has expired, but the lease may be held for longer than the break period. If this header does not appear with a break operation, a fixed-duration lease breaks after the remaining lease period elapses, and an infinite lease breaks immediately. */
  breakPeriod?: number;
}

/** Contains response data for the breakLease operation. */
export type ContainerBreakLeaseResponse = ContainerBreakLeaseHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ContainerBreakLeaseHeaders;
  };
};

/** Optional parameters. */
export interface ContainerChangeLeaseOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the changeLease operation. */
export type ContainerChangeLeaseResponse = ContainerChangeLeaseHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ContainerChangeLeaseHeaders;
  };
};

/** Optional parameters. */
export interface ContainerListBlobFlatSegmentOptionalParams
  extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Filters the results to return only containers whose name begins with the specified prefix. */
  prefix?: string;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the ContinuationToken value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. Note that if the listing operation crosses a partition boundary, then the service will return a continuation token for retrieving the remainder of the results. For this reason, it is possible that the service will return fewer results than specified by maxresults, or than the default of 5000. */
  maxPageSize?: number;
  /** Include this parameter to specify one or more datasets to include in the response. */
  include?: ListBlobsIncludeItem[];
}

/** Contains response data for the listBlobFlatSegment operation. */
export type ContainerListBlobFlatSegmentResponse = ContainerListBlobFlatSegmentHeaders &
  ListBlobsFlatSegmentResponse & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: ListBlobsFlatSegmentResponse;
      /** The parsed HTTP response headers. */
      parsedHeaders: ContainerListBlobFlatSegmentHeaders;
    };
  };

/** Optional parameters. */
export interface ContainerListBlobHierarchySegmentOptionalParams
  extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Filters the results to return only containers whose name begins with the specified prefix. */
  prefix?: string;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the ContinuationToken value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. Note that if the listing operation crosses a partition boundary, then the service will return a continuation token for retrieving the remainder of the results. For this reason, it is possible that the service will return fewer results than specified by maxresults, or than the default of 5000. */
  maxPageSize?: number;
  /** Include this parameter to specify one or more datasets to include in the response. */
  include?: ListBlobsIncludeItem[];
}

/** Contains response data for the listBlobHierarchySegment operation. */
export type ContainerListBlobHierarchySegmentResponse = ContainerListBlobHierarchySegmentHeaders &
  ListBlobsHierarchySegmentResponse & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: ListBlobsHierarchySegmentResponse;
      /** The parsed HTTP response headers. */
      parsedHeaders: ContainerListBlobHierarchySegmentHeaders;
    };
  };

/** Contains response data for the getAccountInfo operation. */
export type ContainerGetAccountInfoResponse = ContainerGetAccountInfoHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: ContainerGetAccountInfoHeaders;
  };
};

/** Optional parameters. */
export interface ContainerListBlobFlatSegmentNextOptionalParams
  extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Filters the results to return only containers whose name begins with the specified prefix. */
  prefix?: string;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the ContinuationToken value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. Note that if the listing operation crosses a partition boundary, then the service will return a continuation token for retrieving the remainder of the results. For this reason, it is possible that the service will return fewer results than specified by maxresults, or than the default of 5000. */
  maxPageSize?: number;
  /** Include this parameter to specify one or more datasets to include in the response. */
  include?: ListBlobsIncludeItem[];
}

/** Contains response data for the listBlobFlatSegmentNext operation. */
export type ContainerListBlobFlatSegmentNextResponse = ContainerListBlobFlatSegmentNextHeaders &
  ListBlobsFlatSegmentResponse & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: ListBlobsFlatSegmentResponse;
      /** The parsed HTTP response headers. */
      parsedHeaders: ContainerListBlobFlatSegmentNextHeaders;
    };
  };

/** Optional parameters. */
export interface ContainerListBlobHierarchySegmentNextOptionalParams
  extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Filters the results to return only containers whose name begins with the specified prefix. */
  prefix?: string;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the ContinuationToken value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. Note that if the listing operation crosses a partition boundary, then the service will return a continuation token for retrieving the remainder of the results. For this reason, it is possible that the service will return fewer results than specified by maxresults, or than the default of 5000. */
  maxPageSize?: number;
  /** Include this parameter to specify one or more datasets to include in the response. */
  include?: ListBlobsIncludeItem[];
}

/** Contains response data for the listBlobHierarchySegmentNext operation. */
export type ContainerListBlobHierarchySegmentNextResponse = ContainerListBlobHierarchySegmentNextHeaders &
  ListBlobsHierarchySegmentResponse & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: ListBlobsHierarchySegmentResponse;
      /** The parsed HTTP response headers. */
      parsedHeaders: ContainerListBlobHierarchySegmentNextHeaders;
    };
  };

/** Optional parameters. */
export interface DirectoryCreateOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  directoryHttpHeaders?: DirectoryHttpHeaders;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional.  User-defined properties to be stored with the file or directory, in the format of a comma-separated list of name and value pairs "n1=v1, n2=v2, ...", where each value is base64 encoded. */
  directoryProperties?: string;
  /** Optional and only valid if Hierarchical Namespace is enabled for the account. Sets POSIX access permissions for the file owner, the file owning group, and others. Each class may be granted read, write, or execute permission.  The sticky bit is also supported.  Both symbolic (rwxrw-rw-) and 4-digit octal notation (e.g. 0766) are supported. */
  posixPermissions?: string;
  /** Only valid if Hierarchical Namespace is enabled for the account. This umask restricts permission settings for file and directory, and will only be applied when default Acl does not exist in parent directory. If the umask bit has set, it means that the corresponding permission will be disabled. Otherwise the corresponding permission will be determined by the permission. A 4-digit octal notation (e.g. 0022) is supported here. If no umask was specified, a default umask - 0027 will be used. */
  posixUmask?: string;
}

/** Contains response data for the create operation. */
export type DirectoryCreateResponse = DirectoryCreateHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: DirectoryCreateHeaders;
  };
};

/** Optional parameters. */
export interface DirectoryRenameOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  directoryHttpHeaders?: DirectoryHttpHeaders;
  /** Parameter group */
  sourceModifiedAccessConditions?: SourceModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** A lease ID for the source path. If specified, the source path must have an active lease and the lease ID must match. */
  sourceLeaseId?: string;
  /** Optional.  User-defined properties to be stored with the file or directory, in the format of a comma-separated list of name and value pairs "n1=v1, n2=v2, ...", where each value is base64 encoded. */
  directoryProperties?: string;
  /** Optional and only valid if Hierarchical Namespace is enabled for the account. Sets POSIX access permissions for the file owner, the file owning group, and others. Each class may be granted read, write, or execute permission.  The sticky bit is also supported.  Both symbolic (rwxrw-rw-) and 4-digit octal notation (e.g. 0766) are supported. */
  posixPermissions?: string;
  /** Only valid if Hierarchical Namespace is enabled for the account. This umask restricts permission settings for file and directory, and will only be applied when default Acl does not exist in parent directory. If the umask bit has set, it means that the corresponding permission will be disabled. Otherwise the corresponding permission will be determined by the permission. A 4-digit octal notation (e.g. 0022) is supported here. If no umask was specified, a default umask - 0027 will be used. */
  posixUmask?: string;
  /** When renaming a directory, the number of paths that are renamed with each invocation is limited.  If the number of paths to be renamed exceeds this limit, a continuation token is returned in this response header.  When a continuation token is returned in the response, it must be specified in a subsequent invocation of the rename operation to continue renaming the directory. */
  marker?: string;
  /** Determines the behavior of the rename operation */
  pathRenameMode?: PathRenameMode;
}

/** Contains response data for the rename operation. */
export type DirectoryRenameResponse = DirectoryRenameHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: DirectoryRenameHeaders;
  };
};

/** Optional parameters. */
export interface DirectoryDeleteOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** When renaming a directory, the number of paths that are renamed with each invocation is limited.  If the number of paths to be renamed exceeds this limit, a continuation token is returned in this response header.  When a continuation token is returned in the response, it must be specified in a subsequent invocation of the rename operation to continue renaming the directory. */
  marker?: string;
}

/** Contains response data for the delete operation. */
export type DirectoryDeleteResponse = DirectoryDeleteHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: DirectoryDeleteHeaders;
  };
};

/** Optional parameters. */
export interface DirectorySetAccessControlOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional and only valid if Hierarchical Namespace is enabled for the account. Sets POSIX access permissions for the file owner, the file owning group, and others. Each class may be granted read, write, or execute permission.  The sticky bit is also supported.  Both symbolic (rwxrw-rw-) and 4-digit octal notation (e.g. 0766) are supported. */
  posixPermissions?: string;
  /** Optional. The owner of the blob or directory. */
  owner?: string;
  /** Optional. The owning group of the blob or directory. */
  group?: string;
  /** Sets POSIX access control rights on files and directories. The value is a comma-separated list of access control entries. Each access control entry (ACE) consists of a scope, a type, a user or group identifier, and permissions in the format "[scope:][type]:[id]:[permissions]". */
  posixAcl?: string;
}

/** Contains response data for the setAccessControl operation. */
export type DirectorySetAccessControlResponse = DirectorySetAccessControlHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: DirectorySetAccessControlHeaders;
  };
};

/** Optional parameters. */
export interface DirectoryGetAccessControlOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Valid only when Hierarchical Namespace is enabled for the account. If "true", the identity values returned in the x-ms-owner, x-ms-group, and x-ms-acl response headers will be transformed from Azure Active Directory Object IDs to User Principal Names.  If "false", the values will be returned as Azure Active Directory Object IDs. The default value is false. */
  upn?: boolean;
}

/** Contains response data for the getAccessControl operation. */
export type DirectoryGetAccessControlResponse = DirectoryGetAccessControlHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: DirectoryGetAccessControlHeaders;
  };
};

/** Optional parameters. */
export interface BlobDownloadOptionalParams extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionId?: string;
  /** Return only the bytes of the blob in the specified range. */
  range?: string;
  /** When set to true and specified together with the Range, the service returns the MD5 hash for the range, as long as the range is less than or equal to 4 MB in size. */
  rangeGetContentMD5?: boolean;
  /** When set to true and specified together with the Range, the service returns the CRC64 hash for the range, as long as the range is less than or equal to 4 MB in size. */
  rangeGetContentCRC64?: boolean;
}

/** Contains response data for the download operation. */
export type BlobDownloadResponse = BlobDownloadHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobDownloadHeaders;
  };
};

/** Optional parameters. */
export interface BlobGetPropertiesOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionId?: string;
}

/** Contains response data for the getProperties operation. */
export type BlobGetPropertiesResponse = BlobGetPropertiesHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobGetPropertiesHeaders;
  };
};

/** Optional parameters. */
export interface BlobDeleteOptionalParams extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionId?: string;
  /** Required if the blob has associated snapshots. Specify one of the following two options: include: Delete the base blob and all of its snapshots. only: Delete only the blob's snapshots and not the blob itself */
  deleteSnapshots?: DeleteSnapshotsOptionType;
}

/** Contains response data for the delete operation. */
export type BlobDeleteResponse = BlobDeleteHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobDeleteHeaders;
  };
};

/** Optional parameters. */
export interface BlobSetAccessControlOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional and only valid if Hierarchical Namespace is enabled for the account. Sets POSIX access permissions for the file owner, the file owning group, and others. Each class may be granted read, write, or execute permission.  The sticky bit is also supported.  Both symbolic (rwxrw-rw-) and 4-digit octal notation (e.g. 0766) are supported. */
  posixPermissions?: string;
  /** Optional. The owner of the blob or directory. */
  owner?: string;
  /** Optional. The owning group of the blob or directory. */
  group?: string;
  /** Sets POSIX access control rights on files and directories. The value is a comma-separated list of access control entries. Each access control entry (ACE) consists of a scope, a type, a user or group identifier, and permissions in the format "[scope:][type]:[id]:[permissions]". */
  posixAcl?: string;
}

/** Contains response data for the setAccessControl operation. */
export type BlobSetAccessControlResponse = BlobSetAccessControlHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobSetAccessControlHeaders;
  };
};

/** Optional parameters. */
export interface BlobGetAccessControlOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Valid only when Hierarchical Namespace is enabled for the account. If "true", the identity values returned in the x-ms-owner, x-ms-group, and x-ms-acl response headers will be transformed from Azure Active Directory Object IDs to User Principal Names.  If "false", the values will be returned as Azure Active Directory Object IDs. The default value is false. */
  upn?: boolean;
}

/** Contains response data for the getAccessControl operation. */
export type BlobGetAccessControlResponse = BlobGetAccessControlHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobGetAccessControlHeaders;
  };
};

/** Optional parameters. */
export interface BlobRenameOptionalParams extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  directoryHttpHeaders?: DirectoryHttpHeaders;
  /** Parameter group */
  sourceModifiedAccessConditions?: SourceModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** A lease ID for the source path. If specified, the source path must have an active lease and the lease ID must match. */
  sourceLeaseId?: string;
  /** Optional.  User-defined properties to be stored with the file or directory, in the format of a comma-separated list of name and value pairs "n1=v1, n2=v2, ...", where each value is base64 encoded. */
  directoryProperties?: string;
  /** Optional and only valid if Hierarchical Namespace is enabled for the account. Sets POSIX access permissions for the file owner, the file owning group, and others. Each class may be granted read, write, or execute permission.  The sticky bit is also supported.  Both symbolic (rwxrw-rw-) and 4-digit octal notation (e.g. 0766) are supported. */
  posixPermissions?: string;
  /** Only valid if Hierarchical Namespace is enabled for the account. This umask restricts permission settings for file and directory, and will only be applied when default Acl does not exist in parent directory. If the umask bit has set, it means that the corresponding permission will be disabled. Otherwise the corresponding permission will be determined by the permission. A 4-digit octal notation (e.g. 0022) is supported here. If no umask was specified, a default umask - 0027 will be used. */
  posixUmask?: string;
  /** Determines the behavior of the rename operation */
  pathRenameMode?: PathRenameMode;
}

/** Contains response data for the rename operation. */
export type BlobRenameResponse = BlobRenameHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobRenameHeaders;
  };
};

/** Optional parameters. */
export interface BlobUndeleteOptionalParams extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the undelete operation. */
export type BlobUndeleteResponse = BlobUndeleteHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobUndeleteHeaders;
  };
};

/** Optional parameters. */
export interface BlobSetExpiryOptionalParams extends coreHttp.OperationOptions {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The time to set the blob to expiry */
  expiresOn?: string;
}

/** Contains response data for the setExpiry operation. */
export type BlobSetExpiryResponse = BlobSetExpiryHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobSetExpiryHeaders;
  };
};

/** Optional parameters. */
export interface BlobSetHttpHeadersOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  blobHttpHeaders?: BlobHttpHeaders;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the setHttpHeaders operation. */
export type BlobSetHttpHeadersResponse = BlobSetHttpHeadersHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobSetHttpHeadersHeaders;
  };
};

/** Optional parameters. */
export interface BlobSetMetadataOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Specifies a user-defined name-value pair associated with the blob. If no name-value pairs are specified, the operation will copy the metadata from the source blob or file to the destination blob. If one or more name-value pairs are specified, the destination blob is created with the specified metadata, and metadata is not copied from the source blob or file. Note that beginning with version 2009-09-19, metadata names must adhere to the naming rules for C# identifiers. See Naming and Referencing Containers, Blobs, and Metadata for more information. */
  metadata?: { [propertyName: string]: string };
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
}

/** Contains response data for the setMetadata operation. */
export type BlobSetMetadataResponse = BlobSetMetadataHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobSetMetadataHeaders;
  };
};

/** Optional parameters. */
export interface BlobAcquireLeaseOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Specifies the duration of the lease, in seconds, or negative one (-1) for a lease that never expires. A non-infinite lease can be between 15 and 60 seconds. A lease duration cannot be changed using renew or change. */
  duration?: number;
  /** Proposed lease ID, in a GUID string format. The Blob service returns 400 (Invalid request) if the proposed lease ID is not in the correct format. See Guid Constructor (String) for a list of valid GUID string formats. */
  proposedLeaseId?: string;
}

/** Contains response data for the acquireLease operation. */
export type BlobAcquireLeaseResponse = BlobAcquireLeaseHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobAcquireLeaseHeaders;
  };
};

/** Optional parameters. */
export interface BlobReleaseLeaseOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the releaseLease operation. */
export type BlobReleaseLeaseResponse = BlobReleaseLeaseHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobReleaseLeaseHeaders;
  };
};

/** Optional parameters. */
export interface BlobRenewLeaseOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the renewLease operation. */
export type BlobRenewLeaseResponse = BlobRenewLeaseHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobRenewLeaseHeaders;
  };
};

/** Optional parameters. */
export interface BlobChangeLeaseOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the changeLease operation. */
export type BlobChangeLeaseResponse = BlobChangeLeaseHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobChangeLeaseHeaders;
  };
};

/** Optional parameters. */
export interface BlobBreakLeaseOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** For a break operation, proposed duration the lease should continue before it is broken, in seconds, between 0 and 60. This break period is only used if it is shorter than the time remaining on the lease. If longer, the time remaining on the lease is used. A new lease will not be available before the break period has expired, but the lease may be held for longer than the break period. If this header does not appear with a break operation, a fixed-duration lease breaks after the remaining lease period elapses, and an infinite lease breaks immediately. */
  breakPeriod?: number;
}

/** Contains response data for the breakLease operation. */
export type BlobBreakLeaseResponse = BlobBreakLeaseHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobBreakLeaseHeaders;
  };
};

/** Optional parameters. */
export interface BlobCreateSnapshotOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Specifies a user-defined name-value pair associated with the blob. If no name-value pairs are specified, the operation will copy the metadata from the source blob or file to the destination blob. If one or more name-value pairs are specified, the destination blob is created with the specified metadata, and metadata is not copied from the source blob or file. Note that beginning with version 2009-09-19, metadata names must adhere to the naming rules for C# identifiers. See Naming and Referencing Containers, Blobs, and Metadata for more information. */
  metadata?: { [propertyName: string]: string };
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
}

/** Contains response data for the createSnapshot operation. */
export type BlobCreateSnapshotResponse = BlobCreateSnapshotHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobCreateSnapshotHeaders;
  };
};

/** Optional parameters. */
export interface BlobStartCopyFromURLOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  sourceModifiedAccessConditions?: SourceModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Specifies a user-defined name-value pair associated with the blob. If no name-value pairs are specified, the operation will copy the metadata from the source blob or file to the destination blob. If one or more name-value pairs are specified, the destination blob is created with the specified metadata, and metadata is not copied from the source blob or file. Note that beginning with version 2009-09-19, metadata names must adhere to the naming rules for C# identifiers. See Naming and Referencing Containers, Blobs, and Metadata for more information. */
  metadata?: { [propertyName: string]: string };
  /** Optional. Indicates the tier to be set on the blob. */
  tier?: AccessTier;
  /** Optional: Indicates the priority with which to rehydrate an archived blob. */
  rehydratePriority?: RehydratePriority;
  /** Optional.  Used to set blob tags in various blob operations. */
  blobTagsString?: string;
  /** Overrides the sealed state of the destination blob.  Service version 2019-12-12 and newer. */
  sealBlob?: boolean;
}

/** Contains response data for the startCopyFromURL operation. */
export type BlobStartCopyFromURLResponse = BlobStartCopyFromURLHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobStartCopyFromURLHeaders;
  };
};

/** Optional parameters. */
export interface BlobCopyFromURLOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  sourceModifiedAccessConditions?: SourceModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Specifies a user-defined name-value pair associated with the blob. If no name-value pairs are specified, the operation will copy the metadata from the source blob or file to the destination blob. If one or more name-value pairs are specified, the destination blob is created with the specified metadata, and metadata is not copied from the source blob or file. Note that beginning with version 2009-09-19, metadata names must adhere to the naming rules for C# identifiers. See Naming and Referencing Containers, Blobs, and Metadata for more information. */
  metadata?: { [propertyName: string]: string };
  /** Optional. Indicates the tier to be set on the blob. */
  tier?: AccessTier;
  /** Optional.  Used to set blob tags in various blob operations. */
  blobTagsString?: string;
  /** Specify the md5 calculated for the range of bytes that must be read from the copy source. */
  sourceContentMD5?: Uint8Array;
}

/** Contains response data for the copyFromURL operation. */
export type BlobCopyFromURLResponse = BlobCopyFromURLHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobCopyFromURLHeaders;
  };
};

/** Optional parameters. */
export interface BlobAbortCopyFromURLOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the abortCopyFromURL operation. */
export type BlobAbortCopyFromURLResponse = BlobAbortCopyFromURLHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobAbortCopyFromURLHeaders;
  };
};

/** Optional parameters. */
export interface BlobSetTierOptionalParams extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionId?: string;
  /** Optional: Indicates the priority with which to rehydrate an archived blob. */
  rehydratePriority?: RehydratePriority;
}

/** Contains response data for the setTier operation. */
export type BlobSetTierResponse = BlobSetTierHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobSetTierHeaders;
  };
};

/** Contains response data for the getAccountInfo operation. */
export type BlobGetAccountInfoResponse = BlobGetAccountInfoHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobGetAccountInfoHeaders;
  };
};

/** Optional parameters. */
export interface BlobQueryOptionalParams extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** the query request */
  queryRequest?: QueryRequest;
}

/** Contains response data for the query operation. */
export type BlobQueryResponse = BlobQueryHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobQueryHeaders;
  };
};

/** Optional parameters. */
export interface BlobGetTagsOptionalParams extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionId?: string;
}

/** Contains response data for the getTags operation. */
export type BlobGetTagsResponse = BlobGetTagsHeaders &
  BlobTags & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: BlobTags;
      /** The parsed HTTP response headers. */
      parsedHeaders: BlobGetTagsHeaders;
    };
  };

/** Optional parameters. */
export interface BlobSetTagsOptionalParams extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionId?: string;
  /** Blob tags */
  tags?: BlobTags;
  /** Specify the transactional md5 for the body, to be validated by the service. */
  transactionalContentMD5?: Uint8Array;
  /** Specify the transactional crc64 for the body, to be validated by the service. */
  transactionalContentCrc64?: Uint8Array;
}

/** Contains response data for the setTags operation. */
export type BlobSetTagsResponse = BlobSetTagsHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobSetTagsHeaders;
  };
};

/** Optional parameters. */
export interface PageBlobCreateOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** Parameter group */
  blobHttpHeaders?: BlobHttpHeaders;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Specifies a user-defined name-value pair associated with the blob. If no name-value pairs are specified, the operation will copy the metadata from the source blob or file to the destination blob. If one or more name-value pairs are specified, the destination blob is created with the specified metadata, and metadata is not copied from the source blob or file. Note that beginning with version 2009-09-19, metadata names must adhere to the naming rules for C# identifiers. See Naming and Referencing Containers, Blobs, and Metadata for more information. */
  metadata?: { [propertyName: string]: string };
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
  /** Optional. Indicates the tier to be set on the blob. */
  tier?: AccessTier;
  /** Optional.  Used to set blob tags in various blob operations. */
  blobTagsString?: string;
  /** Set for page blobs only. The sequence number is a user-controlled value that you can use to track requests. The value of the sequence number must be between 0 and 2^63 - 1. */
  blobSequenceNumber?: number;
}

/** Contains response data for the create operation. */
export type PageBlobCreateResponse = PageBlobCreateHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: PageBlobCreateHeaders;
  };
};

/** Optional parameters. */
export interface PageBlobUploadPagesOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** Parameter group */
  sequenceNumberAccessConditions?: SequenceNumberAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Return only the bytes of the blob in the specified range. */
  range?: string;
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
  /** Specify the transactional md5 for the body, to be validated by the service. */
  transactionalContentMD5?: Uint8Array;
  /** Specify the transactional crc64 for the body, to be validated by the service. */
  transactionalContentCrc64?: Uint8Array;
}

/** Contains response data for the uploadPages operation. */
export type PageBlobUploadPagesResponse = PageBlobUploadPagesHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: PageBlobUploadPagesHeaders;
  };
};

/** Optional parameters. */
export interface PageBlobClearPagesOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** Parameter group */
  sequenceNumberAccessConditions?: SequenceNumberAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Return only the bytes of the blob in the specified range. */
  range?: string;
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
}

/** Contains response data for the clearPages operation. */
export type PageBlobClearPagesResponse = PageBlobClearPagesHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: PageBlobClearPagesHeaders;
  };
};

/** Optional parameters. */
export interface PageBlobUploadPagesFromURLOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  sourceModifiedAccessConditions?: SourceModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** Parameter group */
  sequenceNumberAccessConditions?: SequenceNumberAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
  /** Specify the md5 calculated for the range of bytes that must be read from the copy source. */
  sourceContentMD5?: Uint8Array;
  /** Specify the crc64 calculated for the range of bytes that must be read from the copy source. */
  sourceContentCrc64?: Uint8Array;
}

/** Contains response data for the uploadPagesFromURL operation. */
export type PageBlobUploadPagesFromURLResponse = PageBlobUploadPagesFromURLHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: PageBlobUploadPagesFromURLHeaders;
  };
};

/** Optional parameters. */
export interface PageBlobGetPageRangesOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** Return only the bytes of the blob in the specified range. */
  range?: string;
}

/** Contains response data for the getPageRanges operation. */
export type PageBlobGetPageRangesResponse = PageBlobGetPageRangesHeaders &
  PageList & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: PageList;
      /** The parsed HTTP response headers. */
      parsedHeaders: PageBlobGetPageRangesHeaders;
    };
  };

/** Optional parameters. */
export interface PageBlobGetPageRangesDiffOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** Return only the bytes of the blob in the specified range. */
  range?: string;
  /** Optional in version 2015-07-08 and newer. The prevsnapshot parameter is a DateTime value that specifies that the response will contain only pages that were changed between target blob and previous snapshot. Changed pages include both updated and cleared pages. The target blob may be a snapshot, as long as the snapshot specified by prevsnapshot is the older of the two. Note that incremental snapshots are currently supported only for blobs created on or after January 1, 2016. */
  prevsnapshot?: string;
  /** Optional. This header is only supported in service versions 2019-04-19 and after and specifies the URL of a previous snapshot of the target blob. The response will only contain pages that were changed between the target blob and its previous snapshot. */
  prevSnapshotUrl?: string;
}

/** Contains response data for the getPageRangesDiff operation. */
export type PageBlobGetPageRangesDiffResponse = PageBlobGetPageRangesDiffHeaders &
  PageList & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: PageList;
      /** The parsed HTTP response headers. */
      parsedHeaders: PageBlobGetPageRangesDiffHeaders;
    };
  };

/** Optional parameters. */
export interface PageBlobResizeOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
}

/** Contains response data for the resize operation. */
export type PageBlobResizeResponse = PageBlobResizeHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: PageBlobResizeHeaders;
  };
};

/** Optional parameters. */
export interface PageBlobUpdateSequenceNumberOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Set for page blobs only. The sequence number is a user-controlled value that you can use to track requests. The value of the sequence number must be between 0 and 2^63 - 1. */
  blobSequenceNumber?: number;
}

/** Contains response data for the updateSequenceNumber operation. */
export type PageBlobUpdateSequenceNumberResponse = PageBlobUpdateSequenceNumberHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: PageBlobUpdateSequenceNumberHeaders;
  };
};

/** Optional parameters. */
export interface PageBlobCopyIncrementalOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the copyIncremental operation. */
export type PageBlobCopyIncrementalResponse = PageBlobCopyIncrementalHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: PageBlobCopyIncrementalHeaders;
  };
};

/** Optional parameters. */
export interface AppendBlobCreateOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** Parameter group */
  blobHttpHeaders?: BlobHttpHeaders;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Specifies a user-defined name-value pair associated with the blob. If no name-value pairs are specified, the operation will copy the metadata from the source blob or file to the destination blob. If one or more name-value pairs are specified, the destination blob is created with the specified metadata, and metadata is not copied from the source blob or file. Note that beginning with version 2009-09-19, metadata names must adhere to the naming rules for C# identifiers. See Naming and Referencing Containers, Blobs, and Metadata for more information. */
  metadata?: { [propertyName: string]: string };
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
  /** Optional.  Used to set blob tags in various blob operations. */
  blobTagsString?: string;
}

/** Contains response data for the create operation. */
export type AppendBlobCreateResponse = AppendBlobCreateHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: AppendBlobCreateHeaders;
  };
};

/** Optional parameters. */
export interface AppendBlobAppendBlockOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** Parameter group */
  appendPositionAccessConditions?: AppendPositionAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
  /** Specify the transactional md5 for the body, to be validated by the service. */
  transactionalContentMD5?: Uint8Array;
  /** Specify the transactional crc64 for the body, to be validated by the service. */
  transactionalContentCrc64?: Uint8Array;
}

/** Contains response data for the appendBlock operation. */
export type AppendBlobAppendBlockResponse = AppendBlobAppendBlockHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: AppendBlobAppendBlockHeaders;
  };
};

/** Optional parameters. */
export interface AppendBlobAppendBlockFromUrlOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  sourceModifiedAccessConditions?: SourceModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** Parameter group */
  appendPositionAccessConditions?: AppendPositionAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
  /** Specify the md5 calculated for the range of bytes that must be read from the copy source. */
  sourceContentMD5?: Uint8Array;
  /** Specify the transactional md5 for the body, to be validated by the service. */
  transactionalContentMD5?: Uint8Array;
  /** Specify the crc64 calculated for the range of bytes that must be read from the copy source. */
  sourceContentCrc64?: Uint8Array;
  /** Bytes of source data in the specified range. */
  sourceRange?: string;
}

/** Contains response data for the appendBlockFromUrl operation. */
export type AppendBlobAppendBlockFromUrlResponse = AppendBlobAppendBlockFromUrlHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: AppendBlobAppendBlockFromUrlHeaders;
  };
};

/** Optional parameters. */
export interface AppendBlobSealOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  appendPositionAccessConditions?: AppendPositionAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the seal operation. */
export type AppendBlobSealResponse = AppendBlobSealHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: AppendBlobSealHeaders;
  };
};

/** Optional parameters. */
export interface BlockBlobUploadOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** Parameter group */
  blobHttpHeaders?: BlobHttpHeaders;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Specifies a user-defined name-value pair associated with the blob. If no name-value pairs are specified, the operation will copy the metadata from the source blob or file to the destination blob. If one or more name-value pairs are specified, the destination blob is created with the specified metadata, and metadata is not copied from the source blob or file. Note that beginning with version 2009-09-19, metadata names must adhere to the naming rules for C# identifiers. See Naming and Referencing Containers, Blobs, and Metadata for more information. */
  metadata?: { [propertyName: string]: string };
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
  /** Optional. Indicates the tier to be set on the blob. */
  tier?: AccessTier;
  /** Optional.  Used to set blob tags in various blob operations. */
  blobTagsString?: string;
  /** Specify the transactional md5 for the body, to be validated by the service. */
  transactionalContentMD5?: Uint8Array;
}

/** Contains response data for the upload operation. */
export type BlockBlobUploadResponse = BlockBlobUploadHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlockBlobUploadHeaders;
  };
};

/** Optional parameters. */
export interface BlockBlobPutBlobFromUrlOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  sourceModifiedAccessConditions?: SourceModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** Parameter group */
  blobHttpHeaders?: BlobHttpHeaders;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Specifies a user-defined name-value pair associated with the blob. If no name-value pairs are specified, the operation will copy the metadata from the source blob or file to the destination blob. If one or more name-value pairs are specified, the destination blob is created with the specified metadata, and metadata is not copied from the source blob or file. Note that beginning with version 2009-09-19, metadata names must adhere to the naming rules for C# identifiers. See Naming and Referencing Containers, Blobs, and Metadata for more information. */
  metadata?: { [propertyName: string]: string };
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
  /** Optional. Indicates the tier to be set on the blob. */
  tier?: AccessTier;
  /** Optional.  Used to set blob tags in various blob operations. */
  blobTagsString?: string;
  /** Specify the md5 calculated for the range of bytes that must be read from the copy source. */
  sourceContentMD5?: Uint8Array;
  /** Specify the transactional md5 for the body, to be validated by the service. */
  transactionalContentMD5?: Uint8Array;
  /** Optional, default is true.  Indicates if properties from the source blob should be copied. */
  copySourceBlobProperties?: boolean;
}

/** Contains response data for the putBlobFromUrl operation. */
export type BlockBlobPutBlobFromUrlResponse = BlockBlobPutBlobFromUrlHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlockBlobPutBlobFromUrlHeaders;
  };
};

/** Optional parameters. */
export interface BlockBlobStageBlockOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
  /** Specify the transactional md5 for the body, to be validated by the service. */
  transactionalContentMD5?: Uint8Array;
  /** Specify the transactional crc64 for the body, to be validated by the service. */
  transactionalContentCrc64?: Uint8Array;
}

/** Contains response data for the stageBlock operation. */
export type BlockBlobStageBlockResponse = BlockBlobStageBlockHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlockBlobStageBlockHeaders;
  };
};

/** Optional parameters. */
export interface BlockBlobStageBlockFromURLOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  sourceModifiedAccessConditions?: SourceModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
  /** Specify the md5 calculated for the range of bytes that must be read from the copy source. */
  sourceContentMD5?: Uint8Array;
  /** Specify the crc64 calculated for the range of bytes that must be read from the copy source. */
  sourceContentCrc64?: Uint8Array;
  /** Bytes of source data in the specified range. */
  sourceRange?: string;
}

/** Contains response data for the stageBlockFromURL operation. */
export type BlockBlobStageBlockFromURLResponse = BlockBlobStageBlockFromURLHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlockBlobStageBlockFromURLHeaders;
  };
};

/** Optional parameters. */
export interface BlockBlobCommitBlockListOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** Parameter group */
  blobHttpHeaders?: BlobHttpHeaders;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Specifies a user-defined name-value pair associated with the blob. If no name-value pairs are specified, the operation will copy the metadata from the source blob or file to the destination blob. If one or more name-value pairs are specified, the destination blob is created with the specified metadata, and metadata is not copied from the source blob or file. Note that beginning with version 2009-09-19, metadata names must adhere to the naming rules for C# identifiers. See Naming and Referencing Containers, Blobs, and Metadata for more information. */
  metadata?: { [propertyName: string]: string };
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
  /** Optional. Indicates the tier to be set on the blob. */
  tier?: AccessTier;
  /** Optional.  Used to set blob tags in various blob operations. */
  blobTagsString?: string;
  /** Specify the transactional md5 for the body, to be validated by the service. */
  transactionalContentMD5?: Uint8Array;
  /** Specify the transactional crc64 for the body, to be validated by the service. */
  transactionalContentCrc64?: Uint8Array;
}

/** Contains response data for the commitBlockList operation. */
export type BlockBlobCommitBlockListResponse = BlockBlobCommitBlockListHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlockBlobCommitBlockListHeaders;
  };
};

/** Optional parameters. */
export interface BlockBlobGetBlockListOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeoutInSeconds?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
}

/** Contains response data for the getBlockList operation. */
export type BlockBlobGetBlockListResponse = BlockBlobGetBlockListHeaders &
  BlockList & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: BlockList;
      /** The parsed HTTP response headers. */
      parsedHeaders: BlockBlobGetBlockListHeaders;
    };
  };

/** Optional parameters. */
export interface StorageBlobOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** Specifies the version of the operation to use for this request. */
  version?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}

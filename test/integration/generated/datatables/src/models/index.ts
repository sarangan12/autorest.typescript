/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions, OperationOptions } from "@azure/core-client";

/** The properties for the table query response. */
export interface TableQueryResponse {
  /** The metadata response of the table. */
  odataMetadata?: string;
  /** List of tables. */
  value?: TableResponseProperties[];
}

/** The properties for the table response. */
export interface TableResponseProperties {
  /** The name of the table. */
  tableName?: string;
  /** The odata type of the table. */
  odataType?: string;
  /** The id of the table. */
  odataId?: string;
  /** The edit link of the table. */
  odataEditLink?: string;
}

/** Table Service error. */
export interface TableServiceError {
  /** The odata error. */
  odataError?: TableServiceErrorOdataError;
}

/** The odata error. */
export interface TableServiceErrorOdataError {
  /** The service error code. The error codes possible are listed in: https://docs.microsoft.com/rest/api/storageservices/table-service-error-codes */
  code?: string;
  /** The service error message. */
  message?: TableServiceErrorOdataErrorMessage;
}

/** The service error message. */
export interface TableServiceErrorOdataErrorMessage {
  /** Language code of the error message. */
  lang?: string;
  /** The error message. */
  value?: string;
}

/** The properties for creating a table. */
export interface TableProperties {
  /** The name of the table to create. */
  tableName?: string;
}

/** The properties for the table entity query response. */
export interface TableEntityQueryResponse {
  /** The metadata response of the table. */
  odataMetadata?: string;
  /** List of table entities. */
  value?: { [propertyName: string]: any }[];
}

/** A signed identifier. */
export interface SignedIdentifier {
  /** A unique id. */
  id: string;
  /** The access policy. */
  accessPolicy: AccessPolicy;
}

/** An Access policy. */
export interface AccessPolicy {
  /** The start datetime from which the policy is active. */
  start: Date;
  /** The datetime that the policy expires. */
  expiry: Date;
  /** The permissions for the acl policy. */
  permission: string;
}

/** Table Service Properties. */
export interface TableServiceProperties {
  /** Azure Analytics Logging settings. */
  logging?: Logging;
  /** A summary of request statistics grouped by API in hourly aggregates for tables. */
  hourMetrics?: Metrics;
  /** A summary of request statistics grouped by API in minute aggregates for tables. */
  minuteMetrics?: Metrics;
  /** The set of CORS rules. */
  cors?: CorsRule[];
}

/** Azure Analytics Logging settings. */
export interface Logging {
  /** The version of Analytics to configure. */
  version: string;
  /** Indicates whether all delete requests should be logged. */
  delete: boolean;
  /** Indicates whether all read requests should be logged. */
  read: boolean;
  /** Indicates whether all write requests should be logged. */
  write: boolean;
  /** The retention policy. */
  retentionPolicy: RetentionPolicy;
}

/** The retention policy. */
export interface RetentionPolicy {
  /** Indicates whether a retention policy is enabled for the service. */
  enabled: boolean;
  /** Indicates the number of days that metrics or logging or soft-deleted data should be retained. All data older than this value will be deleted. */
  days?: number;
}

/** A summary of request statistics grouped by API */
export interface Metrics {
  /** The version of Analytics to configure. */
  version?: string;
  /** Indicates whether metrics are enabled for the Table service. */
  enabled: boolean;
  /** Indicates whether metrics should generate summary statistics for called API operations. */
  includeAPIs?: boolean;
  /** The retention policy. */
  retentionPolicy?: RetentionPolicy;
}

/** CORS is an HTTP feature that enables a web application running under one domain to access resources in another domain. Web browsers implement a security restriction known as same-origin policy that prevents a web page from calling APIs in a different domain; CORS provides a secure way to allow one domain (the origin domain) to call APIs in another domain. */
export interface CorsRule {
  /** The origin domains that are permitted to make a request against the service via CORS. The origin domain is the domain from which the request originates. Note that the origin must be an exact case-sensitive match with the origin that the user age sends to the service. You can also use the wildcard character '*' to allow all origin domains to make requests via CORS. */
  allowedOrigins: string;
  /** The methods (HTTP request verbs) that the origin domain may use for a CORS request. (comma separated) */
  allowedMethods: string;
  /** The request headers that the origin domain may specify on the CORS request. */
  allowedHeaders: string;
  /** The response headers that may be sent in the response to the CORS request and exposed by the browser to the request issuer. */
  exposedHeaders: string;
  /** The maximum amount time that a browser should cache the preflight OPTIONS request. */
  maxAgeInSeconds: number;
}

/** Stats for the service. */
export interface TableServiceStats {
  /** Geo-Replication information for the Secondary Storage Service. */
  geoReplication?: GeoReplication;
}

/** Geo-Replication information for the Secondary Storage Service */
export interface GeoReplication {
  /** The status of the secondary location. */
  status: GeoReplicationStatusType;
  /** A GMT date/time value, to the second. All primary writes preceding this value are guaranteed to be available for read operations at the secondary. Primary writes after this point in time may or may not be available for reads. */
  lastSyncTime: Date;
}

/** The response for a single table. */
export type TableResponse = TableResponseProperties & {
  /** The metadata response of the table. */
  odataMetadata?: string;
};

/** Defines headers for Table_query operation. */
export interface TableQueryHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Table service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** This header contains the continuation token value. */
  xMsContinuationNextTableName?: string;
}

/** Defines headers for Table_query operation. */
export interface TableQueryExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Table_create operation. */
export interface TableCreateHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Table service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** Indicates whether the Prefer request header was honored. If the response does not include this header, then the Prefer header was not honored. If this header is returned, its value will either be return-content or return-no-content. */
  preferenceApplied?: string;
}

/** Defines headers for Table_create operation. */
export interface TableCreateExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Table_delete operation. */
export interface TableDeleteHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Table service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
}

/** Defines headers for Table_delete operation. */
export interface TableDeleteExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Table_queryEntities operation. */
export interface TableQueryEntitiesHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Table service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** This header contains the continuation token value for partition key. */
  xMsContinuationNextPartitionKey?: string;
  /** This header contains the continuation token value for row key. */
  xMsContinuationNextRowKey?: string;
}

/** Defines headers for Table_queryEntities operation. */
export interface TableQueryEntitiesExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Table_queryEntitiesWithPartitionAndRowKey operation. */
export interface TableQueryEntitiesWithPartitionAndRowKeyHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Table service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  etag?: string;
  /** This header contains the continuation token value for partition key. */
  xMsContinuationNextPartitionKey?: string;
  /** This header contains the continuation token value for row key. */
  xMsContinuationNextRowKey?: string;
}

/** Defines headers for Table_queryEntitiesWithPartitionAndRowKey operation. */
export interface TableQueryEntitiesWithPartitionAndRowKeyExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Table_updateEntity operation. */
export interface TableUpdateEntityHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Table service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** UTC date/time value generated by the service that indicates the time at which the entity was last updated. */
  etag?: string;
}

/** Defines headers for Table_updateEntity operation. */
export interface TableUpdateEntityExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Table_mergeEntity operation. */
export interface TableMergeEntityHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Table service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** UTC date/time value generated by the service that indicates the time at which the entity was last updated. */
  etag?: string;
}

/** Defines headers for Table_mergeEntity operation. */
export interface TableMergeEntityExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Table_deleteEntity operation. */
export interface TableDeleteEntityHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Table service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
}

/** Defines headers for Table_deleteEntity operation. */
export interface TableDeleteEntityExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Table_insertEntity operation. */
export interface TableInsertEntityHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Table service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** UTC date/time value generated by the service that indicates the time at which the entity was last updated. */
  etag?: string;
  /** Indicates whether the Prefer request header was honored. If the response does not include this header, then the Prefer header was not honored. If this header is returned, its value will either be return-content or return-no-content. */
  preferenceApplied?: string;
  /** Indicates the content type of the payload. The value depends on the value specified for the Accept request header. */
  contentType?: string;
}

/** Defines headers for Table_insertEntity operation. */
export interface TableInsertEntityExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Table_getAccessPolicy operation. */
export interface TableGetAccessPolicyHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Table service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
}

/** Defines headers for Table_getAccessPolicy operation. */
export interface TableGetAccessPolicyExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Table_setAccessPolicy operation. */
export interface TableSetAccessPolicyHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Table service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
}

/** Defines headers for Table_setAccessPolicy operation. */
export interface TableSetAccessPolicyExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Service_setProperties operation. */
export interface ServiceSetPropertiesHeaders {
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Table service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
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
  /** Indicates the version of the Table service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
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
  /** Indicates the version of the Table service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
}

/** Defines headers for Service_getStatistics operation. */
export interface ServiceGetStatisticsExceptionHeaders {
  errorCode?: string;
}

/** Parameter group */
export interface QueryOptions {
  /** Specifies the media type for the response. */
  format?: OdataMetadataFormat;
  /** Maximum number of records to return. */
  top?: number;
  /** Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId". */
  select?: string;
  /** OData filter expression. */
  filter?: string;
}

/** Known values of {@link OdataMetadataFormat} that the service accepts. */
export const enum KnownOdataMetadataFormat {
  ApplicationJsonOdataNometadata = "application/json;odata=nometadata",
  ApplicationJsonOdataMinimalmetadata = "application/json;odata=minimalmetadata",
  ApplicationJsonOdataFullmetadata = "application/json;odata=fullmetadata"
}

/**
 * Defines values for OdataMetadataFormat. \
 * {@link KnownOdataMetadataFormat} can be used interchangeably with OdataMetadataFormat,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **application\/json;odata=nometadata** \
 * **application\/json;odata=minimalmetadata** \
 * **application\/json;odata=fullmetadata**
 */
export type OdataMetadataFormat = string;

/** Known values of {@link ResponseFormat} that the service accepts. */
export const enum KnownResponseFormat {
  ReturnNoContent = "return-no-content",
  ReturnContent = "return-content"
}

/**
 * Defines values for ResponseFormat. \
 * {@link KnownResponseFormat} can be used interchangeably with ResponseFormat,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **return-no-content** \
 * **return-content**
 */
export type ResponseFormat = string;

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

/** Optional parameters. */
export interface TableQueryOptionalParams extends OperationOptions {
  /** Parameter group */
  queryOptions?: QueryOptions;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled. */
  requestId?: string;
  /** A table query continuation token from a previous call. */
  nextTableName?: string;
}

/** Contains response data for the query operation. */
export type TableQueryOperationResponse = TableQueryHeaders &
  TableQueryResponse;

/** Optional parameters. */
export interface TableCreateOptionalParams extends OperationOptions {
  /** Parameter group */
  queryOptions?: QueryOptions;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled. */
  requestId?: string;
  /** Specifies whether the response should include the inserted entity in the payload. Possible values are return-no-content and return-content. */
  responsePreference?: ResponseFormat;
}

/** Contains response data for the create operation. */
export type TableCreateResponse = TableCreateHeaders & TableResponse;

/** Optional parameters. */
export interface TableDeleteOptionalParams extends OperationOptions {
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the delete operation. */
export type TableDeleteResponse = TableDeleteHeaders;

/** Optional parameters. */
export interface TableQueryEntitiesOptionalParams extends OperationOptions {
  /** Parameter group */
  queryOptions?: QueryOptions;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. */
  timeout?: number;
  /** An entity query continuation token from a previous call. */
  nextPartitionKey?: string;
  /** An entity query continuation token from a previous call. */
  nextRowKey?: string;
}

/** Contains response data for the queryEntities operation. */
export type TableQueryEntitiesResponse = TableQueryEntitiesHeaders &
  TableEntityQueryResponse;

/** Optional parameters. */
export interface TableQueryEntitiesWithPartitionAndRowKeyOptionalParams
  extends OperationOptions {
  /** Parameter group */
  queryOptions?: QueryOptions;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. */
  timeout?: number;
}

/** Contains response data for the queryEntitiesWithPartitionAndRowKey operation. */
export type TableQueryEntitiesWithPartitionAndRowKeyResponse = TableQueryEntitiesWithPartitionAndRowKeyHeaders & {
  [propertyName: string]: any;
};

/** Optional parameters. */
export interface TableUpdateEntityOptionalParams extends OperationOptions {
  /** Parameter group */
  queryOptions?: QueryOptions;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. */
  timeout?: number;
  /** The properties for the table entity. */
  tableEntityProperties?: { [propertyName: string]: any };
  /** Match condition for an entity to be updated. If specified and a matching entity is not found, an error will be raised. To force an unconditional update, set to the wildcard character (*). If not specified, an insert will be performed when no existing entity is found to update and a replace will be performed if an existing entity is found. */
  ifMatch?: string;
}

/** Contains response data for the updateEntity operation. */
export type TableUpdateEntityResponse = TableUpdateEntityHeaders;

/** Optional parameters. */
export interface TableMergeEntityOptionalParams extends OperationOptions {
  /** Parameter group */
  queryOptions?: QueryOptions;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. */
  timeout?: number;
  /** The properties for the table entity. */
  tableEntityProperties?: { [propertyName: string]: any };
  /** Match condition for an entity to be updated. If specified and a matching entity is not found, an error will be raised. To force an unconditional update, set to the wildcard character (*). If not specified, an insert will be performed when no existing entity is found to update and a merge will be performed if an existing entity is found. */
  ifMatch?: string;
}

/** Contains response data for the mergeEntity operation. */
export type TableMergeEntityResponse = TableMergeEntityHeaders;

/** Optional parameters. */
export interface TableDeleteEntityOptionalParams extends OperationOptions {
  /** Parameter group */
  queryOptions?: QueryOptions;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. */
  timeout?: number;
}

/** Contains response data for the deleteEntity operation. */
export type TableDeleteEntityResponse = TableDeleteEntityHeaders;

/** Optional parameters. */
export interface TableInsertEntityOptionalParams extends OperationOptions {
  /** Parameter group */
  queryOptions?: QueryOptions;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled. */
  requestId?: string;
  /** Specifies whether the response should include the inserted entity in the payload. Possible values are return-no-content and return-content. */
  responsePreference?: ResponseFormat;
  /** The timeout parameter is expressed in seconds. */
  timeout?: number;
  /** The properties for the table entity. */
  tableEntityProperties?: { [propertyName: string]: any };
}

/** Contains response data for the insertEntity operation. */
export type TableInsertEntityResponse = TableInsertEntityHeaders & {
  [propertyName: string]: any;
};

/** Optional parameters. */
export interface TableGetAccessPolicyOptionalParams extends OperationOptions {
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. */
  timeout?: number;
}

/** Contains response data for the getAccessPolicy operation. */
export type TableGetAccessPolicyResponse = TableGetAccessPolicyHeaders &
  SignedIdentifier[];

/** Optional parameters. */
export interface TableSetAccessPolicyOptionalParams extends OperationOptions {
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. */
  timeout?: number;
  /** The acls for the table. */
  tableAcl?: SignedIdentifier[];
}

/** Contains response data for the setAccessPolicy operation. */
export type TableSetAccessPolicyResponse = TableSetAccessPolicyHeaders;

/** Optional parameters. */
export interface ServiceSetPropertiesOptionalParams extends OperationOptions {
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. */
  timeout?: number;
}

/** Contains response data for the setProperties operation. */
export type ServiceSetPropertiesResponse = ServiceSetPropertiesHeaders;

/** Optional parameters. */
export interface ServiceGetPropertiesOptionalParams extends OperationOptions {
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. */
  timeout?: number;
}

/** Contains response data for the getProperties operation. */
export type ServiceGetPropertiesResponse = ServiceGetPropertiesHeaders &
  TableServiceProperties;

/** Optional parameters. */
export interface ServiceGetStatisticsOptionalParams extends OperationOptions {
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. */
  timeout?: number;
}

/** Contains response data for the getStatistics operation. */
export type ServiceGetStatisticsResponse = ServiceGetStatisticsHeaders &
  TableServiceStats;

/** Optional parameters. */
export interface GeneratedClientOptionalParams extends ServiceClientOptions {
  /** Specifies the version of the operation to use for this request. */
  version?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}

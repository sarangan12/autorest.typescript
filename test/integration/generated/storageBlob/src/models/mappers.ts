import * as coreHttp from "@azure/core-http";

export const BlobServiceProperties: coreHttp.CompositeMapper = {
  serializedName: "BlobServiceProperties",
  xmlName: "StorageServiceProperties",
  type: {
    name: "Composite",
    className: "BlobServiceProperties",
    modelProperties: {
      blobAnalyticsLogging: {
        serializedName: "Logging",
        xmlName: "Logging",
        type: {
          name: "Composite",
          className: "Logging"
        }
      },
      hourMetrics: {
        serializedName: "HourMetrics",
        xmlName: "HourMetrics",
        type: {
          name: "Composite",
          className: "Metrics"
        }
      },
      minuteMetrics: {
        serializedName: "MinuteMetrics",
        xmlName: "MinuteMetrics",
        type: {
          name: "Composite",
          className: "Metrics"
        }
      },
      cors: {
        serializedName: "Cors",
        xmlName: "Cors",
        xmlIsWrapped: true,
        xmlElementName: "CorsRule",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CorsRule"
            }
          }
        }
      },
      defaultServiceVersion: {
        serializedName: "DefaultServiceVersion",
        xmlName: "DefaultServiceVersion",
        type: {
          name: "String"
        }
      },
      deleteRetentionPolicy: {
        serializedName: "DeleteRetentionPolicy",
        xmlName: "DeleteRetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      },
      staticWebsite: {
        serializedName: "StaticWebsite",
        xmlName: "StaticWebsite",
        type: {
          name: "Composite",
          className: "StaticWebsite"
        }
      }
    }
  }
};

export const Logging: coreHttp.CompositeMapper = {
  serializedName: "Logging",
  type: {
    name: "Composite",
    className: "Logging",
    modelProperties: {
      version: {
        serializedName: "Version",
        required: true,
        xmlName: "Version",
        type: {
          name: "String"
        }
      },
      delete: {
        serializedName: "Delete",
        required: true,
        xmlName: "Delete",
        type: {
          name: "Boolean"
        }
      },
      read: {
        serializedName: "Read",
        required: true,
        xmlName: "Read",
        type: {
          name: "Boolean"
        }
      },
      write: {
        serializedName: "Write",
        required: true,
        xmlName: "Write",
        type: {
          name: "Boolean"
        }
      },
      retentionPolicy: {
        serializedName: "RetentionPolicy",
        xmlName: "RetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const RetentionPolicy: coreHttp.CompositeMapper = {
  serializedName: "RetentionPolicy",
  type: {
    name: "Composite",
    className: "RetentionPolicy",
    modelProperties: {
      enabled: {
        serializedName: "Enabled",
        required: true,
        xmlName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      days: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "Days",
        xmlName: "Days",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Metrics: coreHttp.CompositeMapper = {
  serializedName: "Metrics",
  type: {
    name: "Composite",
    className: "Metrics",
    modelProperties: {
      version: {
        serializedName: "Version",
        xmlName: "Version",
        type: {
          name: "String"
        }
      },
      enabled: {
        serializedName: "Enabled",
        required: true,
        xmlName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      includeAPIs: {
        serializedName: "IncludeAPIs",
        xmlName: "IncludeAPIs",
        type: {
          name: "Boolean"
        }
      },
      retentionPolicy: {
        serializedName: "RetentionPolicy",
        xmlName: "RetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const CorsRule: coreHttp.CompositeMapper = {
  serializedName: "CorsRule",
  type: {
    name: "Composite",
    className: "CorsRule",
    modelProperties: {
      allowedOrigins: {
        serializedName: "AllowedOrigins",
        required: true,
        xmlName: "AllowedOrigins",
        type: {
          name: "String"
        }
      },
      allowedMethods: {
        serializedName: "AllowedMethods",
        required: true,
        xmlName: "AllowedMethods",
        type: {
          name: "String"
        }
      },
      allowedHeaders: {
        serializedName: "AllowedHeaders",
        required: true,
        xmlName: "AllowedHeaders",
        type: {
          name: "String"
        }
      },
      exposedHeaders: {
        serializedName: "ExposedHeaders",
        required: true,
        xmlName: "ExposedHeaders",
        type: {
          name: "String"
        }
      },
      maxAgeInSeconds: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "MaxAgeInSeconds",
        required: true,
        xmlName: "MaxAgeInSeconds",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const StaticWebsite: coreHttp.CompositeMapper = {
  serializedName: "StaticWebsite",
  type: {
    name: "Composite",
    className: "StaticWebsite",
    modelProperties: {
      enabled: {
        serializedName: "Enabled",
        required: true,
        xmlName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      indexDocument: {
        serializedName: "IndexDocument",
        xmlName: "IndexDocument",
        type: {
          name: "String"
        }
      },
      errorDocument404Path: {
        serializedName: "ErrorDocument404Path",
        xmlName: "ErrorDocument404Path",
        type: {
          name: "String"
        }
      },
      defaultIndexDocumentPath: {
        serializedName: "DefaultIndexDocumentPath",
        xmlName: "DefaultIndexDocumentPath",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StorageError: coreHttp.CompositeMapper = {
  serializedName: "StorageError",
  type: {
    name: "Composite",
    className: "StorageError",
    modelProperties: {
      message: {
        serializedName: "Message",
        xmlName: "Message",
        type: {
          name: "String"
        }
      },
      code: {
        serializedName: "Code",
        xmlName: "Code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobServiceStatistics: coreHttp.CompositeMapper = {
  serializedName: "BlobServiceStatistics",
  xmlName: "StorageServiceStats",
  type: {
    name: "Composite",
    className: "BlobServiceStatistics",
    modelProperties: {
      geoReplication: {
        serializedName: "GeoReplication",
        xmlName: "GeoReplication",
        type: {
          name: "Composite",
          className: "GeoReplication"
        }
      }
    }
  }
};

export const GeoReplication: coreHttp.CompositeMapper = {
  serializedName: "GeoReplication",
  type: {
    name: "Composite",
    className: "GeoReplication",
    modelProperties: {
      status: {
        serializedName: "Status",
        required: true,
        xmlName: "Status",
        type: {
          name: "String"
        }
      },
      lastSyncOn: {
        serializedName: "LastSyncTime",
        required: true,
        xmlName: "LastSyncTime",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ListContainersSegmentResponse: coreHttp.CompositeMapper = {
  serializedName: "ListContainersSegmentResponse",
  xmlName: "EnumerationResults",
  type: {
    name: "Composite",
    className: "ListContainersSegmentResponse",
    modelProperties: {
      serviceEndpoint: {
        serializedName: "ServiceEndpoint",
        required: true,
        xmlName: "ServiceEndpoint",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      prefix: {
        serializedName: "Prefix",
        xmlName: "Prefix",
        type: {
          name: "String"
        }
      },
      marker: {
        serializedName: "Marker",
        xmlName: "Marker",
        type: {
          name: "String"
        }
      },
      maxPageSize: {
        serializedName: "MaxResults",
        xmlName: "MaxResults",
        type: {
          name: "Number"
        }
      },
      containerItems: {
        serializedName: "ContainerItems",
        required: true,
        xmlName: "Containers",
        xmlIsWrapped: true,
        xmlElementName: "Container",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContainerItem"
            }
          }
        }
      },
      continuationToken: {
        serializedName: "NextMarker",
        xmlName: "NextMarker",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerItem: coreHttp.CompositeMapper = {
  serializedName: "ContainerItem",
  xmlName: "Container",
  type: {
    name: "Composite",
    className: "ContainerItem",
    modelProperties: {
      name: {
        serializedName: "Name",
        required: true,
        xmlName: "Name",
        type: {
          name: "String"
        }
      },
      deleted: {
        serializedName: "Deleted",
        xmlName: "Deleted",
        type: {
          name: "Boolean"
        }
      },
      version: {
        serializedName: "Version",
        xmlName: "Version",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "Properties",
        xmlName: "Properties",
        type: {
          name: "Composite",
          className: "ContainerProperties"
        }
      },
      metadata: {
        serializedName: "Metadata",
        xmlName: "Metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ContainerProperties: coreHttp.CompositeMapper = {
  serializedName: "ContainerProperties",
  type: {
    name: "Composite",
    className: "ContainerProperties",
    modelProperties: {
      lastModified: {
        serializedName: "Last-Modified",
        required: true,
        xmlName: "Last-Modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        serializedName: "Etag",
        required: true,
        xmlName: "Etag",
        type: {
          name: "String"
        }
      },
      leaseStatus: {
        serializedName: "LeaseStatus",
        xmlName: "LeaseStatus",
        type: {
          name: "Enum",
          allowedValues: ["locked", "unlocked"]
        }
      },
      leaseState: {
        serializedName: "LeaseState",
        xmlName: "LeaseState",
        type: {
          name: "Enum",
          allowedValues: [
            "available",
            "leased",
            "expired",
            "breaking",
            "broken"
          ]
        }
      },
      leaseDuration: {
        serializedName: "LeaseDuration",
        xmlName: "LeaseDuration",
        type: {
          name: "Enum",
          allowedValues: ["infinite", "fixed"]
        }
      },
      publicAccess: {
        serializedName: "PublicAccess",
        xmlName: "PublicAccess",
        type: {
          name: "String"
        }
      },
      hasImmutabilityPolicy: {
        serializedName: "HasImmutabilityPolicy",
        xmlName: "HasImmutabilityPolicy",
        type: {
          name: "Boolean"
        }
      },
      hasLegalHold: {
        serializedName: "HasLegalHold",
        xmlName: "HasLegalHold",
        type: {
          name: "Boolean"
        }
      },
      defaultEncryptionScope: {
        serializedName: "DefaultEncryptionScope",
        xmlName: "DefaultEncryptionScope",
        type: {
          name: "String"
        }
      },
      preventEncryptionScopeOverride: {
        serializedName: "DenyEncryptionScopeOverride",
        xmlName: "DenyEncryptionScopeOverride",
        type: {
          name: "Boolean"
        }
      },
      deletedOn: {
        serializedName: "DeletedTime",
        xmlName: "DeletedTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      remainingRetentionDays: {
        serializedName: "RemainingRetentionDays",
        xmlName: "RemainingRetentionDays",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const KeyInfo: coreHttp.CompositeMapper = {
  serializedName: "KeyInfo",
  type: {
    name: "Composite",
    className: "KeyInfo",
    modelProperties: {
      startsOn: {
        serializedName: "Start",
        required: true,
        xmlName: "Start",
        type: {
          name: "String"
        }
      },
      expiresOn: {
        serializedName: "Expiry",
        required: true,
        xmlName: "Expiry",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UserDelegationKey: coreHttp.CompositeMapper = {
  serializedName: "UserDelegationKey",
  type: {
    name: "Composite",
    className: "UserDelegationKey",
    modelProperties: {
      signedObjectId: {
        serializedName: "SignedOid",
        required: true,
        xmlName: "SignedOid",
        type: {
          name: "String"
        }
      },
      signedTenantId: {
        serializedName: "SignedTid",
        required: true,
        xmlName: "SignedTid",
        type: {
          name: "String"
        }
      },
      signedStartsOn: {
        serializedName: "SignedStart",
        required: true,
        xmlName: "SignedStart",
        type: {
          name: "DateTime"
        }
      },
      signedExpiresOn: {
        serializedName: "SignedExpiry",
        required: true,
        xmlName: "SignedExpiry",
        type: {
          name: "DateTime"
        }
      },
      signedService: {
        serializedName: "SignedService",
        required: true,
        xmlName: "SignedService",
        type: {
          name: "String"
        }
      },
      signedVersion: {
        serializedName: "SignedVersion",
        required: true,
        xmlName: "SignedVersion",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "Value",
        required: true,
        xmlName: "Value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FilterBlobSegment: coreHttp.CompositeMapper = {
  serializedName: "FilterBlobSegment",
  xmlName: "EnumerationResults",
  type: {
    name: "Composite",
    className: "FilterBlobSegment",
    modelProperties: {
      serviceEndpoint: {
        serializedName: "ServiceEndpoint",
        required: true,
        xmlName: "ServiceEndpoint",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      where: {
        serializedName: "Where",
        required: true,
        xmlName: "Where",
        type: {
          name: "String"
        }
      },
      blobs: {
        serializedName: "Blobs",
        required: true,
        xmlName: "Blobs",
        xmlIsWrapped: true,
        xmlElementName: "Blob",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FilterBlobItem"
            }
          }
        }
      },
      continuationToken: {
        serializedName: "NextMarker",
        xmlName: "NextMarker",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FilterBlobItem: coreHttp.CompositeMapper = {
  serializedName: "FilterBlobItem",
  xmlName: "Blob",
  type: {
    name: "Composite",
    className: "FilterBlobItem",
    modelProperties: {
      name: {
        serializedName: "Name",
        required: true,
        xmlName: "Name",
        type: {
          name: "String"
        }
      },
      containerName: {
        serializedName: "ContainerName",
        required: true,
        xmlName: "ContainerName",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "Tags",
        xmlName: "Tags",
        type: {
          name: "Composite",
          className: "BlobTags"
        }
      }
    }
  }
};

export const BlobTags: coreHttp.CompositeMapper = {
  serializedName: "BlobTags",
  xmlName: "Tags",
  type: {
    name: "Composite",
    className: "BlobTags",
    modelProperties: {
      blobTagSet: {
        serializedName: "BlobTagSet",
        required: true,
        xmlName: "TagSet",
        xmlIsWrapped: true,
        xmlElementName: "Tag",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BlobTag"
            }
          }
        }
      }
    }
  }
};

export const BlobTag: coreHttp.CompositeMapper = {
  serializedName: "BlobTag",
  xmlName: "Tag",
  type: {
    name: "Composite",
    className: "BlobTag",
    modelProperties: {
      key: {
        serializedName: "Key",
        required: true,
        xmlName: "Key",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "Value",
        required: true,
        xmlName: "Value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SignedIdentifier: coreHttp.CompositeMapper = {
  serializedName: "SignedIdentifier",
  xmlName: "SignedIdentifier",
  type: {
    name: "Composite",
    className: "SignedIdentifier",
    modelProperties: {
      id: {
        serializedName: "Id",
        required: true,
        xmlName: "Id",
        type: {
          name: "String"
        }
      },
      accessPolicy: {
        serializedName: "AccessPolicy",
        xmlName: "AccessPolicy",
        type: {
          name: "Composite",
          className: "AccessPolicy"
        }
      }
    }
  }
};

export const AccessPolicy: coreHttp.CompositeMapper = {
  serializedName: "AccessPolicy",
  type: {
    name: "Composite",
    className: "AccessPolicy",
    modelProperties: {
      startsOn: {
        serializedName: "Start",
        xmlName: "Start",
        type: {
          name: "DateTime"
        }
      },
      expiresOn: {
        serializedName: "Expiry",
        xmlName: "Expiry",
        type: {
          name: "DateTime"
        }
      },
      permissions: {
        serializedName: "Permission",
        xmlName: "Permission",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ListBlobsFlatSegmentResponse: coreHttp.CompositeMapper = {
  serializedName: "ListBlobsFlatSegmentResponse",
  xmlName: "EnumerationResults",
  type: {
    name: "Composite",
    className: "ListBlobsFlatSegmentResponse",
    modelProperties: {
      serviceEndpoint: {
        serializedName: "ServiceEndpoint",
        required: true,
        xmlName: "ServiceEndpoint",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      containerName: {
        serializedName: "ContainerName",
        required: true,
        xmlName: "ContainerName",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      prefix: {
        serializedName: "Prefix",
        xmlName: "Prefix",
        type: {
          name: "String"
        }
      },
      marker: {
        serializedName: "Marker",
        xmlName: "Marker",
        type: {
          name: "String"
        }
      },
      maxPageSize: {
        serializedName: "MaxResults",
        xmlName: "MaxResults",
        type: {
          name: "Number"
        }
      },
      segment: {
        serializedName: "Segment",
        xmlName: "Blobs",
        type: {
          name: "Composite",
          className: "BlobFlatListSegment"
        }
      },
      continuationToken: {
        serializedName: "NextMarker",
        xmlName: "NextMarker",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobFlatListSegment: coreHttp.CompositeMapper = {
  serializedName: "BlobFlatListSegment",
  xmlName: "Blobs",
  type: {
    name: "Composite",
    className: "BlobFlatListSegment",
    modelProperties: {
      blobItems: {
        serializedName: "BlobItems",
        required: true,
        xmlName: "BlobItems",
        xmlElementName: "Blob",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BlobItemInternal"
            }
          }
        }
      }
    }
  }
};

export const BlobItemInternal: coreHttp.CompositeMapper = {
  serializedName: "BlobItemInternal",
  xmlName: "Blob",
  type: {
    name: "Composite",
    className: "BlobItemInternal",
    modelProperties: {
      name: {
        serializedName: "Name",
        required: true,
        xmlName: "Name",
        type: {
          name: "String"
        }
      },
      deleted: {
        serializedName: "Deleted",
        required: true,
        xmlName: "Deleted",
        type: {
          name: "Boolean"
        }
      },
      snapshot: {
        serializedName: "Snapshot",
        required: true,
        xmlName: "Snapshot",
        type: {
          name: "String"
        }
      },
      versionId: {
        serializedName: "VersionId",
        xmlName: "VersionId",
        type: {
          name: "String"
        }
      },
      isCurrentVersion: {
        serializedName: "IsCurrentVersion",
        xmlName: "IsCurrentVersion",
        type: {
          name: "Boolean"
        }
      },
      properties: {
        serializedName: "Properties",
        xmlName: "Properties",
        type: {
          name: "Composite",
          className: "BlobPropertiesInternal"
        }
      },
      metadata: {
        serializedName: "Metadata",
        xmlName: "Metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      blobTags: {
        serializedName: "BlobTags",
        xmlName: "Tags",
        type: {
          name: "Composite",
          className: "BlobTags"
        }
      },
      objectReplicationMetadata: {
        serializedName: "ObjectReplicationMetadata",
        xmlName: "ObjectReplicationMetadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const BlobPropertiesInternal: coreHttp.CompositeMapper = {
  serializedName: "BlobPropertiesInternal",
  xmlName: "Properties",
  type: {
    name: "Composite",
    className: "BlobPropertiesInternal",
    modelProperties: {
      createdOn: {
        serializedName: "Creation-Time",
        xmlName: "Creation-Time",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      lastModified: {
        serializedName: "Last-Modified",
        required: true,
        xmlName: "Last-Modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        serializedName: "Etag",
        required: true,
        xmlName: "Etag",
        type: {
          name: "String"
        }
      },
      contentLength: {
        serializedName: "Content-Length",
        xmlName: "Content-Length",
        type: {
          name: "Number"
        }
      },
      contentType: {
        serializedName: "Content-Type",
        xmlName: "Content-Type",
        type: {
          name: "String"
        }
      },
      contentEncoding: {
        serializedName: "Content-Encoding",
        xmlName: "Content-Encoding",
        type: {
          name: "String"
        }
      },
      contentLanguage: {
        serializedName: "Content-Language",
        xmlName: "Content-Language",
        type: {
          name: "String"
        }
      },
      contentMD5: {
        serializedName: "Content-MD5",
        xmlName: "Content-MD5",
        type: {
          name: "ByteArray"
        }
      },
      contentDisposition: {
        serializedName: "Content-Disposition",
        xmlName: "Content-Disposition",
        type: {
          name: "String"
        }
      },
      cacheControl: {
        serializedName: "Cache-Control",
        xmlName: "Cache-Control",
        type: {
          name: "String"
        }
      },
      blobSequenceNumber: {
        serializedName: "x-ms-blob-sequence-number",
        xmlName: "x-ms-blob-sequence-number",
        type: {
          name: "Number"
        }
      },
      blobType: {
        serializedName: "BlobType",
        xmlName: "BlobType",
        type: {
          name: "Enum",
          allowedValues: ["BlockBlob", "PageBlob", "AppendBlob"]
        }
      },
      leaseStatus: {
        serializedName: "LeaseStatus",
        xmlName: "LeaseStatus",
        type: {
          name: "Enum",
          allowedValues: ["locked", "unlocked"]
        }
      },
      leaseState: {
        serializedName: "LeaseState",
        xmlName: "LeaseState",
        type: {
          name: "Enum",
          allowedValues: [
            "available",
            "leased",
            "expired",
            "breaking",
            "broken"
          ]
        }
      },
      leaseDuration: {
        serializedName: "LeaseDuration",
        xmlName: "LeaseDuration",
        type: {
          name: "Enum",
          allowedValues: ["infinite", "fixed"]
        }
      },
      copyId: {
        serializedName: "CopyId",
        xmlName: "CopyId",
        type: {
          name: "String"
        }
      },
      copyStatus: {
        serializedName: "CopyStatus",
        xmlName: "CopyStatus",
        type: {
          name: "Enum",
          allowedValues: ["pending", "success", "aborted", "failed"]
        }
      },
      copySource: {
        serializedName: "CopySource",
        xmlName: "CopySource",
        type: {
          name: "String"
        }
      },
      copyProgress: {
        serializedName: "CopyProgress",
        xmlName: "CopyProgress",
        type: {
          name: "String"
        }
      },
      copyCompletedOn: {
        serializedName: "CopyCompletionTime",
        xmlName: "CopyCompletionTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      copyStatusDescription: {
        serializedName: "CopyStatusDescription",
        xmlName: "CopyStatusDescription",
        type: {
          name: "String"
        }
      },
      serverEncrypted: {
        serializedName: "ServerEncrypted",
        xmlName: "ServerEncrypted",
        type: {
          name: "Boolean"
        }
      },
      incrementalCopy: {
        serializedName: "IncrementalCopy",
        xmlName: "IncrementalCopy",
        type: {
          name: "Boolean"
        }
      },
      destinationSnapshot: {
        serializedName: "DestinationSnapshot",
        xmlName: "DestinationSnapshot",
        type: {
          name: "String"
        }
      },
      deletedOn: {
        serializedName: "DeletedTime",
        xmlName: "DeletedTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      remainingRetentionDays: {
        serializedName: "RemainingRetentionDays",
        xmlName: "RemainingRetentionDays",
        type: {
          name: "Number"
        }
      },
      accessTier: {
        serializedName: "AccessTier",
        xmlName: "AccessTier",
        type: {
          name: "String"
        }
      },
      accessTierInferred: {
        serializedName: "AccessTierInferred",
        xmlName: "AccessTierInferred",
        type: {
          name: "Boolean"
        }
      },
      archiveStatus: {
        serializedName: "ArchiveStatus",
        xmlName: "ArchiveStatus",
        type: {
          name: "String"
        }
      },
      customerProvidedKeySha256: {
        serializedName: "CustomerProvidedKeySha256",
        xmlName: "CustomerProvidedKeySha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "EncryptionScope",
        xmlName: "EncryptionScope",
        type: {
          name: "String"
        }
      },
      accessTierChangedOn: {
        serializedName: "AccessTierChangeTime",
        xmlName: "AccessTierChangeTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      tagCount: {
        serializedName: "TagCount",
        xmlName: "TagCount",
        type: {
          name: "Number"
        }
      },
      expiresOn: {
        serializedName: "Expiry-Time",
        xmlName: "Expiry-Time",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isSealed: {
        serializedName: "Sealed",
        xmlName: "Sealed",
        type: {
          name: "Boolean"
        }
      },
      rehydratePriority: {
        serializedName: "RehydratePriority",
        xmlName: "RehydratePriority",
        type: {
          name: "String"
        }
      },
      lastAccessedOn: {
        serializedName: "LastAccessTime",
        xmlName: "LastAccessTime",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ListBlobsHierarchySegmentResponse: coreHttp.CompositeMapper = {
  serializedName: "ListBlobsHierarchySegmentResponse",
  xmlName: "EnumerationResults",
  type: {
    name: "Composite",
    className: "ListBlobsHierarchySegmentResponse",
    modelProperties: {
      serviceEndpoint: {
        serializedName: "ServiceEndpoint",
        required: true,
        xmlName: "ServiceEndpoint",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      containerName: {
        serializedName: "ContainerName",
        required: true,
        xmlName: "ContainerName",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      prefix: {
        serializedName: "Prefix",
        xmlName: "Prefix",
        type: {
          name: "String"
        }
      },
      marker: {
        serializedName: "Marker",
        xmlName: "Marker",
        type: {
          name: "String"
        }
      },
      maxPageSize: {
        serializedName: "MaxResults",
        xmlName: "MaxResults",
        type: {
          name: "Number"
        }
      },
      delimiter: {
        serializedName: "Delimiter",
        xmlName: "Delimiter",
        type: {
          name: "String"
        }
      },
      segment: {
        serializedName: "Segment",
        xmlName: "Blobs",
        type: {
          name: "Composite",
          className: "BlobHierarchyListSegment"
        }
      },
      continuationToken: {
        serializedName: "NextMarker",
        xmlName: "NextMarker",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobHierarchyListSegment: coreHttp.CompositeMapper = {
  serializedName: "BlobHierarchyListSegment",
  xmlName: "Blobs",
  type: {
    name: "Composite",
    className: "BlobHierarchyListSegment",
    modelProperties: {
      blobPrefixes: {
        serializedName: "BlobPrefixes",
        xmlName: "BlobPrefixes",
        xmlElementName: "BlobPrefix",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BlobPrefix"
            }
          }
        }
      },
      blobItems: {
        serializedName: "BlobItems",
        required: true,
        xmlName: "BlobItems",
        xmlElementName: "Blob",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BlobItemInternal"
            }
          }
        }
      }
    }
  }
};

export const BlobPrefix: coreHttp.CompositeMapper = {
  serializedName: "BlobPrefix",
  type: {
    name: "Composite",
    className: "BlobPrefix",
    modelProperties: {
      name: {
        serializedName: "Name",
        required: true,
        xmlName: "Name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataLakeStorageError: coreHttp.CompositeMapper = {
  serializedName: "DataLakeStorageError",
  type: {
    name: "Composite",
    className: "DataLakeStorageError",
    modelProperties: {
      dataLakeStorageErrorDetails: {
        serializedName: "error",
        xmlName: "error",
        type: {
          name: "Composite",
          className: "DataLakeStorageErrorError"
        }
      }
    }
  }
};

export const DataLakeStorageErrorError: coreHttp.CompositeMapper = {
  serializedName: "DataLakeStorageErrorError",
  type: {
    name: "Composite",
    className: "DataLakeStorageErrorError",
    modelProperties: {
      code: {
        serializedName: "Code",
        xmlName: "Code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "Message",
        xmlName: "Message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlockLookupList: coreHttp.CompositeMapper = {
  serializedName: "BlockLookupList",
  xmlName: "BlockList",
  type: {
    name: "Composite",
    className: "BlockLookupList",
    modelProperties: {
      committed: {
        serializedName: "Committed",
        xmlName: "Committed",
        xmlElementName: "Committed",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      uncommitted: {
        serializedName: "Uncommitted",
        xmlName: "Uncommitted",
        xmlElementName: "Uncommitted",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      latest: {
        serializedName: "Latest",
        xmlName: "Latest",
        xmlElementName: "Latest",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const BlockList: coreHttp.CompositeMapper = {
  serializedName: "BlockList",
  type: {
    name: "Composite",
    className: "BlockList",
    modelProperties: {
      committedBlocks: {
        serializedName: "CommittedBlocks",
        xmlName: "CommittedBlocks",
        xmlIsWrapped: true,
        xmlElementName: "Block",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Block"
            }
          }
        }
      },
      uncommittedBlocks: {
        serializedName: "UncommittedBlocks",
        xmlName: "UncommittedBlocks",
        xmlIsWrapped: true,
        xmlElementName: "Block",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Block"
            }
          }
        }
      }
    }
  }
};

export const Block: coreHttp.CompositeMapper = {
  serializedName: "Block",
  type: {
    name: "Composite",
    className: "Block",
    modelProperties: {
      name: {
        serializedName: "Name",
        required: true,
        xmlName: "Name",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "Size",
        required: true,
        xmlName: "Size",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PageList: coreHttp.CompositeMapper = {
  serializedName: "PageList",
  type: {
    name: "Composite",
    className: "PageList",
    modelProperties: {
      pageRange: {
        serializedName: "PageRange",
        xmlName: "PageRange",
        xmlElementName: "PageRange",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PageRange"
            }
          }
        }
      },
      clearRange: {
        serializedName: "ClearRange",
        xmlName: "ClearRange",
        xmlElementName: "ClearRange",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ClearRange"
            }
          }
        }
      }
    }
  }
};

export const PageRange: coreHttp.CompositeMapper = {
  serializedName: "PageRange",
  xmlName: "PageRange",
  type: {
    name: "Composite",
    className: "PageRange",
    modelProperties: {
      start: {
        serializedName: "Start",
        required: true,
        xmlName: "Start",
        type: {
          name: "Number"
        }
      },
      end: {
        serializedName: "End",
        required: true,
        xmlName: "End",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ClearRange: coreHttp.CompositeMapper = {
  serializedName: "ClearRange",
  xmlName: "ClearRange",
  type: {
    name: "Composite",
    className: "ClearRange",
    modelProperties: {
      start: {
        serializedName: "Start",
        required: true,
        xmlName: "Start",
        type: {
          name: "Number"
        }
      },
      end: {
        serializedName: "End",
        required: true,
        xmlName: "End",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const QueryRequest: coreHttp.CompositeMapper = {
  serializedName: "QueryRequest",
  xmlName: "QueryRequest",
  type: {
    name: "Composite",
    className: "QueryRequest",
    modelProperties: {
      queryType: {
        defaultValue: "SQL",
        isConstant: true,
        serializedName: "QueryType",
        type: {
          name: "String"
        }
      },
      expression: {
        serializedName: "Expression",
        required: true,
        xmlName: "Expression",
        type: {
          name: "String"
        }
      },
      inputSerialization: {
        serializedName: "InputSerialization",
        xmlName: "InputSerialization",
        type: {
          name: "Composite",
          className: "QuerySerialization"
        }
      },
      outputSerialization: {
        serializedName: "OutputSerialization",
        xmlName: "OutputSerialization",
        type: {
          name: "Composite",
          className: "QuerySerialization"
        }
      }
    }
  }
};

export const QuerySerialization: coreHttp.CompositeMapper = {
  serializedName: "QuerySerialization",
  type: {
    name: "Composite",
    className: "QuerySerialization",
    modelProperties: {
      format: {
        serializedName: "Format",
        xmlName: "Format",
        type: {
          name: "Composite",
          className: "QueryFormat"
        }
      }
    }
  }
};

export const QueryFormat: coreHttp.CompositeMapper = {
  serializedName: "QueryFormat",
  type: {
    name: "Composite",
    className: "QueryFormat",
    modelProperties: {
      type: {
        serializedName: "Type",
        xmlName: "Type",
        type: {
          name: "Enum",
          allowedValues: ["delimited", "json", "arrow"]
        }
      },
      delimitedTextConfiguration: {
        serializedName: "DelimitedTextConfiguration",
        xmlName: "DelimitedTextConfiguration",
        type: {
          name: "Composite",
          className: "DelimitedTextConfiguration"
        }
      },
      jsonTextConfiguration: {
        serializedName: "JsonTextConfiguration",
        xmlName: "JsonTextConfiguration",
        type: {
          name: "Composite",
          className: "JsonTextConfiguration"
        }
      },
      arrowConfiguration: {
        serializedName: "ArrowConfiguration",
        xmlName: "ArrowConfiguration",
        type: {
          name: "Composite",
          className: "ArrowConfiguration"
        }
      }
    }
  }
};

export const DelimitedTextConfiguration: coreHttp.CompositeMapper = {
  serializedName: "DelimitedTextConfiguration",
  xmlName: "DelimitedTextConfiguration",
  type: {
    name: "Composite",
    className: "DelimitedTextConfiguration",
    modelProperties: {
      columnSeparator: {
        serializedName: "ColumnSeparator",
        required: true,
        xmlName: "ColumnSeparator",
        type: {
          name: "String"
        }
      },
      fieldQuote: {
        serializedName: "FieldQuote",
        required: true,
        xmlName: "FieldQuote",
        type: {
          name: "String"
        }
      },
      recordSeparator: {
        serializedName: "RecordSeparator",
        required: true,
        xmlName: "RecordSeparator",
        type: {
          name: "String"
        }
      },
      escapeChar: {
        serializedName: "EscapeChar",
        required: true,
        xmlName: "EscapeChar",
        type: {
          name: "String"
        }
      },
      headersPresent: {
        serializedName: "HeadersPresent",
        required: true,
        xmlName: "HasHeaders",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JsonTextConfiguration: coreHttp.CompositeMapper = {
  serializedName: "JsonTextConfiguration",
  xmlName: "JsonTextConfiguration",
  type: {
    name: "Composite",
    className: "JsonTextConfiguration",
    modelProperties: {
      recordSeparator: {
        serializedName: "RecordSeparator",
        required: true,
        xmlName: "RecordSeparator",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ArrowConfiguration: coreHttp.CompositeMapper = {
  serializedName: "ArrowConfiguration",
  xmlName: "ArrowConfiguration",
  type: {
    name: "Composite",
    className: "ArrowConfiguration",
    modelProperties: {
      schema: {
        serializedName: "Schema",
        required: true,
        xmlName: "Schema",
        xmlIsWrapped: true,
        xmlElementName: "Field",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ArrowField"
            }
          }
        }
      }
    }
  }
};

export const ArrowField: coreHttp.CompositeMapper = {
  serializedName: "ArrowField",
  xmlName: "Field",
  type: {
    name: "Composite",
    className: "ArrowField",
    modelProperties: {
      type: {
        serializedName: "Type",
        required: true,
        xmlName: "Type",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "Name",
        xmlName: "Name",
        type: {
          name: "String"
        }
      },
      precision: {
        serializedName: "Precision",
        xmlName: "Precision",
        type: {
          name: "Number"
        }
      },
      scale: {
        serializedName: "Scale",
        xmlName: "Scale",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ServiceSetPropertiesHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_setPropertiesHeaders",
  type: {
    name: "Composite",
    className: "ServiceSetPropertiesHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceSetPropertiesExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_setPropertiesExceptionHeaders",
  type: {
    name: "Composite",
    className: "ServiceSetPropertiesExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceGetPropertiesHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_getPropertiesHeaders",
  type: {
    name: "Composite",
    className: "ServiceGetPropertiesHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceGetPropertiesExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_getPropertiesExceptionHeaders",
  type: {
    name: "Composite",
    className: "ServiceGetPropertiesExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceGetStatisticsHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_getStatisticsHeaders",
  type: {
    name: "Composite",
    className: "ServiceGetStatisticsHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ServiceGetStatisticsExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_getStatisticsExceptionHeaders",
  type: {
    name: "Composite",
    className: "ServiceGetStatisticsExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceListContainersSegmentHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_listContainersSegmentHeaders",
  type: {
    name: "Composite",
    className: "ServiceListContainersSegmentHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceListContainersSegmentExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_listContainersSegmentExceptionHeaders",
  type: {
    name: "Composite",
    className: "ServiceListContainersSegmentExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceGetUserDelegationKeyHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_getUserDelegationKeyHeaders",
  type: {
    name: "Composite",
    className: "ServiceGetUserDelegationKeyHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ServiceGetUserDelegationKeyExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_getUserDelegationKeyExceptionHeaders",
  type: {
    name: "Composite",
    className: "ServiceGetUserDelegationKeyExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceGetAccountInfoHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_getAccountInfoHeaders",
  type: {
    name: "Composite",
    className: "ServiceGetAccountInfoHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      skuName: {
        serializedName: "x-ms-sku-name",
        xmlName: "x-ms-sku-name",
        type: {
          name: "Enum",
          allowedValues: [
            "Standard_LRS",
            "Standard_GRS",
            "Standard_RAGRS",
            "Standard_ZRS",
            "Premium_LRS"
          ]
        }
      },
      accountKind: {
        serializedName: "x-ms-account-kind",
        xmlName: "x-ms-account-kind",
        type: {
          name: "Enum",
          allowedValues: [
            "Storage",
            "BlobStorage",
            "StorageV2",
            "FileStorage",
            "BlockBlobStorage"
          ]
        }
      },
      isHierarchicalNamespaceEnabled: {
        serializedName: "x-ms-is-hns-enabled",
        xmlName: "x-ms-is-hns-enabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ServiceGetAccountInfoExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_getAccountInfoExceptionHeaders",
  type: {
    name: "Composite",
    className: "ServiceGetAccountInfoExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceSubmitBatchHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_submitBatchHeaders",
  type: {
    name: "Composite",
    className: "ServiceSubmitBatchHeaders",
    modelProperties: {
      contentType: {
        serializedName: "content-type",
        xmlName: "content-type",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceSubmitBatchExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_submitBatchExceptionHeaders",
  type: {
    name: "Composite",
    className: "ServiceSubmitBatchExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceFilterBlobsHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_filterBlobsHeaders",
  type: {
    name: "Composite",
    className: "ServiceFilterBlobsHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ServiceFilterBlobsExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_filterBlobsExceptionHeaders",
  type: {
    name: "Composite",
    className: "ServiceFilterBlobsExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceListContainersSegmentNextHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_listContainersSegmentNextHeaders",
  type: {
    name: "Composite",
    className: "ServiceListContainersSegmentNextHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceListContainersSegmentNextExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_listContainersSegmentNextExceptionHeaders",
  type: {
    name: "Composite",
    className: "ServiceListContainersSegmentNextExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerCreateHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_createHeaders",
  type: {
    name: "Composite",
    className: "ContainerCreateHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerCreateExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_createExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerCreateExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerGetPropertiesHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_getPropertiesHeaders",
  type: {
    name: "Composite",
    className: "ContainerGetPropertiesHeaders",
    modelProperties: {
      metadata: {
        serializedName: "x-ms-meta",
        xmlName: "x-ms-meta",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      leaseDuration: {
        serializedName: "x-ms-lease-duration",
        xmlName: "x-ms-lease-duration",
        type: {
          name: "Enum",
          allowedValues: ["infinite", "fixed"]
        }
      },
      leaseState: {
        serializedName: "x-ms-lease-state",
        xmlName: "x-ms-lease-state",
        type: {
          name: "Enum",
          allowedValues: [
            "available",
            "leased",
            "expired",
            "breaking",
            "broken"
          ]
        }
      },
      leaseStatus: {
        serializedName: "x-ms-lease-status",
        xmlName: "x-ms-lease-status",
        type: {
          name: "Enum",
          allowedValues: ["locked", "unlocked"]
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      blobPublicAccess: {
        serializedName: "x-ms-blob-public-access",
        xmlName: "x-ms-blob-public-access",
        type: {
          name: "String"
        }
      },
      hasImmutabilityPolicy: {
        serializedName: "x-ms-has-immutability-policy",
        xmlName: "x-ms-has-immutability-policy",
        type: {
          name: "Boolean"
        }
      },
      hasLegalHold: {
        serializedName: "x-ms-has-legal-hold",
        xmlName: "x-ms-has-legal-hold",
        type: {
          name: "Boolean"
        }
      },
      defaultEncryptionScope: {
        serializedName: "x-ms-default-encryption-scope",
        xmlName: "x-ms-default-encryption-scope",
        type: {
          name: "String"
        }
      },
      denyEncryptionScopeOverride: {
        serializedName: "x-ms-deny-encryption-scope-override",
        xmlName: "x-ms-deny-encryption-scope-override",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ContainerGetPropertiesExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_getPropertiesExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerGetPropertiesExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerDeleteHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_deleteHeaders",
  type: {
    name: "Composite",
    className: "ContainerDeleteHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerDeleteExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_deleteExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerDeleteExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerSetMetadataHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_setMetadataHeaders",
  type: {
    name: "Composite",
    className: "ContainerSetMetadataHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerSetMetadataExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_setMetadataExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerSetMetadataExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerGetAccessPolicyHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_getAccessPolicyHeaders",
  type: {
    name: "Composite",
    className: "ContainerGetAccessPolicyHeaders",
    modelProperties: {
      blobPublicAccess: {
        serializedName: "x-ms-blob-public-access",
        xmlName: "x-ms-blob-public-access",
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerGetAccessPolicyExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_getAccessPolicyExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerGetAccessPolicyExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerSetAccessPolicyHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_setAccessPolicyHeaders",
  type: {
    name: "Composite",
    className: "ContainerSetAccessPolicyHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerSetAccessPolicyExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_setAccessPolicyExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerSetAccessPolicyExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerRestoreHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_restoreHeaders",
  type: {
    name: "Composite",
    className: "ContainerRestoreHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerRestoreExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_restoreExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerRestoreExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerRenameHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_renameHeaders",
  type: {
    name: "Composite",
    className: "ContainerRenameHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerRenameExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_renameExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerRenameExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerSubmitBatchHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_submitBatchHeaders",
  type: {
    name: "Composite",
    className: "ContainerSubmitBatchHeaders",
    modelProperties: {
      contentType: {
        serializedName: "content-type",
        xmlName: "content-type",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerSubmitBatchExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_submitBatchExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerSubmitBatchExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerAcquireLeaseHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_acquireLeaseHeaders",
  type: {
    name: "Composite",
    className: "ContainerAcquireLeaseHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      leaseId: {
        serializedName: "x-ms-lease-id",
        xmlName: "x-ms-lease-id",
        type: {
          name: "String"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerAcquireLeaseExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_acquireLeaseExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerAcquireLeaseExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerReleaseLeaseHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_releaseLeaseHeaders",
  type: {
    name: "Composite",
    className: "ContainerReleaseLeaseHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerReleaseLeaseExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_releaseLeaseExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerReleaseLeaseExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerRenewLeaseHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_renewLeaseHeaders",
  type: {
    name: "Composite",
    className: "ContainerRenewLeaseHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      leaseId: {
        serializedName: "x-ms-lease-id",
        xmlName: "x-ms-lease-id",
        type: {
          name: "String"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerRenewLeaseExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_renewLeaseExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerRenewLeaseExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerBreakLeaseHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_breakLeaseHeaders",
  type: {
    name: "Composite",
    className: "ContainerBreakLeaseHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      leaseTime: {
        serializedName: "x-ms-lease-time",
        xmlName: "x-ms-lease-time",
        type: {
          name: "Number"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerBreakLeaseExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_breakLeaseExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerBreakLeaseExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerChangeLeaseHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_changeLeaseHeaders",
  type: {
    name: "Composite",
    className: "ContainerChangeLeaseHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      leaseId: {
        serializedName: "x-ms-lease-id",
        xmlName: "x-ms-lease-id",
        type: {
          name: "String"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerChangeLeaseExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_changeLeaseExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerChangeLeaseExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerListBlobFlatSegmentHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_listBlobFlatSegmentHeaders",
  type: {
    name: "Composite",
    className: "ContainerListBlobFlatSegmentHeaders",
    modelProperties: {
      contentType: {
        serializedName: "content-type",
        xmlName: "content-type",
        type: {
          name: "String"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerListBlobFlatSegmentExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_listBlobFlatSegmentExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerListBlobFlatSegmentExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerListBlobHierarchySegmentHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_listBlobHierarchySegmentHeaders",
  type: {
    name: "Composite",
    className: "ContainerListBlobHierarchySegmentHeaders",
    modelProperties: {
      contentType: {
        serializedName: "content-type",
        xmlName: "content-type",
        type: {
          name: "String"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerListBlobHierarchySegmentExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_listBlobHierarchySegmentExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerListBlobHierarchySegmentExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerGetAccountInfoHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_getAccountInfoHeaders",
  type: {
    name: "Composite",
    className: "ContainerGetAccountInfoHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      skuName: {
        serializedName: "x-ms-sku-name",
        xmlName: "x-ms-sku-name",
        type: {
          name: "Enum",
          allowedValues: [
            "Standard_LRS",
            "Standard_GRS",
            "Standard_RAGRS",
            "Standard_ZRS",
            "Premium_LRS"
          ]
        }
      },
      accountKind: {
        serializedName: "x-ms-account-kind",
        xmlName: "x-ms-account-kind",
        type: {
          name: "Enum",
          allowedValues: [
            "Storage",
            "BlobStorage",
            "StorageV2",
            "FileStorage",
            "BlockBlobStorage"
          ]
        }
      }
    }
  }
};

export const ContainerGetAccountInfoExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_getAccountInfoExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerGetAccountInfoExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerListBlobFlatSegmentNextHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_listBlobFlatSegmentNextHeaders",
  type: {
    name: "Composite",
    className: "ContainerListBlobFlatSegmentNextHeaders",
    modelProperties: {
      contentType: {
        serializedName: "content-type",
        xmlName: "content-type",
        type: {
          name: "String"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerListBlobFlatSegmentNextExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_listBlobFlatSegmentNextExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerListBlobFlatSegmentNextExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerListBlobHierarchySegmentNextHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_listBlobHierarchySegmentNextHeaders",
  type: {
    name: "Composite",
    className: "ContainerListBlobHierarchySegmentNextHeaders",
    modelProperties: {
      contentType: {
        serializedName: "content-type",
        xmlName: "content-type",
        type: {
          name: "String"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ContainerListBlobHierarchySegmentNextExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Container_listBlobHierarchySegmentNextExceptionHeaders",
  type: {
    name: "Composite",
    className: "ContainerListBlobHierarchySegmentNextExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DirectoryCreateHeaders: coreHttp.CompositeMapper = {
  serializedName: "Directory_createHeaders",
  type: {
    name: "Composite",
    className: "DirectoryCreateHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      contentLength: {
        serializedName: "content-length",
        xmlName: "content-length",
        type: {
          name: "Number"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const DirectoryCreateExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Directory_createExceptionHeaders",
  type: {
    name: "Composite",
    className: "DirectoryCreateExceptionHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DirectoryRenameHeaders: coreHttp.CompositeMapper = {
  serializedName: "Directory_renameHeaders",
  type: {
    name: "Composite",
    className: "DirectoryRenameHeaders",
    modelProperties: {
      marker: {
        serializedName: "x-ms-continuation",
        xmlName: "x-ms-continuation",
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      contentLength: {
        serializedName: "content-length",
        xmlName: "content-length",
        type: {
          name: "Number"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const DirectoryRenameExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Directory_renameExceptionHeaders",
  type: {
    name: "Composite",
    className: "DirectoryRenameExceptionHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DirectoryDeleteHeaders: coreHttp.CompositeMapper = {
  serializedName: "Directory_deleteHeaders",
  type: {
    name: "Composite",
    className: "DirectoryDeleteHeaders",
    modelProperties: {
      marker: {
        serializedName: "x-ms-continuation",
        xmlName: "x-ms-continuation",
        type: {
          name: "String"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const DirectoryDeleteExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Directory_deleteExceptionHeaders",
  type: {
    name: "Composite",
    className: "DirectoryDeleteExceptionHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DirectorySetAccessControlHeaders: coreHttp.CompositeMapper = {
  serializedName: "Directory_setAccessControlHeaders",
  type: {
    name: "Composite",
    className: "DirectorySetAccessControlHeaders",
    modelProperties: {
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DirectorySetAccessControlExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Directory_setAccessControlExceptionHeaders",
  type: {
    name: "Composite",
    className: "DirectorySetAccessControlExceptionHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DirectoryGetAccessControlHeaders: coreHttp.CompositeMapper = {
  serializedName: "Directory_getAccessControlHeaders",
  type: {
    name: "Composite",
    className: "DirectoryGetAccessControlHeaders",
    modelProperties: {
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      xMsOwner: {
        serializedName: "x-ms-owner",
        xmlName: "x-ms-owner",
        type: {
          name: "String"
        }
      },
      xMsGroup: {
        serializedName: "x-ms-group",
        xmlName: "x-ms-group",
        type: {
          name: "String"
        }
      },
      xMsPermissions: {
        serializedName: "x-ms-permissions",
        xmlName: "x-ms-permissions",
        type: {
          name: "String"
        }
      },
      xMsAcl: {
        serializedName: "x-ms-acl",
        xmlName: "x-ms-acl",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DirectoryGetAccessControlExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Directory_getAccessControlExceptionHeaders",
  type: {
    name: "Composite",
    className: "DirectoryGetAccessControlExceptionHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobDownloadHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_downloadHeaders",
  type: {
    name: "Composite",
    className: "BlobDownloadHeaders",
    modelProperties: {
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      metadata: {
        serializedName: "x-ms-meta",
        xmlName: "x-ms-meta",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      objectReplicationPolicyId: {
        serializedName: "x-ms-or-policy-id",
        xmlName: "x-ms-or-policy-id",
        type: {
          name: "String"
        }
      },
      objectReplicationRules: {
        serializedName: "x-ms-or",
        xmlName: "x-ms-or",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      contentLength: {
        serializedName: "content-length",
        xmlName: "content-length",
        type: {
          name: "Number"
        }
      },
      contentType: {
        serializedName: "content-type",
        xmlName: "content-type",
        type: {
          name: "String"
        }
      },
      contentRange: {
        serializedName: "content-range",
        xmlName: "content-range",
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      contentEncoding: {
        serializedName: "content-encoding",
        xmlName: "content-encoding",
        type: {
          name: "String"
        }
      },
      cacheControl: {
        serializedName: "cache-control",
        xmlName: "cache-control",
        type: {
          name: "String"
        }
      },
      contentDisposition: {
        serializedName: "content-disposition",
        xmlName: "content-disposition",
        type: {
          name: "String"
        }
      },
      contentLanguage: {
        serializedName: "content-language",
        xmlName: "content-language",
        type: {
          name: "String"
        }
      },
      blobSequenceNumber: {
        serializedName: "x-ms-blob-sequence-number",
        xmlName: "x-ms-blob-sequence-number",
        type: {
          name: "Number"
        }
      },
      blobType: {
        serializedName: "x-ms-blob-type",
        xmlName: "x-ms-blob-type",
        type: {
          name: "Enum",
          allowedValues: ["BlockBlob", "PageBlob", "AppendBlob"]
        }
      },
      copyCompletedOn: {
        serializedName: "x-ms-copy-completion-time",
        xmlName: "x-ms-copy-completion-time",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      copyStatusDescription: {
        serializedName: "x-ms-copy-status-description",
        xmlName: "x-ms-copy-status-description",
        type: {
          name: "String"
        }
      },
      copyId: {
        serializedName: "x-ms-copy-id",
        xmlName: "x-ms-copy-id",
        type: {
          name: "String"
        }
      },
      copyProgress: {
        serializedName: "x-ms-copy-progress",
        xmlName: "x-ms-copy-progress",
        type: {
          name: "String"
        }
      },
      copySource: {
        serializedName: "x-ms-copy-source",
        xmlName: "x-ms-copy-source",
        type: {
          name: "String"
        }
      },
      copyStatus: {
        serializedName: "x-ms-copy-status",
        xmlName: "x-ms-copy-status",
        type: {
          name: "Enum",
          allowedValues: ["pending", "success", "aborted", "failed"]
        }
      },
      leaseDuration: {
        serializedName: "x-ms-lease-duration",
        xmlName: "x-ms-lease-duration",
        type: {
          name: "Enum",
          allowedValues: ["infinite", "fixed"]
        }
      },
      leaseState: {
        serializedName: "x-ms-lease-state",
        xmlName: "x-ms-lease-state",
        type: {
          name: "Enum",
          allowedValues: [
            "available",
            "leased",
            "expired",
            "breaking",
            "broken"
          ]
        }
      },
      leaseStatus: {
        serializedName: "x-ms-lease-status",
        xmlName: "x-ms-lease-status",
        type: {
          name: "Enum",
          allowedValues: ["locked", "unlocked"]
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      versionId: {
        serializedName: "x-ms-version-id",
        xmlName: "x-ms-version-id",
        type: {
          name: "String"
        }
      },
      isCurrentVersion: {
        serializedName: "x-ms-is-current-version",
        xmlName: "x-ms-is-current-version",
        type: {
          name: "Boolean"
        }
      },
      acceptRanges: {
        serializedName: "accept-ranges",
        xmlName: "accept-ranges",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      blobCommittedBlockCount: {
        serializedName: "x-ms-blob-committed-block-count",
        xmlName: "x-ms-blob-committed-block-count",
        type: {
          name: "Number"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-server-encrypted",
        xmlName: "x-ms-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      },
      blobContentMD5: {
        serializedName: "x-ms-blob-content-md5",
        xmlName: "x-ms-blob-content-md5",
        type: {
          name: "ByteArray"
        }
      },
      tagCount: {
        serializedName: "x-ms-tag-count",
        xmlName: "x-ms-tag-count",
        type: {
          name: "Number"
        }
      },
      isSealed: {
        serializedName: "x-ms-blob-sealed",
        xmlName: "x-ms-blob-sealed",
        type: {
          name: "Boolean"
        }
      },
      lastAccessed: {
        serializedName: "x-ms-last-access-time",
        xmlName: "x-ms-last-access-time",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobDownloadExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_downloadExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobDownloadExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobGetPropertiesHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_getPropertiesHeaders",
  type: {
    name: "Composite",
    className: "BlobGetPropertiesHeaders",
    modelProperties: {
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      createdOn: {
        serializedName: "x-ms-creation-time",
        xmlName: "x-ms-creation-time",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      metadata: {
        serializedName: "x-ms-meta",
        xmlName: "x-ms-meta",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      objectReplicationPolicyId: {
        serializedName: "x-ms-or-policy-id",
        xmlName: "x-ms-or-policy-id",
        type: {
          name: "String"
        }
      },
      objectReplicationRules: {
        serializedName: "x-ms-or",
        xmlName: "x-ms-or",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      blobType: {
        serializedName: "x-ms-blob-type",
        xmlName: "x-ms-blob-type",
        type: {
          name: "Enum",
          allowedValues: ["BlockBlob", "PageBlob", "AppendBlob"]
        }
      },
      copyCompletedOn: {
        serializedName: "x-ms-copy-completion-time",
        xmlName: "x-ms-copy-completion-time",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      copyStatusDescription: {
        serializedName: "x-ms-copy-status-description",
        xmlName: "x-ms-copy-status-description",
        type: {
          name: "String"
        }
      },
      copyId: {
        serializedName: "x-ms-copy-id",
        xmlName: "x-ms-copy-id",
        type: {
          name: "String"
        }
      },
      copyProgress: {
        serializedName: "x-ms-copy-progress",
        xmlName: "x-ms-copy-progress",
        type: {
          name: "String"
        }
      },
      copySource: {
        serializedName: "x-ms-copy-source",
        xmlName: "x-ms-copy-source",
        type: {
          name: "String"
        }
      },
      copyStatus: {
        serializedName: "x-ms-copy-status",
        xmlName: "x-ms-copy-status",
        type: {
          name: "Enum",
          allowedValues: ["pending", "success", "aborted", "failed"]
        }
      },
      isIncrementalCopy: {
        serializedName: "x-ms-incremental-copy",
        xmlName: "x-ms-incremental-copy",
        type: {
          name: "Boolean"
        }
      },
      destinationSnapshot: {
        serializedName: "x-ms-copy-destination-snapshot",
        xmlName: "x-ms-copy-destination-snapshot",
        type: {
          name: "String"
        }
      },
      leaseDuration: {
        serializedName: "x-ms-lease-duration",
        xmlName: "x-ms-lease-duration",
        type: {
          name: "Enum",
          allowedValues: ["infinite", "fixed"]
        }
      },
      leaseState: {
        serializedName: "x-ms-lease-state",
        xmlName: "x-ms-lease-state",
        type: {
          name: "Enum",
          allowedValues: [
            "available",
            "leased",
            "expired",
            "breaking",
            "broken"
          ]
        }
      },
      leaseStatus: {
        serializedName: "x-ms-lease-status",
        xmlName: "x-ms-lease-status",
        type: {
          name: "Enum",
          allowedValues: ["locked", "unlocked"]
        }
      },
      contentLength: {
        serializedName: "content-length",
        xmlName: "content-length",
        type: {
          name: "Number"
        }
      },
      contentType: {
        serializedName: "content-type",
        xmlName: "content-type",
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      contentEncoding: {
        serializedName: "content-encoding",
        xmlName: "content-encoding",
        type: {
          name: "String"
        }
      },
      contentDisposition: {
        serializedName: "content-disposition",
        xmlName: "content-disposition",
        type: {
          name: "String"
        }
      },
      contentLanguage: {
        serializedName: "content-language",
        xmlName: "content-language",
        type: {
          name: "String"
        }
      },
      cacheControl: {
        serializedName: "cache-control",
        xmlName: "cache-control",
        type: {
          name: "String"
        }
      },
      blobSequenceNumber: {
        serializedName: "x-ms-blob-sequence-number",
        xmlName: "x-ms-blob-sequence-number",
        type: {
          name: "Number"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      acceptRanges: {
        serializedName: "accept-ranges",
        xmlName: "accept-ranges",
        type: {
          name: "String"
        }
      },
      blobCommittedBlockCount: {
        serializedName: "x-ms-blob-committed-block-count",
        xmlName: "x-ms-blob-committed-block-count",
        type: {
          name: "Number"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-server-encrypted",
        xmlName: "x-ms-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      },
      accessTier: {
        serializedName: "x-ms-access-tier",
        xmlName: "x-ms-access-tier",
        type: {
          name: "String"
        }
      },
      accessTierInferred: {
        serializedName: "x-ms-access-tier-inferred",
        xmlName: "x-ms-access-tier-inferred",
        type: {
          name: "Boolean"
        }
      },
      archiveStatus: {
        serializedName: "x-ms-archive-status",
        xmlName: "x-ms-archive-status",
        type: {
          name: "String"
        }
      },
      accessTierChangedOn: {
        serializedName: "x-ms-access-tier-change-time",
        xmlName: "x-ms-access-tier-change-time",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      versionId: {
        serializedName: "x-ms-version-id",
        xmlName: "x-ms-version-id",
        type: {
          name: "String"
        }
      },
      isCurrentVersion: {
        serializedName: "x-ms-is-current-version",
        xmlName: "x-ms-is-current-version",
        type: {
          name: "Boolean"
        }
      },
      tagCount: {
        serializedName: "x-ms-tag-count",
        xmlName: "x-ms-tag-count",
        type: {
          name: "Number"
        }
      },
      expiresOn: {
        serializedName: "x-ms-expiry-time",
        xmlName: "x-ms-expiry-time",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isSealed: {
        serializedName: "x-ms-blob-sealed",
        xmlName: "x-ms-blob-sealed",
        type: {
          name: "Boolean"
        }
      },
      rehydratePriority: {
        serializedName: "x-ms-rehydrate-priority",
        xmlName: "x-ms-rehydrate-priority",
        type: {
          name: "String"
        }
      },
      lastAccessed: {
        serializedName: "x-ms-last-access-time",
        xmlName: "x-ms-last-access-time",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobGetPropertiesExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_getPropertiesExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobGetPropertiesExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobDeleteHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_deleteHeaders",
  type: {
    name: "Composite",
    className: "BlobDeleteHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobDeleteExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_deleteExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobDeleteExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobSetAccessControlHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_setAccessControlHeaders",
  type: {
    name: "Composite",
    className: "BlobSetAccessControlHeaders",
    modelProperties: {
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobSetAccessControlExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_setAccessControlExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobSetAccessControlExceptionHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobGetAccessControlHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_getAccessControlHeaders",
  type: {
    name: "Composite",
    className: "BlobGetAccessControlHeaders",
    modelProperties: {
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      xMsOwner: {
        serializedName: "x-ms-owner",
        xmlName: "x-ms-owner",
        type: {
          name: "String"
        }
      },
      xMsGroup: {
        serializedName: "x-ms-group",
        xmlName: "x-ms-group",
        type: {
          name: "String"
        }
      },
      xMsPermissions: {
        serializedName: "x-ms-permissions",
        xmlName: "x-ms-permissions",
        type: {
          name: "String"
        }
      },
      xMsAcl: {
        serializedName: "x-ms-acl",
        xmlName: "x-ms-acl",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobGetAccessControlExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_getAccessControlExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobGetAccessControlExceptionHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobRenameHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_renameHeaders",
  type: {
    name: "Composite",
    className: "BlobRenameHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      contentLength: {
        serializedName: "content-length",
        xmlName: "content-length",
        type: {
          name: "Number"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobRenameExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_renameExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobRenameExceptionHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobUndeleteHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_undeleteHeaders",
  type: {
    name: "Composite",
    className: "BlobUndeleteHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobUndeleteExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_undeleteExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobUndeleteExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobSetExpiryHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_setExpiryHeaders",
  type: {
    name: "Composite",
    className: "BlobSetExpiryHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobSetExpiryExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_setExpiryExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobSetExpiryExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobSetHttpHeadersHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_setHttpHeadersHeaders",
  type: {
    name: "Composite",
    className: "BlobSetHttpHeadersHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      blobSequenceNumber: {
        serializedName: "x-ms-blob-sequence-number",
        xmlName: "x-ms-blob-sequence-number",
        type: {
          name: "Number"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobSetHttpHeadersExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_setHttpHeadersExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobSetHttpHeadersExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobSetMetadataHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_setMetadataHeaders",
  type: {
    name: "Composite",
    className: "BlobSetMetadataHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      versionId: {
        serializedName: "x-ms-version-id",
        xmlName: "x-ms-version-id",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobSetMetadataExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_setMetadataExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobSetMetadataExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobAcquireLeaseHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_acquireLeaseHeaders",
  type: {
    name: "Composite",
    className: "BlobAcquireLeaseHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      leaseId: {
        serializedName: "x-ms-lease-id",
        xmlName: "x-ms-lease-id",
        type: {
          name: "String"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobAcquireLeaseExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_acquireLeaseExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobAcquireLeaseExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobReleaseLeaseHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_releaseLeaseHeaders",
  type: {
    name: "Composite",
    className: "BlobReleaseLeaseHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobReleaseLeaseExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_releaseLeaseExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobReleaseLeaseExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobRenewLeaseHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_renewLeaseHeaders",
  type: {
    name: "Composite",
    className: "BlobRenewLeaseHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      leaseId: {
        serializedName: "x-ms-lease-id",
        xmlName: "x-ms-lease-id",
        type: {
          name: "String"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobRenewLeaseExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_renewLeaseExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobRenewLeaseExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobChangeLeaseHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_changeLeaseHeaders",
  type: {
    name: "Composite",
    className: "BlobChangeLeaseHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      leaseId: {
        serializedName: "x-ms-lease-id",
        xmlName: "x-ms-lease-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobChangeLeaseExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_changeLeaseExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobChangeLeaseExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobBreakLeaseHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_breakLeaseHeaders",
  type: {
    name: "Composite",
    className: "BlobBreakLeaseHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      leaseTime: {
        serializedName: "x-ms-lease-time",
        xmlName: "x-ms-lease-time",
        type: {
          name: "Number"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobBreakLeaseExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_breakLeaseExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobBreakLeaseExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobCreateSnapshotHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_createSnapshotHeaders",
  type: {
    name: "Composite",
    className: "BlobCreateSnapshotHeaders",
    modelProperties: {
      snapshot: {
        serializedName: "x-ms-snapshot",
        xmlName: "x-ms-snapshot",
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      versionId: {
        serializedName: "x-ms-version-id",
        xmlName: "x-ms-version-id",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const BlobCreateSnapshotExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_createSnapshotExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobCreateSnapshotExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobStartCopyFromURLHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_startCopyFromURLHeaders",
  type: {
    name: "Composite",
    className: "BlobStartCopyFromURLHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      versionId: {
        serializedName: "x-ms-version-id",
        xmlName: "x-ms-version-id",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      copyId: {
        serializedName: "x-ms-copy-id",
        xmlName: "x-ms-copy-id",
        type: {
          name: "String"
        }
      },
      copyStatus: {
        serializedName: "x-ms-copy-status",
        xmlName: "x-ms-copy-status",
        type: {
          name: "Enum",
          allowedValues: ["pending", "success", "aborted", "failed"]
        }
      }
    }
  }
};

export const BlobStartCopyFromURLExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_startCopyFromURLExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobStartCopyFromURLExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobCopyFromURLHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_copyFromURLHeaders",
  type: {
    name: "Composite",
    className: "BlobCopyFromURLHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      versionId: {
        serializedName: "x-ms-version-id",
        xmlName: "x-ms-version-id",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      copyId: {
        serializedName: "x-ms-copy-id",
        xmlName: "x-ms-copy-id",
        type: {
          name: "String"
        }
      },
      copyStatus: {
        defaultValue: "success",
        isConstant: true,
        serializedName: "x-ms-copy-status",
        type: {
          name: "String"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      xMsContentCrc64: {
        serializedName: "x-ms-content-crc64",
        xmlName: "x-ms-content-crc64",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const BlobCopyFromURLExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_copyFromURLExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobCopyFromURLExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobAbortCopyFromURLHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_abortCopyFromURLHeaders",
  type: {
    name: "Composite",
    className: "BlobAbortCopyFromURLHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobAbortCopyFromURLExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_abortCopyFromURLExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobAbortCopyFromURLExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobSetTierHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_setTierHeaders",
  type: {
    name: "Composite",
    className: "BlobSetTierHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobSetTierExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_setTierExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobSetTierExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobGetAccountInfoHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_getAccountInfoHeaders",
  type: {
    name: "Composite",
    className: "BlobGetAccountInfoHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      skuName: {
        serializedName: "x-ms-sku-name",
        xmlName: "x-ms-sku-name",
        type: {
          name: "Enum",
          allowedValues: [
            "Standard_LRS",
            "Standard_GRS",
            "Standard_RAGRS",
            "Standard_ZRS",
            "Premium_LRS"
          ]
        }
      },
      accountKind: {
        serializedName: "x-ms-account-kind",
        xmlName: "x-ms-account-kind",
        type: {
          name: "Enum",
          allowedValues: [
            "Storage",
            "BlobStorage",
            "StorageV2",
            "FileStorage",
            "BlockBlobStorage"
          ]
        }
      }
    }
  }
};

export const BlobGetAccountInfoExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_getAccountInfoExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobGetAccountInfoExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobQueryHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_queryHeaders",
  type: {
    name: "Composite",
    className: "BlobQueryHeaders",
    modelProperties: {
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      metadata: {
        serializedName: "x-ms-meta",
        xmlName: "x-ms-meta",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      contentLength: {
        serializedName: "content-length",
        xmlName: "content-length",
        type: {
          name: "Number"
        }
      },
      contentType: {
        serializedName: "content-type",
        xmlName: "content-type",
        type: {
          name: "String"
        }
      },
      contentRange: {
        serializedName: "content-range",
        xmlName: "content-range",
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      contentEncoding: {
        serializedName: "content-encoding",
        xmlName: "content-encoding",
        type: {
          name: "String"
        }
      },
      cacheControl: {
        serializedName: "cache-control",
        xmlName: "cache-control",
        type: {
          name: "String"
        }
      },
      contentDisposition: {
        serializedName: "content-disposition",
        xmlName: "content-disposition",
        type: {
          name: "String"
        }
      },
      contentLanguage: {
        serializedName: "content-language",
        xmlName: "content-language",
        type: {
          name: "String"
        }
      },
      blobSequenceNumber: {
        serializedName: "x-ms-blob-sequence-number",
        xmlName: "x-ms-blob-sequence-number",
        type: {
          name: "Number"
        }
      },
      blobType: {
        serializedName: "x-ms-blob-type",
        xmlName: "x-ms-blob-type",
        type: {
          name: "Enum",
          allowedValues: ["BlockBlob", "PageBlob", "AppendBlob"]
        }
      },
      copyCompletionTime: {
        serializedName: "x-ms-copy-completion-time",
        xmlName: "x-ms-copy-completion-time",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      copyStatusDescription: {
        serializedName: "x-ms-copy-status-description",
        xmlName: "x-ms-copy-status-description",
        type: {
          name: "String"
        }
      },
      copyId: {
        serializedName: "x-ms-copy-id",
        xmlName: "x-ms-copy-id",
        type: {
          name: "String"
        }
      },
      copyProgress: {
        serializedName: "x-ms-copy-progress",
        xmlName: "x-ms-copy-progress",
        type: {
          name: "String"
        }
      },
      copySource: {
        serializedName: "x-ms-copy-source",
        xmlName: "x-ms-copy-source",
        type: {
          name: "String"
        }
      },
      copyStatus: {
        serializedName: "x-ms-copy-status",
        xmlName: "x-ms-copy-status",
        type: {
          name: "Enum",
          allowedValues: ["pending", "success", "aborted", "failed"]
        }
      },
      leaseDuration: {
        serializedName: "x-ms-lease-duration",
        xmlName: "x-ms-lease-duration",
        type: {
          name: "Enum",
          allowedValues: ["infinite", "fixed"]
        }
      },
      leaseState: {
        serializedName: "x-ms-lease-state",
        xmlName: "x-ms-lease-state",
        type: {
          name: "Enum",
          allowedValues: [
            "available",
            "leased",
            "expired",
            "breaking",
            "broken"
          ]
        }
      },
      leaseStatus: {
        serializedName: "x-ms-lease-status",
        xmlName: "x-ms-lease-status",
        type: {
          name: "Enum",
          allowedValues: ["locked", "unlocked"]
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      acceptRanges: {
        serializedName: "accept-ranges",
        xmlName: "accept-ranges",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      blobCommittedBlockCount: {
        serializedName: "x-ms-blob-committed-block-count",
        xmlName: "x-ms-blob-committed-block-count",
        type: {
          name: "Number"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-server-encrypted",
        xmlName: "x-ms-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      },
      blobContentMD5: {
        serializedName: "x-ms-blob-content-md5",
        xmlName: "x-ms-blob-content-md5",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const BlobQueryExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_queryExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobQueryExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobGetTagsHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_getTagsHeaders",
  type: {
    name: "Composite",
    className: "BlobGetTagsHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobGetTagsExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_getTagsExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobGetTagsExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobSetTagsHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_setTagsHeaders",
  type: {
    name: "Composite",
    className: "BlobSetTagsHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobSetTagsExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Blob_setTagsExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlobSetTagsExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PageBlobCreateHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_createHeaders",
  type: {
    name: "Composite",
    className: "PageBlobCreateHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      versionId: {
        serializedName: "x-ms-version-id",
        xmlName: "x-ms-version-id",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PageBlobCreateExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_createExceptionHeaders",
  type: {
    name: "Composite",
    className: "PageBlobCreateExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PageBlobUploadPagesHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_uploadPagesHeaders",
  type: {
    name: "Composite",
    className: "PageBlobUploadPagesHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      xMsContentCrc64: {
        serializedName: "x-ms-content-crc64",
        xmlName: "x-ms-content-crc64",
        type: {
          name: "ByteArray"
        }
      },
      blobSequenceNumber: {
        serializedName: "x-ms-blob-sequence-number",
        xmlName: "x-ms-blob-sequence-number",
        type: {
          name: "Number"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PageBlobUploadPagesExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_uploadPagesExceptionHeaders",
  type: {
    name: "Composite",
    className: "PageBlobUploadPagesExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PageBlobClearPagesHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_clearPagesHeaders",
  type: {
    name: "Composite",
    className: "PageBlobClearPagesHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      xMsContentCrc64: {
        serializedName: "x-ms-content-crc64",
        xmlName: "x-ms-content-crc64",
        type: {
          name: "ByteArray"
        }
      },
      blobSequenceNumber: {
        serializedName: "x-ms-blob-sequence-number",
        xmlName: "x-ms-blob-sequence-number",
        type: {
          name: "Number"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const PageBlobClearPagesExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_clearPagesExceptionHeaders",
  type: {
    name: "Composite",
    className: "PageBlobClearPagesExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PageBlobUploadPagesFromURLHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_uploadPagesFromURLHeaders",
  type: {
    name: "Composite",
    className: "PageBlobUploadPagesFromURLHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      xMsContentCrc64: {
        serializedName: "x-ms-content-crc64",
        xmlName: "x-ms-content-crc64",
        type: {
          name: "ByteArray"
        }
      },
      blobSequenceNumber: {
        serializedName: "x-ms-blob-sequence-number",
        xmlName: "x-ms-blob-sequence-number",
        type: {
          name: "Number"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PageBlobUploadPagesFromURLExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_uploadPagesFromURLExceptionHeaders",
  type: {
    name: "Composite",
    className: "PageBlobUploadPagesFromURLExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PageBlobGetPageRangesHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_getPageRangesHeaders",
  type: {
    name: "Composite",
    className: "PageBlobGetPageRangesHeaders",
    modelProperties: {
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      blobContentLength: {
        serializedName: "x-ms-blob-content-length",
        xmlName: "x-ms-blob-content-length",
        type: {
          name: "Number"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const PageBlobGetPageRangesExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_getPageRangesExceptionHeaders",
  type: {
    name: "Composite",
    className: "PageBlobGetPageRangesExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PageBlobGetPageRangesDiffHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_getPageRangesDiffHeaders",
  type: {
    name: "Composite",
    className: "PageBlobGetPageRangesDiffHeaders",
    modelProperties: {
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      blobContentLength: {
        serializedName: "x-ms-blob-content-length",
        xmlName: "x-ms-blob-content-length",
        type: {
          name: "Number"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const PageBlobGetPageRangesDiffExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_getPageRangesDiffExceptionHeaders",
  type: {
    name: "Composite",
    className: "PageBlobGetPageRangesDiffExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PageBlobResizeHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_resizeHeaders",
  type: {
    name: "Composite",
    className: "PageBlobResizeHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      blobSequenceNumber: {
        serializedName: "x-ms-blob-sequence-number",
        xmlName: "x-ms-blob-sequence-number",
        type: {
          name: "Number"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const PageBlobResizeExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_resizeExceptionHeaders",
  type: {
    name: "Composite",
    className: "PageBlobResizeExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PageBlobUpdateSequenceNumberHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_updateSequenceNumberHeaders",
  type: {
    name: "Composite",
    className: "PageBlobUpdateSequenceNumberHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      blobSequenceNumber: {
        serializedName: "x-ms-blob-sequence-number",
        xmlName: "x-ms-blob-sequence-number",
        type: {
          name: "Number"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const PageBlobUpdateSequenceNumberExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_updateSequenceNumberExceptionHeaders",
  type: {
    name: "Composite",
    className: "PageBlobUpdateSequenceNumberExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PageBlobCopyIncrementalHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_copyIncrementalHeaders",
  type: {
    name: "Composite",
    className: "PageBlobCopyIncrementalHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      copyId: {
        serializedName: "x-ms-copy-id",
        xmlName: "x-ms-copy-id",
        type: {
          name: "String"
        }
      },
      copyStatus: {
        serializedName: "x-ms-copy-status",
        xmlName: "x-ms-copy-status",
        type: {
          name: "Enum",
          allowedValues: ["pending", "success", "aborted", "failed"]
        }
      }
    }
  }
};

export const PageBlobCopyIncrementalExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "PageBlob_copyIncrementalExceptionHeaders",
  type: {
    name: "Composite",
    className: "PageBlobCopyIncrementalExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppendBlobCreateHeaders: coreHttp.CompositeMapper = {
  serializedName: "AppendBlob_createHeaders",
  type: {
    name: "Composite",
    className: "AppendBlobCreateHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      versionId: {
        serializedName: "x-ms-version-id",
        xmlName: "x-ms-version-id",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppendBlobCreateExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "AppendBlob_createExceptionHeaders",
  type: {
    name: "Composite",
    className: "AppendBlobCreateExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppendBlobAppendBlockHeaders: coreHttp.CompositeMapper = {
  serializedName: "AppendBlob_appendBlockHeaders",
  type: {
    name: "Composite",
    className: "AppendBlobAppendBlockHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      xMsContentCrc64: {
        serializedName: "x-ms-content-crc64",
        xmlName: "x-ms-content-crc64",
        type: {
          name: "ByteArray"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      blobAppendOffset: {
        serializedName: "x-ms-blob-append-offset",
        xmlName: "x-ms-blob-append-offset",
        type: {
          name: "String"
        }
      },
      blobCommittedBlockCount: {
        serializedName: "x-ms-blob-committed-block-count",
        xmlName: "x-ms-blob-committed-block-count",
        type: {
          name: "Number"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppendBlobAppendBlockExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "AppendBlob_appendBlockExceptionHeaders",
  type: {
    name: "Composite",
    className: "AppendBlobAppendBlockExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppendBlobAppendBlockFromUrlHeaders: coreHttp.CompositeMapper = {
  serializedName: "AppendBlob_appendBlockFromUrlHeaders",
  type: {
    name: "Composite",
    className: "AppendBlobAppendBlockFromUrlHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      xMsContentCrc64: {
        serializedName: "x-ms-content-crc64",
        xmlName: "x-ms-content-crc64",
        type: {
          name: "ByteArray"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      blobAppendOffset: {
        serializedName: "x-ms-blob-append-offset",
        xmlName: "x-ms-blob-append-offset",
        type: {
          name: "String"
        }
      },
      blobCommittedBlockCount: {
        serializedName: "x-ms-blob-committed-block-count",
        xmlName: "x-ms-blob-committed-block-count",
        type: {
          name: "Number"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const AppendBlobAppendBlockFromUrlExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "AppendBlob_appendBlockFromUrlExceptionHeaders",
  type: {
    name: "Composite",
    className: "AppendBlobAppendBlockFromUrlExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppendBlobSealHeaders: coreHttp.CompositeMapper = {
  serializedName: "AppendBlob_sealHeaders",
  type: {
    name: "Composite",
    className: "AppendBlobSealHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isSealed: {
        serializedName: "x-ms-blob-sealed",
        xmlName: "x-ms-blob-sealed",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const AppendBlobSealExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "AppendBlob_sealExceptionHeaders",
  type: {
    name: "Composite",
    className: "AppendBlobSealExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlockBlobUploadHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_uploadHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobUploadHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      versionId: {
        serializedName: "x-ms-version-id",
        xmlName: "x-ms-version-id",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlockBlobUploadExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_uploadExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobUploadExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlockBlobPutBlobFromUrlHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_putBlobFromUrlHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobPutBlobFromUrlHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      versionId: {
        serializedName: "x-ms-version-id",
        xmlName: "x-ms-version-id",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlockBlobPutBlobFromUrlExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_putBlobFromUrlExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobPutBlobFromUrlExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlockBlobStageBlockHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_stageBlockHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobStageBlockHeaders",
    modelProperties: {
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      xMsContentCrc64: {
        serializedName: "x-ms-content-crc64",
        xmlName: "x-ms-content-crc64",
        type: {
          name: "ByteArray"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlockBlobStageBlockExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_stageBlockExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobStageBlockExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlockBlobStageBlockFromURLHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_stageBlockFromURLHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobStageBlockFromURLHeaders",
    modelProperties: {
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      xMsContentCrc64: {
        serializedName: "x-ms-content-crc64",
        xmlName: "x-ms-content-crc64",
        type: {
          name: "ByteArray"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlockBlobStageBlockFromURLExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_stageBlockFromURLExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobStageBlockFromURLExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlockBlobCommitBlockListHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_commitBlockListHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobCommitBlockListHeaders",
    modelProperties: {
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      xMsContentCrc64: {
        serializedName: "x-ms-content-crc64",
        xmlName: "x-ms-content-crc64",
        type: {
          name: "ByteArray"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      versionId: {
        serializedName: "x-ms-version-id",
        xmlName: "x-ms-version-id",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlockBlobCommitBlockListExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_commitBlockListExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobCommitBlockListExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlockBlobGetBlockListHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_getBlockListHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobGetBlockListHeaders",
    modelProperties: {
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "content-type",
        xmlName: "content-type",
        type: {
          name: "String"
        }
      },
      blobContentLength: {
        serializedName: "x-ms-blob-content-length",
        xmlName: "x-ms-blob-content-length",
        type: {
          name: "Number"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlockBlobGetBlockListExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_getBlockListExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobGetBlockListExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

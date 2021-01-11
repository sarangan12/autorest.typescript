/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export interface AzureMetricsDocument {
  /** Gets or sets Time property (in ISO 8601 format) */
  time: string;
  data: AzureMetricsData;
}

export interface AzureMetricsData {
  baseData: AzureMetricsBaseData;
}

export interface AzureMetricsBaseData {
  /** Gets or sets the Metric name */
  metric: string;
  /** Gets or sets the Metric namespace */
  namespace: string;
  /** Gets or sets the list of dimension names (optional) */
  dimNames?: string[];
  /** Gets or sets the list of time series data for the metric (one per unique dimension combination) */
  series: AzureTimeSeriesData[];
}

export interface AzureTimeSeriesData {
  /** Gets or sets dimension values */
  dimValues?: string[];
  /** Gets or sets Min value */
  min: number;
  /** Gets or sets Max value */
  max: number;
  /** Gets or sets Sum value */
  sum: number;
  /** Gets or sets Count value */
  count: number;
}

export interface AzureMetricsResult {
  /** Http status code response */
  statusCode?: number;
  apiFailureResponse?: ApiFailureResponse;
}

export interface ApiFailureResponse {
  error?: ApiError;
}

export interface ApiError {
  /** Gets or sets the azure metrics error code */
  code?: string;
  /** Gets or sets the azure metrics error message */
  message?: string;
}

/** Contains response data for the create operation. */
export type MetricsCreateResponse = AzureMetricsResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AzureMetricsResult;
  };
};

/** Optional parameters. */
export interface MonitorClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}

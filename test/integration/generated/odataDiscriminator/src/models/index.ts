/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreHttps from "@azure/core-rest-pipeline";

export type LexicalAnalyzerUnion =
  | LexicalAnalyzer
  | PatternAnalyzer
  | LuceneStandardAnalyzer
  | StopAnalyzer;

/** Base type for analyzers. */
export interface LexicalAnalyzer {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  odataType:
    | "#Microsoft.Azure.Search.PatternAnalyzer"
    | "#Microsoft.Azure.Search.StandardAnalyzer"
    | "#Microsoft.Azure.Search.StopAnalyzer";
  /** The name of the analyzer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters. */
  name: string;
}

/** Tokenizer for path-like hierarchies. This tokenizer is implemented using Apache Lucene. */
export interface PathHierarchyTokenizerV2 {
  /** The delimiter character to use. Default is "/". */
  delimiter?: string;
  /** A value that, if set, replaces the delimiter character. Default is "/". */
  replacement?: string;
}

/** Flexibly separates text into terms via a regular expression pattern. This analyzer is implemented using Apache Lucene. */
export type PatternAnalyzer = LexicalAnalyzer & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  odataType: "#Microsoft.Azure.Search.PatternAnalyzer";
  /** A value indicating whether terms should be lower-cased. Default is true. */
  lowerCaseTerms?: boolean;
  /** A regular expression pattern to match token separators. Default is an expression that matches one or more non-word characters. */
  pattern?: string;
  /** A list of stopwords. */
  stopwords?: string[];
};

/** Standard Apache Lucene analyzer; Composed of the standard tokenizer, lowercase filter and stop filter. */
export type LuceneStandardAnalyzer = LexicalAnalyzer & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  odataType: "#Microsoft.Azure.Search.StandardAnalyzer";
  /** The maximum token length. Default is 255. Tokens longer than the maximum length are split. The maximum token length that can be used is 300 characters. */
  maxTokenLength?: number;
  /** A list of stopwords. */
  stopwords?: string[];
};

/** Divides text at non-letters; Applies the lowercase and stopword token filters. This analyzer is implemented using Apache Lucene. */
export type StopAnalyzer = LexicalAnalyzer & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  odataType: "#Microsoft.Azure.Search.StopAnalyzer";
  /** A list of stopwords. */
  stopwords?: string[];
};

/** Known values of {@link Enum0} that the service accepts. */
export const enum KnownEnum0 {
  One = "one",
  Two = "two"
}

/**
 * Defines values for Enum0. \
 * {@link KnownEnum0} can be used interchangeably with Enum0,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **one** \
 * **two**
 */
export type Enum0 = string;

/** Contains response data for the apiV1ValueGet operation. */
export type ODataDiscriminatorClientApiV1ValueGetResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface ODataDiscriminatorClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}

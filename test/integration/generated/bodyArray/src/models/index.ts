/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export interface ErrorModel {
  status?: number;
  message?: string;
}

export interface Product {
  integer?: number;
  string?: string;
}

/** Known values of {@link Enum0} that the service accepts. */
export const enum KnownEnum0 {
  Foo1 = "foo1",
  Foo2 = "foo2",
  Foo3 = "foo3"
}

/**
 * Defines values for Enum0. \
 * {@link KnownEnum0} can be used interchangeably with Enum0,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **foo1** \
 * **foo2** \
 * **foo3**
 */
export type Enum0 = string;

/** Known values of {@link Enum1} that the service accepts. */
export const enum KnownEnum1 {
  Foo1 = "foo1",
  Foo2 = "foo2",
  Foo3 = "foo3"
}

/**
 * Defines values for Enum1. \
 * {@link KnownEnum1} can be used interchangeably with Enum1,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **foo1** \
 * **foo2** \
 * **foo3**
 */
export type Enum1 = string;
/** Defines values for FooEnum. */
export type FooEnum = "foo1" | "foo2" | "foo3";

/** Contains response data for the getNull operation. */
export type ArrayGetNullResponse = {
  /** The parsed response body. */
  body: number[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: number[];
  };
};

/** Contains response data for the getInvalid operation. */
export type ArrayGetInvalidResponse = {
  /** The parsed response body. */
  body: number[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: number[];
  };
};

/** Contains response data for the getEmpty operation. */
export type ArrayGetEmptyResponse = {
  /** The parsed response body. */
  body: number[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: number[];
  };
};

/** Contains response data for the getBooleanTfft operation. */
export type ArrayGetBooleanTfftResponse = {
  /** The parsed response body. */
  body: boolean[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: boolean[];
  };
};

/** Contains response data for the getBooleanInvalidNull operation. */
export type ArrayGetBooleanInvalidNullResponse = {
  /** The parsed response body. */
  body: boolean[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: boolean[];
  };
};

/** Contains response data for the getBooleanInvalidString operation. */
export type ArrayGetBooleanInvalidStringResponse = {
  /** The parsed response body. */
  body: boolean[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: boolean[];
  };
};

/** Contains response data for the getIntegerValid operation. */
export type ArrayGetIntegerValidResponse = {
  /** The parsed response body. */
  body: number[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: number[];
  };
};

/** Contains response data for the getIntInvalidNull operation. */
export type ArrayGetIntInvalidNullResponse = {
  /** The parsed response body. */
  body: number[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: number[];
  };
};

/** Contains response data for the getIntInvalidString operation. */
export type ArrayGetIntInvalidStringResponse = {
  /** The parsed response body. */
  body: number[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: number[];
  };
};

/** Contains response data for the getLongValid operation. */
export type ArrayGetLongValidResponse = {
  /** The parsed response body. */
  body: number[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: number[];
  };
};

/** Contains response data for the getLongInvalidNull operation. */
export type ArrayGetLongInvalidNullResponse = {
  /** The parsed response body. */
  body: number[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: number[];
  };
};

/** Contains response data for the getLongInvalidString operation. */
export type ArrayGetLongInvalidStringResponse = {
  /** The parsed response body. */
  body: number[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: number[];
  };
};

/** Contains response data for the getFloatValid operation. */
export type ArrayGetFloatValidResponse = {
  /** The parsed response body. */
  body: number[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: number[];
  };
};

/** Contains response data for the getFloatInvalidNull operation. */
export type ArrayGetFloatInvalidNullResponse = {
  /** The parsed response body. */
  body: number[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: number[];
  };
};

/** Contains response data for the getFloatInvalidString operation. */
export type ArrayGetFloatInvalidStringResponse = {
  /** The parsed response body. */
  body: number[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: number[];
  };
};

/** Contains response data for the getDoubleValid operation. */
export type ArrayGetDoubleValidResponse = {
  /** The parsed response body. */
  body: number[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: number[];
  };
};

/** Contains response data for the getDoubleInvalidNull operation. */
export type ArrayGetDoubleInvalidNullResponse = {
  /** The parsed response body. */
  body: number[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: number[];
  };
};

/** Contains response data for the getDoubleInvalidString operation. */
export type ArrayGetDoubleInvalidStringResponse = {
  /** The parsed response body. */
  body: number[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: number[];
  };
};

/** Contains response data for the getStringValid operation. */
export type ArrayGetStringValidResponse = {
  /** The parsed response body. */
  body: string[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: string[];
  };
};

/** Contains response data for the getEnumValid operation. */
export type ArrayGetEnumValidResponse = {
  /** The parsed response body. */
  body: FooEnum[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: FooEnum[];
  };
};

/** Contains response data for the getStringEnumValid operation. */
export type ArrayGetStringEnumValidResponse = {
  /** The parsed response body. */
  body: Enum0[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Enum0[];
  };
};

/** Contains response data for the getStringWithNull operation. */
export type ArrayGetStringWithNullResponse = {
  /** The parsed response body. */
  body: (string | null)[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: (string | null)[];
  };
};

/** Contains response data for the getStringWithInvalid operation. */
export type ArrayGetStringWithInvalidResponse = {
  /** The parsed response body. */
  body: string[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: string[];
  };
};

/** Contains response data for the getUuidValid operation. */
export type ArrayGetUuidValidResponse = {
  /** The parsed response body. */
  body: string[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: string[];
  };
};

/** Contains response data for the getUuidInvalidChars operation. */
export type ArrayGetUuidInvalidCharsResponse = {
  /** The parsed response body. */
  body: string[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: string[];
  };
};

/** Contains response data for the getDateValid operation. */
export type ArrayGetDateValidResponse = {
  /** The parsed response body. */
  body: Date[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date[];
  };
};

/** Contains response data for the getDateInvalidNull operation. */
export type ArrayGetDateInvalidNullResponse = {
  /** The parsed response body. */
  body: Date[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date[];
  };
};

/** Contains response data for the getDateInvalidChars operation. */
export type ArrayGetDateInvalidCharsResponse = {
  /** The parsed response body. */
  body: Date[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date[];
  };
};

/** Contains response data for the getDateTimeValid operation. */
export type ArrayGetDateTimeValidResponse = {
  /** The parsed response body. */
  body: Date[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date[];
  };
};

/** Contains response data for the getDateTimeInvalidNull operation. */
export type ArrayGetDateTimeInvalidNullResponse = {
  /** The parsed response body. */
  body: Date[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date[];
  };
};

/** Contains response data for the getDateTimeInvalidChars operation. */
export type ArrayGetDateTimeInvalidCharsResponse = {
  /** The parsed response body. */
  body: Date[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date[];
  };
};

/** Contains response data for the getDateTimeRfc1123Valid operation. */
export type ArrayGetDateTimeRfc1123ValidResponse = {
  /** The parsed response body. */
  body: Date[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date[];
  };
};

/** Contains response data for the getDurationValid operation. */
export type ArrayGetDurationValidResponse = {
  /** The parsed response body. */
  body: string[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: string[];
  };
};

/** Contains response data for the getByteValid operation. */
export type ArrayGetByteValidResponse = {
  /** The parsed response body. */
  body: Uint8Array[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Uint8Array[];
  };
};

/** Contains response data for the getByteInvalidNull operation. */
export type ArrayGetByteInvalidNullResponse = {
  /** The parsed response body. */
  body: Uint8Array[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Uint8Array[];
  };
};

/** Contains response data for the getBase64Url operation. */
export type ArrayGetBase64UrlResponse = {
  /** The parsed response body. */
  body: Uint8Array[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Uint8Array[];
  };
};

/** Contains response data for the getComplexNull operation. */
export type ArrayGetComplexNullResponse = (Product | null)[] & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: (Product | null)[];
  };
};

/** Contains response data for the getComplexEmpty operation. */
export type ArrayGetComplexEmptyResponse = Product[] & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Product[];
  };
};

/** Contains response data for the getComplexItemNull operation. */
export type ArrayGetComplexItemNullResponse = (Product | null)[] & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: (Product | null)[];
  };
};

/** Contains response data for the getComplexItemEmpty operation. */
export type ArrayGetComplexItemEmptyResponse = Product[] & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Product[];
  };
};

/** Contains response data for the getComplexValid operation. */
export type ArrayGetComplexValidResponse = Product[] & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Product[];
  };
};

/** Contains response data for the getArrayNull operation. */
export type ArrayGetArrayNullResponse = {
  /** The parsed response body. */
  body: string[][];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: string[][];
  };
};

/** Contains response data for the getArrayEmpty operation. */
export type ArrayGetArrayEmptyResponse = {
  /** The parsed response body. */
  body: string[][];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: string[][];
  };
};

/** Contains response data for the getArrayItemNull operation. */
export type ArrayGetArrayItemNullResponse = {
  /** The parsed response body. */
  body: (string[] | null)[];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: (string[] | null)[];
  };
};

/** Contains response data for the getArrayItemEmpty operation. */
export type ArrayGetArrayItemEmptyResponse = {
  /** The parsed response body. */
  body: string[][];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: string[][];
  };
};

/** Contains response data for the getArrayValid operation. */
export type ArrayGetArrayValidResponse = {
  /** The parsed response body. */
  body: string[][];

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: string[][];
  };
};

/** Contains response data for the getDictionaryNull operation. */
export type ArrayGetDictionaryNullResponse = ({
  [propertyName: string]: string;
} | null)[] & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ({ [propertyName: string]: string } | null)[];
  };
};

/** Contains response data for the getDictionaryEmpty operation. */
export type ArrayGetDictionaryEmptyResponse = {
  [propertyName: string]: string;
}[] & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: { [propertyName: string]: string }[];
  };
};

/** Contains response data for the getDictionaryItemNull operation. */
export type ArrayGetDictionaryItemNullResponse = ({
  [propertyName: string]: string;
} | null)[] & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ({ [propertyName: string]: string } | null)[];
  };
};

/** Contains response data for the getDictionaryItemEmpty operation. */
export type ArrayGetDictionaryItemEmptyResponse = {
  [propertyName: string]: string;
}[] & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: { [propertyName: string]: string }[];
  };
};

/** Contains response data for the getDictionaryValid operation. */
export type ArrayGetDictionaryValidResponse = {
  [propertyName: string]: string;
}[] & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: { [propertyName: string]: string }[];
  };
};

/** Optional parameters. */
export interface BodyArrayClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}

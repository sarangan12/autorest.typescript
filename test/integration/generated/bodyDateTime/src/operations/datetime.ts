/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreHttps from "@azure/core-rest-pipeline";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyDateTimeClientContext } from "../bodyDateTimeClientContext";
import {
  DatetimeGetNullResponse,
  DatetimeGetInvalidResponse,
  DatetimeGetOverflowResponse,
  DatetimeGetUnderflowResponse,
  DatetimeGetUtcLowercaseMaxDateTimeResponse,
  DatetimeGetUtcUppercaseMaxDateTimeResponse,
  DatetimeGetUtcUppercaseMaxDateTime7DigitsResponse,
  DatetimeGetLocalPositiveOffsetLowercaseMaxDateTimeResponse,
  DatetimeGetLocalPositiveOffsetUppercaseMaxDateTimeResponse,
  DatetimeGetLocalNegativeOffsetUppercaseMaxDateTimeResponse,
  DatetimeGetLocalNegativeOffsetLowercaseMaxDateTimeResponse,
  DatetimeGetUtcMinDateTimeResponse,
  DatetimeGetLocalPositiveOffsetMinDateTimeResponse,
  DatetimeGetLocalNegativeOffsetMinDateTimeResponse,
  DatetimeGetLocalNoOffsetMinDateTimeResponse
} from "../models";

/** Class representing a Datetime. */
export class Datetime {
  private readonly client: BodyDateTimeClientContext;

  /**
   * Initialize a new instance of the class Datetime class.
   * @param client Reference to the service client
   */
  constructor(client: BodyDateTimeClientContext) {
    this.client = client;
  }

  /**
   * Get null datetime value
   * @param options The options parameters.
   */
  getNull(
    options?: coreClient.OperationOptions
  ): Promise<DatetimeGetNullResponse> {
    return this.client.sendOperationRequest({ options }, getNullOperationSpec);
  }

  /**
   * Get invalid datetime value
   * @param options The options parameters.
   */
  getInvalid(
    options?: coreClient.OperationOptions
  ): Promise<DatetimeGetInvalidResponse> {
    return this.client.sendOperationRequest(
      { options },
      getInvalidOperationSpec
    );
  }

  /**
   * Get overflow datetime value
   * @param options The options parameters.
   */
  getOverflow(
    options?: coreClient.OperationOptions
  ): Promise<DatetimeGetOverflowResponse> {
    return this.client.sendOperationRequest(
      { options },
      getOverflowOperationSpec
    );
  }

  /**
   * Get underflow datetime value
   * @param options The options parameters.
   */
  getUnderflow(
    options?: coreClient.OperationOptions
  ): Promise<DatetimeGetUnderflowResponse> {
    return this.client.sendOperationRequest(
      { options },
      getUnderflowOperationSpec
    );
  }

  /**
   * Put max datetime value 9999-12-31T23:59:59.999Z
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putUtcMaxDateTime(
    datetimeBody: Date,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { datetimeBody, options },
      putUtcMaxDateTimeOperationSpec
    );
  }

  /**
   * This is against the recommendation that asks for 3 digits, but allow to test what happens in that
   * scenario
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putUtcMaxDateTime7Digits(
    datetimeBody: Date,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { datetimeBody, options },
      putUtcMaxDateTime7DigitsOperationSpec
    );
  }

  /**
   * Get max datetime value 9999-12-31t23:59:59.999z
   * @param options The options parameters.
   */
  getUtcLowercaseMaxDateTime(
    options?: coreClient.OperationOptions
  ): Promise<DatetimeGetUtcLowercaseMaxDateTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getUtcLowercaseMaxDateTimeOperationSpec
    );
  }

  /**
   * Get max datetime value 9999-12-31T23:59:59.999Z
   * @param options The options parameters.
   */
  getUtcUppercaseMaxDateTime(
    options?: coreClient.OperationOptions
  ): Promise<DatetimeGetUtcUppercaseMaxDateTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getUtcUppercaseMaxDateTimeOperationSpec
    );
  }

  /**
   * This is against the recommendation that asks for 3 digits, but allow to test what happens in that
   * scenario
   * @param options The options parameters.
   */
  getUtcUppercaseMaxDateTime7Digits(
    options?: coreClient.OperationOptions
  ): Promise<DatetimeGetUtcUppercaseMaxDateTime7DigitsResponse> {
    return this.client.sendOperationRequest(
      { options },
      getUtcUppercaseMaxDateTime7DigitsOperationSpec
    );
  }

  /**
   * Put max datetime value with positive numoffset 9999-12-31t23:59:59.999+14:00
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putLocalPositiveOffsetMaxDateTime(
    datetimeBody: Date,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { datetimeBody, options },
      putLocalPositiveOffsetMaxDateTimeOperationSpec
    );
  }

  /**
   * Get max datetime value with positive num offset 9999-12-31t23:59:59.999+14:00
   * @param options The options parameters.
   */
  getLocalPositiveOffsetLowercaseMaxDateTime(
    options?: coreClient.OperationOptions
  ): Promise<DatetimeGetLocalPositiveOffsetLowercaseMaxDateTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getLocalPositiveOffsetLowercaseMaxDateTimeOperationSpec
    );
  }

  /**
   * Get max datetime value with positive num offset 9999-12-31T23:59:59.999+14:00
   * @param options The options parameters.
   */
  getLocalPositiveOffsetUppercaseMaxDateTime(
    options?: coreClient.OperationOptions
  ): Promise<DatetimeGetLocalPositiveOffsetUppercaseMaxDateTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getLocalPositiveOffsetUppercaseMaxDateTimeOperationSpec
    );
  }

  /**
   * Put max datetime value with positive numoffset 9999-12-31t23:59:59.999-14:00
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putLocalNegativeOffsetMaxDateTime(
    datetimeBody: Date,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { datetimeBody, options },
      putLocalNegativeOffsetMaxDateTimeOperationSpec
    );
  }

  /**
   * Get max datetime value with positive num offset 9999-12-31T23:59:59.999-14:00
   * @param options The options parameters.
   */
  getLocalNegativeOffsetUppercaseMaxDateTime(
    options?: coreClient.OperationOptions
  ): Promise<DatetimeGetLocalNegativeOffsetUppercaseMaxDateTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getLocalNegativeOffsetUppercaseMaxDateTimeOperationSpec
    );
  }

  /**
   * Get max datetime value with positive num offset 9999-12-31t23:59:59.999-14:00
   * @param options The options parameters.
   */
  getLocalNegativeOffsetLowercaseMaxDateTime(
    options?: coreClient.OperationOptions
  ): Promise<DatetimeGetLocalNegativeOffsetLowercaseMaxDateTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getLocalNegativeOffsetLowercaseMaxDateTimeOperationSpec
    );
  }

  /**
   * Put min datetime value 0001-01-01T00:00:00Z
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putUtcMinDateTime(
    datetimeBody: Date,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { datetimeBody, options },
      putUtcMinDateTimeOperationSpec
    );
  }

  /**
   * Get min datetime value 0001-01-01T00:00:00Z
   * @param options The options parameters.
   */
  getUtcMinDateTime(
    options?: coreClient.OperationOptions
  ): Promise<DatetimeGetUtcMinDateTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getUtcMinDateTimeOperationSpec
    );
  }

  /**
   * Put min datetime value 0001-01-01T00:00:00+14:00
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putLocalPositiveOffsetMinDateTime(
    datetimeBody: Date,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { datetimeBody, options },
      putLocalPositiveOffsetMinDateTimeOperationSpec
    );
  }

  /**
   * Get min datetime value 0001-01-01T00:00:00+14:00
   * @param options The options parameters.
   */
  getLocalPositiveOffsetMinDateTime(
    options?: coreClient.OperationOptions
  ): Promise<DatetimeGetLocalPositiveOffsetMinDateTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getLocalPositiveOffsetMinDateTimeOperationSpec
    );
  }

  /**
   * Put min datetime value 0001-01-01T00:00:00-14:00
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putLocalNegativeOffsetMinDateTime(
    datetimeBody: Date,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { datetimeBody, options },
      putLocalNegativeOffsetMinDateTimeOperationSpec
    );
  }

  /**
   * Get min datetime value 0001-01-01T00:00:00-14:00
   * @param options The options parameters.
   */
  getLocalNegativeOffsetMinDateTime(
    options?: coreClient.OperationOptions
  ): Promise<DatetimeGetLocalNegativeOffsetMinDateTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getLocalNegativeOffsetMinDateTimeOperationSpec
    );
  }

  /**
   * Get min datetime value 0001-01-01T00:00:00
   * @param options The options parameters.
   */
  getLocalNoOffsetMinDateTime(
    options?: coreClient.OperationOptions
  ): Promise<DatetimeGetLocalNoOffsetMinDateTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getLocalNoOffsetMinDateTimeOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getInvalidOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getOverflowOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/overflow",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getUnderflowOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/underflow",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putUtcMaxDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/max/utc",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const putUtcMaxDateTime7DigitsOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/max/utc7ms",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getUtcLowercaseMaxDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/max/utc/lowercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getUtcUppercaseMaxDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/max/utc/uppercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getUtcUppercaseMaxDateTime7DigitsOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/max/utc7ms/uppercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putLocalPositiveOffsetMaxDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/max/localpositiveoffset",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getLocalPositiveOffsetLowercaseMaxDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/max/localpositiveoffset/lowercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getLocalPositiveOffsetUppercaseMaxDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/max/localpositiveoffset/uppercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putLocalNegativeOffsetMaxDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/max/localnegativeoffset",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getLocalNegativeOffsetUppercaseMaxDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/max/localnegativeoffset/uppercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getLocalNegativeOffsetLowercaseMaxDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/max/localnegativeoffset/lowercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putUtcMinDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/min/utc",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getUtcMinDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/min/utc",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putLocalPositiveOffsetMinDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/min/localpositiveoffset",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getLocalPositiveOffsetMinDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/min/localpositiveoffset",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putLocalNegativeOffsetMinDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/min/localnegativeoffset",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getLocalNegativeOffsetMinDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/min/localnegativeoffset",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getLocalNoOffsetMinDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetime/min/localnooffset",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};

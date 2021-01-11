/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { ModelFlatteningClientContext } from "./modelFlatteningClientContext";
import {
  ModelFlatteningClientOptionalParams,
  ModelFlatteningClientPutArrayOptionalParams,
  ModelFlatteningClientGetArrayResponse,
  ModelFlatteningClientPutWrappedArrayOptionalParams,
  ModelFlatteningClientGetWrappedArrayResponse,
  ModelFlatteningClientPutDictionaryOptionalParams,
  ModelFlatteningClientGetDictionaryResponse,
  ModelFlatteningClientPutResourceCollectionOptionalParams,
  ModelFlatteningClientGetResourceCollectionResponse,
  ModelFlatteningClientPutSimpleProductOptionalParams,
  ModelFlatteningClientPutSimpleProductResponse,
  ModelFlatteningClientPostFlattenedSimpleProductOptionalParams,
  ModelFlatteningClientPostFlattenedSimpleProductResponse,
  FlattenParameterGroup,
  ModelFlatteningClientPutSimpleProductWithGroupingResponse
} from "./models";

export class ModelFlatteningClient extends ModelFlatteningClientContext {
  /**
   * Initializes a new instance of the ModelFlatteningClient class.
   * @param options The parameter options
   */
  constructor(options?: ModelFlatteningClientOptionalParams) {
    super(options);
  }

  /**
   * Put External Resource as an Array
   * @param options The options parameters.
   */
  putArray(
    options?: ModelFlatteningClientPutArrayOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      putArrayOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get External Resource as an Array
   * @param options The options parameters.
   */
  getArray(
    options?: coreHttp.OperationOptions
  ): Promise<ModelFlatteningClientGetArrayResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getArrayOperationSpec
    ) as Promise<ModelFlatteningClientGetArrayResponse>;
  }

  /**
   * No need to have a route in Express server for this operation. Used to verify the type flattened is
   * not removed if it's referenced in an array
   * @param options The options parameters.
   */
  putWrappedArray(
    options?: ModelFlatteningClientPutWrappedArrayOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      putWrappedArrayOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * No need to have a route in Express server for this operation. Used to verify the type flattened is
   * not removed if it's referenced in an array
   * @param options The options parameters.
   */
  getWrappedArray(
    options?: coreHttp.OperationOptions
  ): Promise<ModelFlatteningClientGetWrappedArrayResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getWrappedArrayOperationSpec
    ) as Promise<ModelFlatteningClientGetWrappedArrayResponse>;
  }

  /**
   * Put External Resource as a Dictionary
   * @param options The options parameters.
   */
  putDictionary(
    options?: ModelFlatteningClientPutDictionaryOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      putDictionaryOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get External Resource as a Dictionary
   * @param options The options parameters.
   */
  getDictionary(
    options?: coreHttp.OperationOptions
  ): Promise<ModelFlatteningClientGetDictionaryResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getDictionaryOperationSpec
    ) as Promise<ModelFlatteningClientGetDictionaryResponse>;
  }

  /**
   * Put External Resource as a ResourceCollection
   * @param options The options parameters.
   */
  putResourceCollection(
    options?: ModelFlatteningClientPutResourceCollectionOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      putResourceCollectionOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get External Resource as a ResourceCollection
   * @param options The options parameters.
   */
  getResourceCollection(
    options?: coreHttp.OperationOptions
  ): Promise<ModelFlatteningClientGetResourceCollectionResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getResourceCollectionOperationSpec
    ) as Promise<ModelFlatteningClientGetResourceCollectionResponse>;
  }

  /**
   * Put Simple Product with client flattening true on the model
   * @param options The options parameters.
   */
  putSimpleProduct(
    options?: ModelFlatteningClientPutSimpleProductOptionalParams
  ): Promise<ModelFlatteningClientPutSimpleProductResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      putSimpleProductOperationSpec
    ) as Promise<ModelFlatteningClientPutSimpleProductResponse>;
  }

  /**
   * Put Flattened Simple Product with client flattening true on the parameter
   * @param productId Unique identifier representing a specific product for a given latitude & longitude.
   *                  For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles.
   * @param options The options parameters.
   */
  postFlattenedSimpleProduct(
    productId: string,
    options?: ModelFlatteningClientPostFlattenedSimpleProductOptionalParams
  ): Promise<ModelFlatteningClientPostFlattenedSimpleProductResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      productId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      postFlattenedSimpleProductOperationSpec
    ) as Promise<ModelFlatteningClientPostFlattenedSimpleProductResponse>;
  }

  /**
   * Put Simple Product with client flattening true on the model
   * @param flattenParameterGroup Parameter group
   * @param options The options parameters.
   */
  putSimpleProductWithGrouping(
    flattenParameterGroup: FlattenParameterGroup,
    options?: coreHttp.OperationOptions
  ): Promise<ModelFlatteningClientPutSimpleProductWithGroupingResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      flattenParameterGroup,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      putSimpleProductWithGroupingOperationSpec
    ) as Promise<ModelFlatteningClientPutSimpleProductWithGroupingResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const putArrayOperationSpec: coreHttp.OperationSpec = {
  path: "/model-flatten/array",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.resourceArray,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getArrayOperationSpec: coreHttp.OperationSpec = {
  path: "/model-flatten/array",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "FlattenedProduct" }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putWrappedArrayOperationSpec: coreHttp.OperationSpec = {
  path: "/model-flatten/wrappedarray",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.resourceArray1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getWrappedArrayOperationSpec: coreHttp.OperationSpec = {
  path: "/model-flatten/wrappedarray",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ProductWrapper" } }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putDictionaryOperationSpec: coreHttp.OperationSpec = {
  path: "/model-flatten/dictionary",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.resourceDictionary,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getDictionaryOperationSpec: coreHttp.OperationSpec = {
  path: "/model-flatten/dictionary",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "FlattenedProduct" } }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putResourceCollectionOperationSpec: coreHttp.OperationSpec = {
  path: "/model-flatten/resourcecollection",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.resourceComplexObject,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getResourceCollectionOperationSpec: coreHttp.OperationSpec = {
  path: "/model-flatten/resourcecollection",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putSimpleProductOperationSpec: coreHttp.OperationSpec = {
  path: "/model-flatten/customFlattening",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SimpleProduct
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.simpleBodyProduct,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const postFlattenedSimpleProductOperationSpec: coreHttp.OperationSpec = {
  path: "/model-flatten/customFlattening",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SimpleProduct
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: {
    parameterPath: {
      productId: ["productId"],
      description: ["options", "description"],
      maxProductDisplayName: ["options", "maxProductDisplayName"],
      capacity: ["options", "capacity"],
      genericValue: ["options", "genericValue"],
      odataValue: ["options", "odataValue"]
    },
    mapper: Mappers.SimpleProduct
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const putSimpleProductWithGroupingOperationSpec: coreHttp.OperationSpec = {
  path: "/model-flatten/customFlattening/parametergrouping/{name}/",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SimpleProduct
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: {
    parameterPath: {
      capacity: ["options", "capacity"],
      productId: ["flattenParameterGroup", "productId"],
      description: ["flattenParameterGroup", "description"],
      maxProductDisplayName: ["flattenParameterGroup", "maxProductDisplayName"],
      genericValue: ["flattenParameterGroup", "genericValue"],
      odataValue: ["flattenParameterGroup", "odataValue"]
    },
    mapper: Mappers.SimpleProduct
  },
  urlParameters: [Parameters.$host, Parameters.name],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};

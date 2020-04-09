// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TypeDetails, PropertyKind } from "../models/modelDetails";

import {
  Schema,
  SchemaType,
  ConstantSchema,
  ObjectSchema,
  ArraySchema,
  DictionarySchema,
  SchemaResponse
} from "@azure-tools/codemodel";
import { getStringForValue } from "./valueHelpers";
import { getLanguageMetadata } from "./languageHelpers";
import { normalizeName, NameType, normalizeTypeName } from "./nameUtils";

/**
 * Helper function which given a schema returns type information for useful for generating Typescript code
 * @param schema schema to extract type information from
 */
export function getTypeForSchema(schema: Schema): TypeDetails {
  let typeName: string = "";
  let usedModels: string[] = [];
  let defaultValue: string = "";
  let kind: PropertyKind = PropertyKind.Primitive;

  switch (schema.type) {
    case SchemaType.Any:
      typeName = "any";
      break;
    case SchemaType.Array:
      const arraySchema = schema as ArraySchema;
      const itemsType = getTypeForSchema(arraySchema.elementType);
      const itemsName = normalizeTypeName(itemsType);
      kind = itemsType.kind;
      typeName = `${itemsName}[]`;
      if (isModelNeeded(itemsType)) {
        usedModels.push(itemsName);
      }
      break;
    case SchemaType.Boolean:
      typeName = "boolean";
      break;
    case SchemaType.Binary:
      typeName = "coreHttp.HttpRequestBody";
      break;
    case SchemaType.ByteArray:
      typeName = "Uint8Array";
      break;
    case SchemaType.Choice:
    case SchemaType.SealedChoice:
      const { name: choiceName } = getLanguageMetadata(schema.language);
      typeName = choiceName;
      kind = PropertyKind.Enum;
      usedModels.push(choiceName);
      break;
    case SchemaType.Constant:
      const constantSchema = schema as ConstantSchema;
      const constantType = getTypeForSchema(constantSchema.valueType);
      kind = constantType.kind;
      if (isModelNeeded(constantType)) {
        usedModels.push(typeName);
      }
      defaultValue = getStringForValue(
        constantSchema.value.value,
        constantSchema.valueType.type,
        false
      );
      typeName = constantType.typeName;
      break;
    case SchemaType.DateTime:
    case SchemaType.Date:
    case SchemaType.UnixTime:
      typeName = "Date";
      break;
    case SchemaType.Duration:
      typeName = "string";
      break;
    case SchemaType.Dictionary:
      const dictionarySchema = schema as DictionarySchema;
      const elementType = getTypeForSchema(dictionarySchema.elementType);
      const elementTypeName = normalizeTypeName(elementType);
      kind = PropertyKind.Dictionary;
      typeName = `{[propertyName: string]: ${elementTypeName}}`;
      if (isModelNeeded(elementType)) {
        usedModels.push(elementTypeName);
      }
      break;
    case SchemaType.Number:
    case SchemaType.Integer:
      typeName = "number";
      break;

    case SchemaType.Object:
      const objSchema = schema as ObjectSchema;
      const name = normalizeName(
        getLanguageMetadata(schema.language).name,
        NameType.Interface
      );

      // Polymorphic objects with children will get a union type as type
      // since they can take different shapes
      const isUnionType =
        !!(objSchema.discriminator || objSchema.discriminatorValue) &&
        !!objSchema.children &&
        !!objSchema.children.immediate.length;

      typeName = isUnionType ? `${name}Union` : name;
      kind = PropertyKind.Composite;
      usedModels.push(typeName);
      break;
    case SchemaType.String:
    case SchemaType.Time:
    case SchemaType.Uuid:
      typeName = "string";
      break;
    default:
      throw new Error(`Handling of ${schema.type} hasn't been implemented yet`);
  }

  return {
    typeName,
    kind,
    usedModels,
    isConstant: schema.type === SchemaType.Constant,
    ...(defaultValue && { defaultValue })
  };
}

function isModelNeeded({ kind }: TypeDetails) {
  return [PropertyKind.Composite, PropertyKind.Enum].includes(kind);
}

export function isSchemaResponse(response: any): response is SchemaResponse {
  // check fields that should exist to determine if this is a SchemaResponse
  return typeof response.schema !== "undefined";
}

import {
  AzureParameterGroupingClient,
  ParameterGroupingPostOptionalOptionalParams
} from "./generated/azureParameterGrouping/src";
import { assert } from "chai";
import { FullOperationResponse } from "@azure/core-client";

describe("AzureParameterGrouping", () => {
  let client: AzureParameterGroupingClient;
  const body = 1234;
  const query = 21;
  const header = "header";
  const path = "path";
  const goodResponseCheck = (rawResponse: FullOperationResponse) => {
    assert.equal(rawResponse.status, 200);
  };
  const defaultOptions = {
    onResponse: goodResponseCheck
  };

  beforeEach(() => {
    client = new AzureParameterGroupingClient();
  });

  it("should post optional", async () => {
    const options: ParameterGroupingPostOptionalOptionalParams = {
      parameterGroupingPostOptionalParameters: {
        query: query,
        customHeader: header
      },
      onResponse: goodResponseCheck
    };
    const result = await client.parameterGrouping.postOptional(options);
  });

  it("should accept empty optional parameters", async () => {
    const result = await client.parameterGrouping.postOptional(defaultOptions);
  });

  it("should post required", async () => {
    const result = await client.parameterGrouping.postRequired(
      {
        body: body,
        customHeader: header,
        query: query,
        path: path
      },
      defaultOptions
    );
  });

  it("should post required with only required parameters", async () => {
    const result = await client.parameterGrouping.postRequired(
      {
        body: body,
        path: path
      },
      defaultOptions
    );
  });

  it("should allow multiple parameter groups", async () => {
    const firstParameterGroup = { headerOne: header, queryOne: query };
    const parameterGroupingPostMultiParamGroupsSecondParamGroup = {
      headerTwo: "header2",
      queryTwo: 42
    };

    const result = await client.parameterGrouping.postMultiParamGroups({
      firstParameterGroup,
      parameterGroupingPostMultiParamGroupsSecondParamGroup,
      onResponse: goodResponseCheck
    });
  });

  it("should allow multiple parameter groups with some defaults omitted", async () => {
    const firstParameterGroup = { headerOne: header };
    const parameterGroupingPostMultiParamGroupsSecondParamGroup = {
      queryTwo: 42
    };

    const result = await client.parameterGrouping.postMultiParamGroups({
      firstParameterGroup,
      parameterGroupingPostMultiParamGroupsSecondParamGroup,
      onResponse: goodResponseCheck
    });
  });

  it("should allow parameter group objects to be shared between operations", async function() {
    const result = await client.parameterGrouping.postSharedParameterGroupObject(
      {
        firstParameterGroup: { headerOne: header, queryOne: 42 },
        onResponse: goodResponseCheck
      }
    );
  });
});

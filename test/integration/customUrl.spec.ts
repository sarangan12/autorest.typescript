import { CustomUrlClient } from "./generated/customUrl/src";
import * as assert from "assert";
import { FullOperationResponse } from "@azure/core-client";

describe("Custom Endpoint", () => {
  let client: CustomUrlClient;
  let clientOptions: any;
  const defaultOptions = {
    onResponse: (rawResponse: FullOperationResponse) => {
      assert.equal(rawResponse.status, 200);
    }
  };
  beforeEach(() => {
    clientOptions = { host: "host:3000" };
    client = new CustomUrlClient(clientOptions);
  });

  it("should return 200", async () => {
    await client.paths.getEmpty("local", defaultOptions);
  });
});

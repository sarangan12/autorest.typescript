import { NonStringEnumClient } from "./generated/nonStringEnum/src";
import { assert } from "chai";
import { FullOperationResponse } from "@azure/core-client";
describe("Swagger that needs no mapper", () => {
  let client: NonStringEnumClient;
  const defaultOptions = {
    onResponse: (rawResponse: FullOperationResponse) => {
      assert.equal(rawResponse.status, 200);
    }
  };

  beforeEach(() => {
    client = new NonStringEnumClient();
  });

  it("should handle float with get", async () => {
    const result = await client.float.get();
    assert.equal(result.body, 429.1);
  });

  it("should handle int with get", async () => {
    const result = await client.int.get();
    assert.equal(result.body, 429);
  });

  it("should handle float with put", async () => {
    await client.float.put({ input: 200.4, ...defaultOptions });
  });

  it("should handle int with put", async () => {
    await client.int.put({ input: 200, ...defaultOptions });
  });
});

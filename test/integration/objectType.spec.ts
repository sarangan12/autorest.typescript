import { FullOperationResponse } from "@azure/core-client";
import { assert } from "chai";
import { ObjectTypeClient } from "./generated/objectType/src";

describe("ObjectType", () => {
  let client: ObjectTypeClient;
  const defaultOptions = {
    onResponse: (rawResponse: FullOperationResponse) => {
      assert.equal(rawResponse.status, 200);
    }
  };

  beforeEach(() => {
    client = new ObjectTypeClient();
  });

  it("should get an object", async () => {
    const result = await client.get();
    assert.deepStrictEqual(result.body, {
      message: "An object was successfully returned"
    });
  });

  it("should put an object", async () => {
    await client.put({ foo: "bar" }, defaultOptions);
  });

  it("should throw puttin and invalid object", async () => {
    try {
      await client.put({ bar: "foo" });
      assert.fail("Expected put to throw an error with invalid object");
    } catch (error) {
      assert.strictEqual(error.statusCode, 400);
      assert.strictEqual(error.message, "The object you passed was incorrect");
    }
  });
});

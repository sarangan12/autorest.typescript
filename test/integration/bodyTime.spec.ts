import { FullOperationResponse } from "@azure/core-client";
import { assert } from "chai";
import { BodyTimeClient, TimeGetResponse } from "./generated/bodyTime/src";

/**
 * Returns an interface that omits the _response field.
 * This is useful when doing assert.deepEqual since _response
 * is not enumerable, but deepEqual still does type checking for it.
 */
type RemoveResponse<T> = Omit<T, "_response">;

describe("BodyTimeClient", () => {
  let client: BodyTimeClient;
  const defaultOptions = {
    onResponse: (rawResponse: FullOperationResponse) => {
      assert.equal(rawResponse.status, 200);
    }
  };

  beforeEach(() => {
    client = new BodyTimeClient();
  });

  describe("#get", () => {
    it("returns time as a string", async () => {
      const result = await client.time.get(defaultOptions);
      assert.deepEqual(result as RemoveResponse<TimeGetResponse>, {
        body: "11:34:56"
      });
    });
  });

  describe("#put", () => {
    it("puts time as a string", async () => {
      await client.time.put("08:07:56", defaultOptions);
    });
  });
});

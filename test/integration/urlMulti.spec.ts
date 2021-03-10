import { FullOperationResponse } from "@azure/core-client";
import { assert } from "chai";
import { UrlMultiClient } from "./generated/urlMulti/src";

describe("URLMultiCollectionFormat", () => {
  let client: UrlMultiClient;
  const defaultOptions = {
    onResponse: (rawResponse: FullOperationResponse) => {
      assert.equal(rawResponse.status, 200);
    }
  };

  beforeEach(() => {
    client = new UrlMultiClient();
  });

  it("should handle arrayStringMultiEmpty", async () => {
    await client.queries.arrayStringMultiEmpty({
      arrayQuery: [],
      ...defaultOptions
    });
  });

  it("should handle arrayStringMultiNull", async () => {
    await client.queries.arrayStringMultiNull(defaultOptions);
  });

  it("should handle arrayStringMultiValid", async () => {
    const result = await client.queries.arrayStringMultiValid({
      arrayQuery: [
        "ArrayQuery1",
        "begin!*'();:@ &=+$,/?#[]end",
        null as any,
        ""
      ],
      ...defaultOptions
    });
  });
});

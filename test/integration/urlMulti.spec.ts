import { UrlMultiClient } from "./generated/urlMulti/src";
import { responseStatusChecker } from "../utils/responseStatusChecker";
import { allowInsecureConnectionPolicy } from "./testPolicies/allowInsecureConnectionPolicy";

describe("URLMultiCollectionFormat", () => {
  let client: UrlMultiClient;

  beforeEach(() => {
    client = new UrlMultiClient();
    client.pipeline.addPolicy(allowInsecureConnectionPolicy());
  });

  it("should handle arrayStringMultiEmpty", async () => {
    const result = await client.queries.arrayStringMultiEmpty({
      ...responseStatusChecker,
      arrayQuery: []
    });
  });

  it("should handle arrayStringMultiNull", async () => {
    const result = await client.queries.arrayStringMultiNull(
      responseStatusChecker
    );
  });

  it("should handle arrayStringMultiValid", async () => {
    const result = await client.queries.arrayStringMultiValid({
      ...responseStatusChecker,
      arrayQuery: [
        "ArrayQuery1",
        "begin!*'();:@ &=+$,/?#[]end",
        null as any,
        ""
      ]
    });
  });
});

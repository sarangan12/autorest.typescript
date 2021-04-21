import { AppConfigurationClient } from "./generated/appconfigurationexport/src";
import * as fs from "fs";
import { assert } from "chai";
import { allowInsecureConnectionPolicy } from "./testPolicies/allowInsecureConnectionPolicy";

describe("Check Internal Header", () => {
  let client: AppConfigurationClient;

  beforeEach(() => {
    const endpoint: string = "sampleEndPoint";
    client = new AppConfigurationClient(endpoint);
    client.pipeline.addPolicy(allowInsecureConnectionPolicy());
    assert.notEqual(client, null);
  });

  it("Client Class File must have Internal Header", async () => {
    const content: string = fs.readFileSync(
      "./test/integration/generated/appconfigurationexport/src/appConfigurationClient.ts",
      "utf-8"
    );

    const containsInternal = content.includes(
      "/** @internal */\nexport class AppConfigurationClient extends AppConfigurationClientContext {"
    );

    assert.equal(containsInternal, true, "Expected internal Header missing");
  });

  it("Client Context Class File must have Internal Header", async () => {
    const content: string = fs.readFileSync(
      "./test/integration/generated/appconfigurationexport/src/appConfigurationClientContext.ts",
      "utf-8"
    );

    const containsInternal = content.includes(
      "/** @internal */\nexport class AppConfigurationClientContext extends coreClient.ServiceClient {"
    );

    assert.equal(containsInternal, true, "Expected internal Header missing");
  });
});

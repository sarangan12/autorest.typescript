import { CustomUrlClient } from "./generated/customUrl/src";
import { responseStatusChecker } from "../utils/responseStatusChecker";
import { allowInsecureConnectionPolicy } from "./testPolicies/allowInsecureConnectionPolicy";

describe("Custom Endpoint", () => {
  let client: CustomUrlClient;
  let clientOptions: any;

  beforeEach(() => {
    clientOptions = { host: "host:3000" };
    client = new CustomUrlClient(clientOptions);
    client.pipeline.addPolicy(allowInsecureConnectionPolicy());
  });

  it("should return 200", async () => {
    await client.paths.getEmpty("local", responseStatusChecker);
  });
});

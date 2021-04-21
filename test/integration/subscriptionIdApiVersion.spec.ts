import {
  SubscriptionIdApiVersionClient,
  GroupGetSampleResourceGroupResponse
} from "./generated/subscriptionIdApiVersion/src";
import { assert } from "chai";
import { allowInsecureConnectionPolicy } from "./testPolicies/allowInsecureConnectionPolicy";

describe("Integration tests for SubscriptionId-ApiVersion", () => {
  let client: SubscriptionIdApiVersionClient;

  it("should handle a string subscriptionid without failure", async () => {
    const subscriptionId: string = "sampleSubscriptionId";
    client = new SubscriptionIdApiVersionClient(subscriptionId);
    client.pipeline.addPolicy(allowInsecureConnectionPolicy());
    const result: GroupGetSampleResourceGroupResponse = await client.group.getSampleResourceGroup(
      "testgroup101"
    );
    assert.equal(result.name, "testgroup101", "Unexpected resource group name");
    assert.equal(
      result.location,
      "West US",
      "Unexpected resource group location"
    );
  });
});

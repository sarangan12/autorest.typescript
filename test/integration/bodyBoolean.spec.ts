import { BodyBooleanClient } from "./generated/bodyBoolean/src";
import { assert, expect } from "chai";
import { FullOperationResponse } from "@azure/core-client";
describe("Bool Client", function() {
  let testClient: BodyBooleanClient;
  const goodResponseCheck = (rawResponse: FullOperationResponse) => {
    assert.equal(rawResponse.status, 200);
  };
  const defaultOptions = {
    onResponse: goodResponseCheck
  };

  beforeEach(() => {
    testClient = new BodyBooleanClient();
  });

  it("should get true value", async () => {
    const { body } = await testClient.bool.getTrue();
    expect(body).to.equal(true);
  });

  it("should get false value", async () => {
    const { body } = await testClient.bool.getFalse();
    expect(body).to.equal(false);
  });

  it("should put true value", async () => {
    await testClient.bool.putTrue(defaultOptions);
  });

  it("should put false value", async () => {
    await testClient.bool.putFalse(defaultOptions);
  });

  it("should get null boolean value", async () => {
    const { body } = await testClient.bool.getNull();
    expect(body).to.equal(undefined);
  });

  it("should get invalid boolean value", async () => {
    let failed = false;
    try {
      await testClient.bool.getInvalid();
      throw new Error("Expected error to be thrown");
    } catch (error) {
      failed = true;
    } finally {
      expect(failed).to.equal(true);
    }
  });
});

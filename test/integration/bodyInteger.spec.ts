import { FullOperationResponse } from "@azure/core-client";
import { expect } from "chai";
import { BodyIntegerClient } from "./generated/bodyInteger/src";

describe("Integration tests for BodyInteger", () => {
  let client: BodyIntegerClient;
  const defaultOptions = {
    onResponse: (rawResponse: FullOperationResponse) => {
      expect(rawResponse.status).to.equal(200);
    }
  };

  beforeEach(() => {
    client = new BodyIntegerClient();
  });

  it("should put max value for 32 bit Integers", async () => {
    await client.int.putMax32(Math.pow(2, 32 - 1) - 1, defaultOptions);
  });

  it("should put max value for 64 bit Integers", async () => {
    await client.int.putMax64(9223372036854776000, defaultOptions);
  });

  it("should put min value for 32 bit Integers", async () => {
    await client.int.putMin32(-Math.pow(2, 32 - 1), defaultOptions);
  });

  it("should put min value for 64 bit Integers", async () => {
    await client.int.putMin64(-9223372036854776000, defaultOptions);
  });

  it("should get null integer value", async () => {
    const { body } = await client.int.getNull();
    expect(body).to.equal(undefined);
  });

  it("should get invalid integer value", async () => {
    let isError = false;
    try {
      await client.int.getInvalid();
    } catch {
      isError = true;
    } finally {
      expect(isError).to.equal(true);
    }
  });

  it("should get overflow 32 bit integer value", async () => {
    const { body } = await client.int.getOverflowInt32();
    expect(body).to.equal(2147483656);
  });

  it("should get underflow 32 bit integer value", async () => {
    const { body } = await client.int.getUnderflowInt32();
    expect(body).to.equal(-2147483656);
  });

  it("should get overflow 64 bit integer value", async () => {
    const { body } = await client.int.getOverflowInt64();
    expect(body).to.equal(9223372036854775910);
  });

  it("should get underflow 64 bit integer value", async () => {
    const { body } = await client.int.getUnderflowInt64();
    expect(body).to.equal(-9223372036854775910);
  });

  it("should put UnixTime date correctly", async () => {
    var testDate = new Date("2016-04-13T00:00:00.000Z");
    await client.int.putUnixTimeDate(testDate, defaultOptions);
  });

  it("should put UnixTime date correctly", async () => {
    var testDate = new Date("2016-04-13T00:00:00.000Z");
    const { body } = await client.int.getUnixTime();
    expect(body).to.deep.equal(testDate);
  });

  it("should throw an error for invalid UnixTime date", async () => {
    let isError = false;
    try {
      await client.int.getInvalidUnixTime();
    } catch {
      isError = true;
    } finally {
      expect(isError).to.equal(true);
    }
  });

  it("should get undefined value for UnixTime", async () => {
    const { body } = await client.int.getNullUnixTime();
    expect(body).to.equal(undefined);
  });
});

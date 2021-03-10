import { FullOperationResponse } from "@azure/core-client";
import { assert } from "chai";
import {
  ExtensibleEnumsClient,
  PetGetByPetIdResponse
} from "./generated/extensibleEnums/src";

describe("Integration tests for extensible enums", () => {
  let client: ExtensibleEnumsClient;
  const defaultOptions = {
    onResponse: (rawResponse: FullOperationResponse) => {
      assert.equal(rawResponse.status, 200);
    }
  };

  beforeEach(() => {
    client = new ExtensibleEnumsClient();
  });

  it("sends an unexpected enum value successfully", async () => {
    const response = await client.pet.getByPetId("casper", defaultOptions);
    const expected: Partial<PetGetByPetIdResponse> = {
      daysOfWeek: "Weekend",
      intEnum: "2",
      name: "Casper Ghosty"
    };
    assert.deepEqual(response, expected);
  });

  it("sends an expected enum value successfully", async () => {
    const response = await client.pet.getByPetId("tommy", defaultOptions);
    const expected: Partial<PetGetByPetIdResponse> = {
      daysOfWeek: "Monday",
      intEnum: "1",
      name: "Tommy Tomson"
    };
    assert.deepEqual(response, expected);
  });

  it("sends an allowed enum value successfully", async () => {
    const response = await client.pet.getByPetId("scooby", defaultOptions);
    const expected: Partial<PetGetByPetIdResponse> = {
      daysOfWeek: "Thursday",
      intEnum: "2.1",
      name: "Scooby Scarface"
    };
    assert.deepEqual(response, expected);
  });

  it("sends and receives enum value successfully", async () => {
    const expected: Partial<PetGetByPetIdResponse> = {
      name: "Retriever",
      intEnum: "3",
      daysOfWeek: "Sunday"
    };

    const response = await client.pet.addPet({
      petParam: {
        name: "Retriever",
        intEnum: "3",
        daysOfWeek: "Sunday"
      },
      ...defaultOptions
    });
    assert.deepEqual(response, expected);
  });
});

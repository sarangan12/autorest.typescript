import { MultipleInheritanceClient } from "./generated/multipleInheritance/src";
import { assert } from "chai";

describe("MultipleInheritance", () => {
  let client: MultipleInheritanceClient;

  beforeEach(() => {
    client = new MultipleInheritanceClient();
  });

  it("should get a pet", async () => {
    const result = await client.getPet();
    assert.deepEqual(result, {
      name: "Peanut"
    });
  });

  it("should put a pet", async () => {
    const result = await client.putPet({ name: "Butter" });
    assert.deepEqual(result.body, "Pet was correct!");
  });

  it("should get a Horse", async () => {
    const result = await client.getHorse();
    assert.deepEqual(result, {
      name: "Fred",
      isAShowHorse: true
    });
  });

  it("should put a Horse", async () => {
    const result = await client.putHorse({
      name: "General",
      isAShowHorse: false
    });
    assert.deepEqual(result.body, "Horse was correct!");
  });

  it("should get a Feline", async () => {
    const result = await client.getFeline();
    assert.deepEqual(result, {
      meows: true,
      hisses: true
    });
  });

  it("should put a Feline", async () => {
    const result = await client.putFeline({
      meows: false,
      hisses: true
    });
    assert.deepEqual(result.body, "Feline was correct!");
  });

  it("should get a cat", async () => {
    const result = await client.getCat();
    assert.deepEqual(result, {
      name: "Whiskers",
      meows: true,
      hisses: true,
      likesMilk: true
    });
  });

  it("should put a Cat", async () => {
    const result = await client.putCat({
      name: "Boots",
      likesMilk: false,
      meows: true,
      hisses: false
    });
    assert.deepEqual(result.body, "Cat was correct!");
  });

  it("should get a kitten(", async () => {
    const result = await client.getKitten();
    assert.deepEqual(result, {
      name: "Gatito",
      meows: true,
      hisses: true,
      likesMilk: true,
      eatsMiceYet: false
    });
  });

  it("should put a kitten(", async () => {
    const result = await client.putKitten({
      name: "Kitty",
      likesMilk: false,
      meows: true,
      hisses: false,
      eatsMiceYet: true
    });
    assert.deepEqual(result.body, "Kitten was correct!");
  });
});

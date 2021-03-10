import { RequiredOptionalClient } from "./generated/requiredOptional/src";
import { assert } from "chai";
import { FullOperationResponse } from "@azure/core-client";

describe("Swagger that needs no mapper", () => {
  let client: RequiredOptionalClient;
  const defaultOptions = {
    onResponse: (rawResponse: FullOperationResponse) => {
      assert.equal(rawResponse.status, 200);
    }
  };
  beforeEach(() => {
    client = new RequiredOptionalClient("one", "two");
  });

  describe("Implicit Optional", () => {
    it("should handle putOptionalQuery", async () => {
      await client.implicit.putOptionalQuery(defaultOptions);
    });

    it("should handle putOptionalHeader", async () => {
      await client.implicit.putOptionalHeader(defaultOptions);
    });

    it("should handle putOptionalBody", async () => {
      await client.implicit.putOptionalBody(defaultOptions);
    });

    it("should handle getOptionalGlobalQuery", async () => {
      await client.implicit.getOptionalGlobalQuery(defaultOptions);
    });

    it("should handle getRequiredPath", async () => {
      try {
        await client.implicit.getRequiredPath(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert.include(error.message, "cannot be null or undefined");
      }
    });

    it("should handle getRequiredGlobalPath", async () => {
      try {
        client = new RequiredOptionalClient(null as any, null as any);
        await client.implicit.getRequiredGlobalPath();
        assert.fail("Expected client to throw");
      } catch (error) {
        assert.include(error.message, "cannot be null or undefined");
      }
    });

    it("should handle getRequiredGlobalQuery", async () => {
      client = new RequiredOptionalClient(null as any, null as any);
      try {
        await client.implicit.getRequiredGlobalQuery();
        assert.fail("Expected client to throw");
      } catch (error) {
        assert.include(error.message, "cannot be null or undefined");
      }
    });
  });

  describe("Explicit Optional", () => {
    it("should handle postOptionalArrayHeader", async () => {
      await client.explicit.postOptionalArrayHeader(defaultOptions);
    });

    it("should handle postOptionalArrayParameter", async () => {
      await client.explicit.postOptionalArrayParameter(defaultOptions);
    });

    it("should handle postOptionalArrayProperty", async () => {
      await client.explicit.postOptionalArrayProperty(defaultOptions);
    });

    it("should handle postOptionalClassParameter", async () => {
      await client.explicit.postOptionalClassParameter(defaultOptions);
    });

    it("should handle postOptionalClassProperty", async () => {
      await client.explicit.postOptionalClassProperty(defaultOptions);
    });

    it("should handle postOptionalIntegerHeader", async () => {
      await client.explicit.postOptionalIntegerHeader(defaultOptions);
    });

    it("should handle postOptionalIntegerParameter", async () => {
      await client.explicit.postOptionalIntegerParameter(defaultOptions);
    });

    it("should handle postOptionalIntegerProperty", async () => {
      await client.explicit.postOptionalIntegerProperty(defaultOptions);
    });

    it("should handle postOptionalStringHeader", async () => {
      await client.explicit.postOptionalStringHeader(defaultOptions);
    });

    it("should handle postOptionalStringParameter", async () => {
      await client.explicit.postOptionalStringParameter(defaultOptions);
    });

    it("should handle postOptionalStringProperty", async () => {
      await client.explicit.postOptionalStringProperty(defaultOptions);
    });

    it("should handle postRequiredArrayHeader", async () => {
      try {
        await client.explicit.postRequiredArrayHeader(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert.include(error.message, "cannot be null or undefined");
      }
    });

    it("should handle postRequiredArrayParameter", async () => {
      try {
        await client.explicit.postRequiredArrayParameter(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert.include(error.message, "cannot be null or undefined");
      }
    });

    it("should handle postRequiredArrayProperty", async () => {
      try {
        await client.explicit.postRequiredArrayProperty({ value: null } as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert.include(error.message, "cannot be null or undefined");
      }
    });

    // https://github.com/Azure/autorest.typescript/issues/759
    it.skip("should handle postRequiredClassParameter", async () => {
      try {
        await client.explicit.postRequiredClassParameter(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert.include(error.message, "cannot be null or undefined");
      }
    });

    // https://github.com/Azure/autorest.typescript/issues/759
    it.skip("should handle postRequiredClassProperty", async () => {
      try {
        await client.explicit.postRequiredClassProperty({ value: null } as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert.include(error.message, "cannot be null or undefined");
      }
    });

    it("should handle postRequiredIntegerHeader", async () => {
      try {
        await client.explicit.postRequiredIntegerHeader(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert.include(error.message, "cannot be null or undefined");
      }
    });

    it("should handle postRequiredIntegerParameter", async () => {
      try {
        await client.explicit.postRequiredIntegerParameter(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert.include(error.message, "cannot be null or undefined");
      }
    });

    it("should handle postRequiredStringHeader", async () => {
      try {
        await client.explicit.postRequiredStringHeader(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert.include(error.message, "cannot be null or undefined");
      }
    });

    it("should handle postRequiredStringParameter", async () => {
      try {
        await client.explicit.postRequiredStringParameter(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert.include(error.message, "cannot be null or undefined");
      }
    });

    it("should handle postRequiredStringProperty", async () => {
      try {
        await client.explicit.postRequiredStringProperty({
          value: null
        } as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert.include(error.message, "cannot be null or undefined");
      }
    });
  });
});

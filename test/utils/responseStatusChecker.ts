import { assert } from "chai";

export const responseStatusChecker = {
  onResponse: (response: any) => {
    assert.equal(response.status, 200, "Unexpected status code.");
  }
};

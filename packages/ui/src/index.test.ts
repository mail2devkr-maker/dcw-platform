import assert from "node:assert/strict";
import test from "node:test";
import { cn } from "./cn.ts";

test("cn joins truthy class names", () => {
  assert.equal(cn("a", false, "b", undefined), "a b");
});

import { sum } from "../sum.js";

if (sum(2, 3) !== 6) {
  throw new Error("❌ sum test failed");
}
console.log("✅ sum test passed");

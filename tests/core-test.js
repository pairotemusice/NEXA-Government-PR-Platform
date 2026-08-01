/**
 * ============================================================
 * NEXA Government PR Platform
 * Core Integration Test
 *
 * File: core-test.js
 * Version: 0.1.0
 * ============================================================
 */


import NEXA from "../src/NEXA.js";
import NEXAModuleManager from "../src/core/NEXA.Module.js";



console.log(
  "================================="
);

console.log(
  "NEXA Core Test Starting..."
);

console.log(
  "================================="
);



const nexa = new NEXA();



console.log(
  "System Information:"
);

console.log(
  nexa.info()
);



console.log(
  "Testing Logger..."
);


nexa.logger.info(
  "Core Test Logger Passed"
);


console.log(
  nexa.logger.getLogs()
);



console.log(
  "Testing Module Manager..."
);



const modules =
  new NEXAModuleManager(
    nexa.logger
  );



modules.register(
  "testModule",
  {
    name: "Test Module"
  },
  {
    version:"0.1.0",
    description:"Integration Test Module"
  }
);



console.log(
  modules.status()
);



console.log(
  "================================="
);

console.log(
  "NEXA Core Test Completed"
);

console.log(
  "================================="
);
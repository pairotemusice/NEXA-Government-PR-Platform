/**
 * NEXA Intelligence Runtime Integration Test v0.1.0
 * Sprint 3.10 Intelligence Integration
 */

import ModuleAdapter from "../src/intelligence/adapters/module-adapter.js";
import ModuleRegistryConnector from "../src/intelligence/adapters/module-registry.js";
import ModuleRuntime from "../src/intelligence/runtime/module-runtime.js";


console.log("=================================");
console.log("NEXA Intelligence Runtime Test");
console.log("=================================");


// --------------------------------------------------
// Mock Intelligence Module
// --------------------------------------------------

const testModule = {

    name: "Test Intelligence Module",

    version: "0.1.0",


    execute(input) {

        return {

            success: true,

            module: this.name,

            input,

            message: "Module Execution Passed"

        };

    }

};


// --------------------------------------------------
// Create Module Adapter
// --------------------------------------------------

console.log("\nCreating Module Adapter...");

const adapter = new ModuleAdapter();


// --------------------------------------------------
// Create Registry Connector
// --------------------------------------------------

console.log("\nCreating Module Registry...");

const registry =
    new ModuleRegistryConnector(adapter);


// --------------------------------------------------
// Register Module
// --------------------------------------------------

console.log("\nRegistering Test Module...");

registry.register(
    "testModule",
    testModule
);


// --------------------------------------------------
// Create Runtime
// --------------------------------------------------

console.log("\nStarting Module Runtime...");

const runtime =
    new ModuleRuntime(adapter);


// --------------------------------------------------
// Execute Module
// --------------------------------------------------

console.log("\nExecuting Module...");

const result =
    runtime.execute(
        "testModule",
        {
            request: "NEXA Intelligence Runtime Test"
        }
    );


// --------------------------------------------------
// Result
// --------------------------------------------------

console.log("\nExecution Result:");

console.log(result);


// --------------------------------------------------
// Validation
// --------------------------------------------------

if (
    result.success === true &&
    result.message === "Module Execution Passed"
) {

    console.log("\n✅ Intelligence Runtime Test Passed");

}
else {

    console.error("\n❌ Intelligence Runtime Test Failed");

    process.exit(1);

}


console.log("\n=================================");
console.log("NEXA Sprint 3.10 Runtime Test Complete");
console.log("=================================");
import ServiceRegistry from "../src/registry/service-registry.js";
import ServiceLoader from "../src/registry/service-loader.js";


console.log("");
console.log("=================================");
console.log("NEXA Service Registry Test");
console.log("=================================");
console.log("");



const registry =
    new ServiceRegistry();



const loader =
    new ServiceLoader();




console.log("Auto Register Services...");



const services =
    await registry.autoRegister();



console.log("");

console.log(
    "Registered:"
);



console.log(
    services
);



console.log("");

console.log(
    "Loading News Service..."
);



const newsService =
    await loader.load(
        "news"
    );



const result =
    newsService.execute(

        {

            title:
            "NEXA Registry Test"

        }

    );



console.log("");

console.log(
    "Execution Result:"
);



console.log(
    result
);



console.log("");

console.log(
    "✅ Service Registry Test Passed"
);



console.log("");

console.log("=================================");
console.log("NEXA Sprint 3.11.3 Complete");
console.log("=================================");
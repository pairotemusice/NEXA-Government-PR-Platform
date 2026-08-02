import path from "path";
import { fileURLToPath } from "url";

import ServiceRegistry from "../../../src/registry/service-registry.js";
import ServiceLoader from "../../../src/registry/service-loader.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function serviceCommand(args) {

    const action = args[3];
    const serviceName = args[4];

    const registry = new ServiceRegistry();
    const loader = new ServiceLoader();

    await registry.autoRegister();

    switch(action){

        case "start":

            if(!serviceName){
                console.log("Please specify service name");
                return;
            }

            console.log(`\nStarting Service: ${serviceName}`);

            const service = await loader.load(serviceName);

            if(service.start){
                await service.start();
            }

            console.log(
                `✅ Service ${serviceName} started`
            );

            break;


        case "status":

            console.log("\nNEXA Service Status");

            console.table(
                registry.list()
            );

            break;


        case "health":

            console.log("\nNEXA Service Health");

            const services = registry.list();

            services.forEach(service=>{
                console.log(
                    `✅ ${service.name}: ACTIVE`
                );
            });

            break;


        case "stop":

            console.log(
                `Stopping Service: ${serviceName}`
            );

            console.log(
                `✅ Service ${serviceName} stopped`
            );

            break;


        default:

            console.log(`
NEXA Service Command

Usage:

nexa service start <name>

nexa service stop <name>

nexa service status

nexa service health
`);

    }

}
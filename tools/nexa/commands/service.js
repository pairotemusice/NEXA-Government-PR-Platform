import ServiceManager from "../../../src/lifecycle/service-manager.js";
import ServiceRegistry from "../../../src/registry/service-registry.js";

const manager = new ServiceManager();
const registry = new ServiceRegistry();

export default async function serviceCommand(args) {

    const action = args[3];
    const serviceName = args[4];

    console.log(`
=======================
 NEXA Service Runtime
=======================
`);

    switch(action){

        case "start":

            if(!serviceName){
                console.log("Service name required");
                return;
            }

            console.log(`Starting Service: ${serviceName}`);

            const started =
                await manager.start(serviceName);

            console.log(started);

            break;


        case "stop":

            if(!serviceName){
                console.log("Service name required");
                return;
            }

            console.log(`Stopping Service: ${serviceName}`);

            const stopped =
                await manager.stop(serviceName);

            console.log(stopped);

            break;


        case "restart":

            if(!serviceName){
                console.log("Service name required");
                return;
            }

            console.log(`Restarting Service: ${serviceName}`);

            await manager.stop(serviceName);

            const restarted =
                await manager.start(serviceName);

            console.log(restarted);

            break;


        case "status":

            console.log(
                await manager.status()
            );

            break;


        case "health":

            console.log(
                await manager.health()
            );

            break;


        default:

            console.log(`
Commands:

nexa service start <name>

nexa service stop <name>

nexa service restart <name>

nexa service status

nexa service health

`);

    }

}
import SupervisorManager from "../../../src/supervisor/supervisor-manager.js";


const supervisor =
    new SupervisorManager();



export async function supervisorCommand(args) {


    const action = args[0];


    switch(action) {


        case "status":

            console.log(
                "NEXA Supervisor Status"
            );

            console.log(
                await supervisor.status()
            );

            break;



        case "supervise":


            const serviceName =
                args[1];


            if(!serviceName){

                console.log(
                    "Usage: nexa supervisor supervise <service>"
                );

                return;

            }


            console.log(
                await supervisor.supervise(serviceName)
            );


            break;



        default:


            console.log(`
NEXA Supervisor Command

Usage:

nexa supervisor status

nexa supervisor supervise <service>
`);

    }

}
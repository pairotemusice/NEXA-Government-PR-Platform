class Router {

    async execute(command,args=[]){

        switch(command){


            case "supervisor":

                const supervisorCommand =
                    await import("../commands/supervisor.js");

                return supervisorCommand.default(args);



            case "service":

                const serviceCommand =
                    await import("../commands/service.js");

                return serviceCommand.default(args);



            case "doctor":

                const doctorCommand =
                    await import("../commands/doctor.js");

                return doctorCommand.default(args);



            default:

                console.log(`
=======================
 NEXA DevKit v1.0
=======================

Commands:

- doctor
- create
- service
- supervisor
- release

`);

        }

    }

}


export default Router;
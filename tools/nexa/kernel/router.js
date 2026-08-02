import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default class Router {

    async execute(args){

        const command = args[2];


        switch(command){


            case "doctor":

                await this.runCommand(
                    "../commands/doctor.js",
                    args
                );

                break;



            case "create":

                await this.runCommand(
                    "../commands/create.js",
                    args
                );

                break;



            case "service":

                await this.runCommand(
                    "../commands/service.js",
                    args
                );

                break;



            case "release":

                console.log(
                    "Release command"
                );

                break;



            default:

                console.log(
`
=======================
 NEXA DevKit v1.0 
=======================

Commands:

- doctor

- create

- service

- release

`
                );

        }

    }



    async runCommand(file,args){

        const module =
            await import(
                new URL(file,this.constructor.url)
            );

        await module.default(args);

    }


}


Router.url =
new URL(
    import.meta.url
);
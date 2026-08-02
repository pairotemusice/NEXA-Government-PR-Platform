import path from "path";
import { fileURLToPath, pathToFileURL } from "url";


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);



class Router {


    constructor(){


        this.commands = {


            doctor:
                "../commands/doctor",


            create:
                "../commands/create",


            release:
                "../commands/release"


        };


    }




    async execute(args){


        const command = args[2];



        if(!command){

            return this.help();

        }




        const handler = this.commands[command];



        if(!handler){


            console.log(
                "Unknown command:",
                command
            );


            return this.help();


        }




        const commandPath = path.resolve(
            __dirname,
            handler
        );



        const moduleURL =
            pathToFileURL(
                commandPath + ".js"
            ).href;



        const module =
            await import(
                moduleURL
            );



        if(module.default){


            await module.default(
                args.slice(3)
            );


        }


    }





    help(){


        console.log("");

        console.log("=======================");
        console.log(" NEXA DevKit v1.0 ");
        console.log("=======================");

        console.log("");

        console.log("Commands:");



        Object.keys(
            this.commands
        )
        .forEach(command=>{


            console.log(
                "-",
                command
            );


        });



        console.log("");


    }


}



export default Router;
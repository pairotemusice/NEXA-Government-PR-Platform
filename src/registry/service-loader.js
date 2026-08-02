import path from "path";
import { pathToFileURL } from "url";


export default class ServiceLoader {


    constructor(){


        this.root =
            path.join(

                process.cwd(),

                "src",

                "services"

            );


    }





    async load(name){


        const servicePath =

            path.join(

                this.root,

                name,

                "index.js"

            );



        try{


            const moduleURL =

                pathToFileURL(
                    servicePath
                )
                .href;



            const module =

                await import(
                    moduleURL
                );



            const ServiceClass =

                module.default;



            return new ServiceClass();



        }

        catch(error){


            console.error(
                error
            );


            throw new Error(

                `Unable to load service: ${name}`

            );


        }


    }



}
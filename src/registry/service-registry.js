import fs from "fs/promises";
import path from "path";


export default class ServiceRegistry {


    constructor(){

        this.services = new Map();


        this.serviceRoot =
            path.join(
                process.cwd(),
                "src",
                "services"
            );


    }



    async register(name){


        const servicePath =
            path.join(
                this.serviceRoot,
                name
            );



        try{


            await fs.access(servicePath);



            const manifest = {


                name,


                path:
                    servicePath,


                type:
                    "service",


                status:
                    "active",


                registeredAt:
                    new Date().toISOString()


            };



            this.services.set(
                name,
                manifest
            );



            return manifest;



        }
        catch(error){


            throw new Error(
                `Service not found: ${name}`
            );


        }


    }





    get(name){


        return (
            this.services.get(name)
            ||
            null
        );


    }





    list(){


        return Array.from(
            this.services.values()
        );


    }





    async autoRegister(){


        const folders =
            await fs.readdir(

                this.serviceRoot,

                {
                    withFileTypes:true
                }

            );



        const services =
            folders.filter(

                item =>
                item.isDirectory()

            );



        for(
            const service of services
        ){

            await this.register(
                service.name
            );

        }



        return this.list();


    }



}
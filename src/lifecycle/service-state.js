export default class ServiceState {


    constructor(){

        this.services = new Map();

    }



    register(name){

        this.services.set(

            name,

            {

                name,

                status:"registered",

                startedAt:null,

                stoppedAt:null

            }

        );

    }



    start(name){

        const service =
            this.services.get(name);


        if(!service){

            throw new Error(
                `Service ${name} not found`
            );

        }


        service.status =
            "running";


        service.startedAt =
            new Date().toISOString();


        return service;

    }




    stop(name){


        const service =
            this.services.get(name);



        if(!service){

            throw new Error(
                `Service ${name} not found`
            );

        }


        service.status =
            "stopped";


        service.stoppedAt =
            new Date().toISOString();


        return service;


    }



    status(name){


        return this.services.get(name);

    }


}
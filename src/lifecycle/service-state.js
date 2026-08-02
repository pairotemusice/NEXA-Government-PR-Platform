import RuntimeStore from "../runtime/runtime-store.js";


class ServiceState {


constructor(){

    this.store =
    new RuntimeStore();

}



async start(name){


    const data =
    await this.store.load();


    data[name]={

        status:"running",

        startedAt:
        new Date().toISOString()

    };


    await this.store.save(data);


    return {

        service:name,
        ...data[name]

    };

}




async stop(name){


    const data =
    await this.store.load();


    data[name]={

        status:"stopped",

        stoppedAt:
        new Date().toISOString()

    };


    await this.store.save(data);


    return {

        service:name,
        ...data[name]

    };


}




async list(){


    const data =
    await this.store.load();


    return Object.entries(data)
    .map(([name,value])=>({

        name,
        ...value

    }));

}


}


export default ServiceState;
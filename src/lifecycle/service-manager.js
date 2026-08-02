// NEXA Service Manager
// Sprint 3.11.5.2 CLI Runtime Binding

import ServiceState from "./service-state.js";
import HealthChecker from "./health-checker.js";


class ServiceManager {

    constructor(){

        this.state = new ServiceState();
        this.healthChecker = new HealthChecker();

    }


    async start(serviceName){

        const result =
            await this.state.start(serviceName);


        return {

            service: serviceName,
            status: result.status,
            startedAt: result.startedAt

        };

    }



    async stop(serviceName){

        const result =
            await this.state.stop(serviceName);


        return {

            service: serviceName,
            status: result.status,
            stoppedAt: result.stoppedAt

        };

    }



    async restart(serviceName){

        await this.stop(serviceName);

        return await this.start(serviceName);

    }



    async status(){

        return this.state.list();

    }



    async health(){

        return this.healthChecker.check();

    }

}


export default ServiceManager;
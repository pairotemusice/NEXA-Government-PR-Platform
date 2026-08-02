import ServiceManager from "../lifecycle/service-manager.js";
import HealthChecker from "../lifecycle/health-checker.js";


class SupervisorManager {

    constructor() {

        this.serviceManager = new ServiceManager();
        this.healthChecker = new HealthChecker();

    }


    async supervise(serviceName) {

        const health =
            await this.healthChecker.check(serviceName);


        if (!health) {

            console.log(
                `⚠️ ${serviceName} unhealthy`
            );

            return await this.recover(serviceName);

        }


        return {

            service: serviceName,

            status: "healthy",

            checkedAt:
                new Date().toISOString()

        };

    }



    async recover(serviceName) {

        console.log(
            `Restarting service: ${serviceName}`
        );


        await this.serviceManager.stop(
            serviceName
        );


        const result =
            await this.serviceManager.start(
                serviceName
            );


        return {

            service: serviceName,

            action: "restarted",

            result,

            recoveredAt:
                new Date().toISOString()

        };

    }



    async status() {

        return {

            supervisor:
                "active",

            timestamp:
                new Date().toISOString()

        };

    }

}


export default SupervisorManager;
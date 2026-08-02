// NEXA Health Checker
// Sprint 3.11.5.2 CLI Runtime Binding


class HealthChecker {


    constructor(){

        this.status = "healthy";

    }



    async check(){

        return {

            status: this.status,

            checkedAt: new Date().toISOString(),

            runtime: "NEXA Service Runtime"

        };

    }


}


export default HealthChecker;
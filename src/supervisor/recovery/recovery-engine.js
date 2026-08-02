export default class RecoveryEngine {


    async restart(serviceName) {


        return {

            service: serviceName,

            action: "restart",

            status: "recovered",

            timestamp:
                new Date().toISOString()

        };


    }



    async recover(serviceName) {


        return {

            service: serviceName,

            action: "recover",

            status: "healthy",

            timestamp:
                new Date().toISOString()

        };


    }


}
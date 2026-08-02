import RuntimeStore from "../runtime/runtime-store.js";

class SupervisorMonitor {

    constructor() {
        this.runtime = new RuntimeStore();
    }


    status(serviceName) {

        const state = this.runtime.get(serviceName);

        if (!state) {
            return {
                service: serviceName,
                status: "unknown"
            };
        }


        return {
            service: serviceName,
            status: state.status,
            startedAt: state.startedAt
        };

    }


    health(serviceName) {

        const state = this.runtime.get(serviceName);


        return {

            service: serviceName,

            runtime:
                state ? "OK" : "FAILED",

            heartbeat:
                state ? "OK" : "FAILED",

            storage:
                "OK"

        };

    }

}


export default SupervisorMonitor;
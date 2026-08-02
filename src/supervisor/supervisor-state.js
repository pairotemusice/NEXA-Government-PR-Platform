import fs from "fs";
import path from "path";


const STATE_FILE =
    path.resolve(
        "src/supervisor/supervisor-state.json"
    );


class SupervisorState {


    constructor() {

        this.ensureStore();

    }



    ensureStore() {

        const dir =
            path.dirname(STATE_FILE);


        if (!fs.existsSync(dir)) {

            fs.mkdirSync(
                dir,
                {
                    recursive: true
                }
            );

        }


        if (!fs.existsSync(STATE_FILE)) {

            fs.writeFileSync(
                STATE_FILE,
                JSON.stringify(
                    {},
                    null,
                    2
                )
            );

        }

    }




    load() {

        const data =
            fs.readFileSync(
                STATE_FILE,
                "utf8"
            );


        return JSON.parse(data);

    }




    save(state) {

        fs.writeFileSync(
            STATE_FILE,
            JSON.stringify(
                state,
                null,
                2
            )
        );

    }




    update(serviceName, data) {


        const state =
            this.load();


        state[serviceName] = {

            ...state[serviceName],

            ...data,

            updatedAt:
                new Date().toISOString()

        };


        this.save(state);


        return state[serviceName];

    }




    get(serviceName) {

        const state =
            this.load();


        return state[serviceName] || null;

    }




    list() {

        return this.load();

    }


}


export default SupervisorState;
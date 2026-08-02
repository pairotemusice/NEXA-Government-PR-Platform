// NEXA Runtime Store
// Sprint 3.11.5 Persistent Runtime


import fs from "fs/promises";
import path from "path";


class RuntimeStore {


    constructor(){

        this.file =
            path.resolve(
                "src/runtime/service-runtime.json"
            );

    }



    async load(){

        try {

            const content =
                await fs.readFile(
                    this.file,
                    "utf-8"
                );


            return JSON.parse(content);


        } catch(error){


            return {};

        }

    }




    async save(data){


        await fs.writeFile(
            this.file,
            JSON.stringify(
                data,
                null,
                2
            )
        );


    }



}


export default RuntimeStore;
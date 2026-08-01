/**
 * ============================================================
 * NEXA Government PR Platform
 * Main Bootstrap
 *
 * File: NEXA.js
 * Version: 0.2.0-alpha
 * ============================================================
 */


import NEXACore
from "./core/NEXA.Core.js";


import {
    loadModules
}
from "./modules/index.js";



class NEXA {


    constructor(){


        this.core =
        new NEXACore();



        this.logger =
        this.core.logger;



        this.modules =
        loadModules({

            logger:
            this.logger

        });


    }



    info(){


        return {


            system:
            "NEXA Government PR Platform",


            version:
            "0.2.0-alpha",


            modules:
            Object.keys(
                this.modules
            )


        };


    }


}


export default NEXA;
/**
 * ============================================================
 * NEXA Government PR Platform
 * Core Engine
 *
 * File: NEXA.Core.js
 * Version: 0.1.0-alpha
 * ============================================================
 */


import NEXALogger 
from "./NEXA.Logger.js";


import NEXAConfig 
from "./NEXA.Config.js";


import NEXAVersion 
from "./NEXA.Version.js";



class NEXACore {


    constructor(){


        this.config =
        new NEXAConfig();



        this.logger =
        new NEXALogger();



        this.version =
        new NEXAVersion();


    }



    info(){

        return {

            status:
            "running",

            version:
            this.version

        };

    }


}



export default NEXACore;
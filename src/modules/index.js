/**
 * ============================================================
 * NEXA Government PR Platform
 * Module Registry
 *
 * File: modules/index.js
 * Version: 0.1.0-alpha
 * ============================================================
 */


import createNewsEngine
from "./news-engine/index.js";


import createPRWriter
from "./pr-writer/index.js";





export function loadModules(options = {}){


    return {


        newsEngine:
        createNewsEngine(options),



        prWriter:
        createPRWriter(options)


    };


}





export default {

    createNewsEngine,

    createPRWriter

};
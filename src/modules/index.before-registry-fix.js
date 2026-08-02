
import createCrisisMonitorTest
from "./crisis-monitor-test/index.js";

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


import createEvidenceCheck
from "./evidence-check/index.js";



/**
 * Load NEXA Modules
 */
export function loadModules(options = {}) {


    return {

    crisismonitortest:
    createCrisisMonitorTest(options),



        newsEngine:
        createNewsEngine(options),



        prWriter:
        createPRWriter(options),



        evidenceCheck:
        createEvidenceCheck(options)


    };


}



/**
 * Module Factory Export
 */
export default {


    createNewsEngine,


    createPRWriter,


    createEvidenceCheck


};
/**
 * ============================================================
 * NEXA Government PR Platform
 * Module Registry
 *
 * File: src/modules/index.js
 * Version: 0.2.0-alpha
 *
 * ============================================================
 */


/*
 * Module Factory Import
 */

import createNewsEngine
from "./news-engine/index.js";


import createPRWriter
from "./pr-writer/index.js";


import createEvidenceCheck
from "./evidence-check/index.js";


import createAiMonitorTest
from "./ai-monitor-test/index.js";


import createAiSummaryTest
from "./ai-summary-test/index.js";


import createCrisisMonitorTest
from "./crisis-monitor-test/index.js";




/**
 * ============================================================
 * Load NEXA Modules
 * ============================================================
 */

export function loadModules(options = {}) {


    return {


        newsEngine:
        createNewsEngine(options),



        prWriter:
        createPRWriter(options),



        evidenceCheck:
        createEvidenceCheck(options),



        aiMonitorTest:
        createAiMonitorTest(options),



        aiSummaryTest:
        createAiSummaryTest(options),



        crisisMonitorTest:
        createCrisisMonitorTest(options)



    };


}




/**
 * ============================================================
 * Module Factory Export
 * ============================================================
 */

export default {


    createNewsEngine,


    createPRWriter,


    createEvidenceCheck,


    createAiMonitorTest,


    createAiSummaryTest,


    createCrisisMonitorTest


};
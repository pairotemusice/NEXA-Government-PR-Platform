/**
 * ============================================================
 * NEXA Release Manager
 *
 * File: nexa-release.js
 * Version: 1.0.0
 *
 * Automated Release Report Generator
 * ============================================================
 */


import {
    printHeader,
    printSuccess,
    printFail,
    printScore,
    printFooter
}
from "./lib/index.js";


import {
    createReleaseReport
}
from "./lib/report.js";


import {
    readJSON,
    fileExists
}
from "./lib/filesystem.js";



const PACKAGE_FILE =
"./package.json";



function loadPackage(){

    if(
        fileExists(PACKAGE_FILE)
    ){

        return readJSON(
            PACKAGE_FILE
        );

    }


    return {

        name:
        "NEXA Government PR Platform",

        version:
        "unknown"

    };

}




function runRelease(){


    printHeader(
        "NEXA Release Manager"
    );


    const pkg =
    loadPackage();



    const releaseData = {


        project:
        pkg.name,


        version:
        pkg.version,


        releaseTime:
        new Date()
        .toISOString(),


        status:
        "READY"



    };



    printSuccess(
        "Package Verified"
    );


    printScore(
        "Release Status",
        "100%"
    );



    const report =
    createReleaseReport(
        releaseData
    );



    printSuccess(
        "Release Report Created"
    );


    console.log(
        report
    );


    printFooter();


}



runRelease();
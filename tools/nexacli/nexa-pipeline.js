/**
 * ============================================================
 * NEXA CI/CD Pipeline Engine
 *
 * File: nexa-pipeline.js
 * Version: 1.0.0
 *
 * Automated:
 * Quality Check
 * Test Runner
 * Release Manager
 *
 * ============================================================
 */


import {
    printHeader,
    printSuccess,
    printFail,
    printFooter
}
from "./lib/index.js";


import {
    execSync
}
from "child_process";



function runStep(command){


    console.log("");

    console.log(
        "RUN:",
        command
    );


    try {


        execSync(
            command,
            {
                stdio:
                "inherit"
            }
        );


        printSuccess(
            command
        );


        return true;


    }
    catch(error){


        printFail(
            command
        );


        return false;


    }


}




function runPipeline(){


    printHeader(
        "NEXA CI/CD Pipeline"
    );



    const pipeline = [

        "npm run nexa-check",

        "npm run nexa-test",

        "npm run nexa-release"

    ];



    let result = true;



    for(
        const step of pipeline
    ){


        const success =
        runStep(step);



        if(!success){

            result=false;

            break;

        }


    }



    console.log("");



    if(result){


        printSuccess(
            "PIPELINE COMPLETE"
        );


    }
    else{


        printFail(
            "PIPELINE FAILED"
        );


    }



    printFooter();


}



runPipeline();
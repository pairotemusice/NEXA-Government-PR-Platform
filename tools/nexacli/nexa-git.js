/**
 * ============================================================
 * NEXA Git Automation Engine
 *
 * File: nexa-git.js
 * Version: 1.0.0
 *
 * Git Assistant Layer
 * ============================================================
 */


import {
    printHeader,
    printSuccess,
    printInfo,
    printFooter
}
from "./lib/index.js";


import {
    execSync
}
from "child_process";



function run(command){


    try {

        return execSync(
            command,
            {
                encoding:"utf8"
            }
        ).trim();


    }
    catch(error){

        return "";

    }

}




function gitStatus(){


    printInfo(
        "Checking Git Status"
    );


    const status =
    run(
        "git status --short"
    );


    if(status){


        console.log(status);


        printInfo(
            "Changes Detected"
        );


    }
    else{


        printSuccess(
            "Working Tree Clean"
        );


    }

}



function gitBranch(){


    const branch =
    run(
        "git branch --show-current"
    );


    printInfo(
        "Current Branch: " + branch
    );

}




function gitLog(){


    const log =
    run(
        "git log -1 --oneline"
    );


    printInfo(
        "Latest Commit: " + log
    );

}




function main(){


    printHeader(
        "NEXA Git Automation Engine"
    );


    gitBranch();

    gitStatus();

    gitLog();



    printFooter();


}



main();
/**
 * ============================================================
 * NEXA Government PR Platform
 *
 * NEXA Auto Test Runner
 *
 * Version:
 * 0.1.0-alpha
 *
 * ============================================================
 */


import fs from "fs";
import path from "path";
import { execSync } from "child_process";



const root = process.cwd();



let results = [];



function addResult(name, status){

    results.push({
        name,
        status
    });

}



function runTest(testFile){


    try {


        execSync(
            `node ${testFile}`,
            {
                stdio:"pipe"
            }
        );


        addResult(
            testFile,
            "PASS"
        );


    } catch(error){


        addResult(
            testFile,
            "FAIL"
        );


    }


}



// =================================
// Search Test Files
// =================================


function findTests(directory){


    let tests = [];


    if(!fs.existsSync(directory)){

        return tests;

    }



    const items =
    fs.readdirSync(
        directory,
        {
            withFileTypes:true
        }
    );



    items.forEach(item=>{


        const fullPath =
        path.join(
            directory,
            item.name
        );



        if(item.isDirectory()){


            tests =
            tests.concat(
                findTests(fullPath)
            );


        }



        if(
            item.isFile()
            &&
            item.name.endsWith(".js")
            &&
            item.name.includes("test")
        ){


            tests.push(
                fullPath
            );


        }



    });



    return tests;


}



// =================================
// Execute Tests
// =================================


const testDirectories = [


    path.join(
        root,
        "tests"
    ),



    path.join(
        root,
        "src",
        "modules"
    )

];



let allTests = [];



testDirectories.forEach(dir=>{


    allTests =
    allTests.concat(
        findTests(dir)
    );


});





console.log(`

=================================
NEXA Test Automation
=================================

`);




if(allTests.length===0){


    console.log(
        "No Test Found"
    );


}else{


    allTests.forEach(test=>{


        console.log(
            "Running:",
            test
        );


        runTest(test);


    });


}



// =================================
// Report
// =================================


console.log(`

=================================
NEXA Test Report
=================================

`);



let passCount = 0;



results.forEach(result=>{


    console.log(
        `${result.status.padEnd(5)}
${result.name}`
    );


    if(result.status==="PASS"){

        passCount++;

    }


});



const score =
results.length
?
Math.round(
(passCount/results.length)*100
)
:
0;



console.log(`

=================================

TOTAL TEST:
${results.length}

PASS:
${passCount}

QUALITY SCORE:
${score}%


=================================

`);

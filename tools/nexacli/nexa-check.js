/**
 * ============================================================
 * NEXA Government PR Platform
 *
 * NEXA Quality Check Engine
 *
 * Version:
 * 0.1.0-alpha
 *
 * ============================================================
 */


import fs from "fs";
import path from "path";
import { execSync } from "child_process";



const root =
process.cwd();



let report = [];



function pass(item){

    report.push({
        item,
        status:"PASS"
    });

}



function fail(item){

    report.push({
        item,
        status:"FAIL"
    });

}



// ==========================
// Project Structure Check
// ==========================


function checkFolder(folder){


const target =
path.join(root,folder);


if(fs.existsSync(target)){

    pass(
        `Folder ${folder}`
    );

}else{

    fail(
        `Folder ${folder}`
    );

}


}




[
"src",
"src/core",
"src/modules",
"tests",
"package.json"

]
.forEach(checkFolder);




// ==========================
// Module Check
// ==========================


function checkModules(){


const modulesPath =
path.join(
root,
"src",
"modules"
);



if(!fs.existsSync(modulesPath)){

fail(
"Modules Directory"
);

return;

}



const modules =
fs.readdirSync(
modulesPath,
{
withFileTypes:true
}
)
.filter(
item =>
item.isDirectory()
&&
!item.name.startsWith("_")
);



modules.forEach(module=>{


const modulePath =
path.join(
modulesPath,
module.name
);



[
"index.js"
]
.forEach(file=>{


if(
fs.existsSync(
path.join(
modulePath,
file
)
)
){

pass(
`${module.name}/${file}`
);


}else{

fail(
`${module.name}/${file}`
);

}


});


});

}



checkModules();




// ==========================
// Registry Check
// ==========================


const registry =
path.join(
root,
"src",
"modules",
"index.js"
);



if(fs.existsSync(registry)){

pass(
"Module Registry"
);


}else{

fail(
"Module Registry"
);

}




// ==========================
// Syntax Check
// ==========================


function syntaxCheck(){


try{


execSync(
"node --check src/modules/index.js",
{
stdio:"ignore"
}
);


pass(
"Registry Syntax"
);



}catch(error){


fail(
"Registry Syntax"
);


}



}


syntaxCheck();




// ==========================
// Report
// ==========================


console.log(`

=================================
NEXA Quality Check Engine
=================================

Project:

NEXA Government PR Platform


`);



let score = 0;



report.forEach(
result=>{


console.log(
`${result.status.padEnd(5)}
${result.item}`
);



if(result.status==="PASS")
score++;


});


const health =
Math.round(
(score/report.length)*100
);



console.log(`

=================================

SYSTEM HEALTH:
${health}%


=================================

`);

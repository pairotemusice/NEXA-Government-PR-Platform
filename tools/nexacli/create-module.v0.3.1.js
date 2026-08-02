/**
 * ============================================================
 * NEXA Government PR Platform
 *
 * NEXA Scaffold Generator
 *
 * Version:
 * 0.3.1-alpha
 *
 * Complete Auto Module Registry
 *
 * ============================================================
 */

import fs from "fs";
import path from "path";


const moduleName = process.argv[2];


if (!moduleName) {

    console.log(
`
Usage:

npm run create-module <module-name>
`
    );

    process.exit(1);

}



function toPascalCase(text){

    return text
    .split("-")
    .map(
        word =>
        word.charAt(0).toUpperCase()
        +
        word.slice(1)
    )
    .join("");

}



function toCamelCase(text){

    return text
    .split("-")
    .map(
        (word,index)=>
        index===0
        ?
        word
        :
        word.charAt(0).toUpperCase()+word.slice(1)
    )
    .join("");

}



const className =
toPascalCase(moduleName);



const factoryName =
`create${className}`;



const moduleVariable =
toCamelCase(moduleName);



const modulePath =
path.join(
"src",
"modules",
moduleName
);



const registryFile =
path.join(
"src",
"modules",
"index.js"
);




// ==========================
// Create Module Files
// ==========================


fs.mkdirSync(
modulePath,
{
recursive:true
}
);



fs.mkdirSync(
path.join(modulePath,"tests"),
{
recursive:true
}
);



fs.mkdirSync(
path.join(modulePath,"docs"),
{
recursive:true
}
);





fs.writeFileSync(

path.join(
modulePath,
`NEXA.${className}.js`
),

`
class NEXA${className} {


constructor(options={}){

this.name="${moduleName}";

this.version="1.0.0-alpha";

this.options=options;

}



execute(data={}){

return {

success:true,

module:this.name,

data

};

}


}


export default NEXA${className};

`

);





fs.writeFileSync(

path.join(
modulePath,
"index.js"
),

`
import NEXA${className}
from "./NEXA.${className}.js";


export default function ${factoryName}(options={}){


return new NEXA${className}(options);


}

`

);





fs.writeFileSync(

path.join(
modulePath,
"tests",
`${moduleName}-test.js`
),

`
console.log(
"NEXA ${className} Test Passed"
);
`

);





fs.writeFileSync(

path.join(
modulePath,
"docs",
`${moduleName}.md`
),

`
# NEXA ${className}

Version:
1.0.0-alpha

Module:
${moduleName}

`

);






// ==========================
// Auto Registry
// ==========================


function updateRegistry(){


let registry =
fs.readFileSync(
registryFile,
"utf8"
);



// Import

const importCode =
`
import ${factoryName}
from "./${moduleName}/index.js";
`;



if(!registry.includes(importCode.trim())){


registry =
importCode
+
"\n"
+
registry;


}




// loadModules

const loadCode =
`
    ${moduleVariable}:
    ${factoryName}(options),
`;



if(!registry.includes(loadCode.trim())){


registry =
registry.replace(

"return {",

"return {\n"
+
loadCode

);


}




// export default

const exportCode =
`
    ${factoryName},
`;



if(!registry.includes(exportCode.trim())){


registry =
registry.replace(

"export default {",

"export default {\n"
+
exportCode

);


}



fs.writeFileSync(

registryFile,

registry

);


}




updateRegistry();





console.log(
`
=================================
NEXA Scaffold Generator v0.3.1
=================================

Module Created:

${moduleName}


Generated:

✓ Module
✓ Factory
✓ Test
✓ Documentation
✓ Import Registry
✓ Runtime Registry
✓ Export Registry


=================================
`
);
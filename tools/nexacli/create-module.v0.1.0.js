/**
 * ============================================================
 * NEXA Scaffold Generator
 *
 * Command:
 * npm run create-module <module-name>
 *
 * Version: 0.1.0-alpha
 * ============================================================
 */

import fs from "fs";
import path from "path";


const moduleName = process.argv[2];


if (!moduleName) {

    console.log(
        "Usage: npm run create-module <module-name>"
    );

    process.exit(1);

}


const className =
    moduleName
        .split("-")
        .map(
            word =>
            word.charAt(0).toUpperCase()
            + word.slice(1)
        )
        .join("");



const modulePath =
    path.join(
        "src",
        "modules",
        moduleName
    );



const files = {


[`NEXA.${className}.js`]:

`/**
 * NEXA ${className}
 * Version: 0.1.0-alpha
 */

class NEXA${className} {

    execute(data = {}) {

        return {

            success: true,

            module: "${moduleName}",

            data

        };

    }

}


export default NEXA${className};
`,



"index.js":

`import NEXA${className}
from "./NEXA.${className}.js";


export default function(){

    return new NEXA${className}();

}
`


};



fs.mkdirSync(
    modulePath,
    {
        recursive:true
    }
);



Object.entries(files)
.forEach(
([file,content])=>{

    fs.writeFileSync(
        path.join(modulePath,file),
        content
    );

});



console.log(
`
=================================
NEXA Module Created
=================================

Module:
${moduleName}

Path:
${modulePath}

=================================
`
);
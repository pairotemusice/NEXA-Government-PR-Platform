/**
 * ============================================================
 * NEXA Government PR Platform
 *
 * NEXA Scaffold Generator
 *
 * Version:
 * 0.2.0-alpha
 *
 * Features:
 * - Generate Module
 * - Generate Test
 * - Generate Documentation
 *
 * Command:
 * npm run create-module <module-name>
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

Example:

npm run create-module social-listening
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



const className =
    toPascalCase(moduleName);



const basePath =
    path.join(
        "src",
        "modules",
        moduleName
    );



const testPath =
    path.join(
        basePath,
        "tests"
    );



const docPath =
    path.join(
        basePath,
        "docs"
    );




const files = {};



// Module Class

files[
`NEXA.${className}.js`
]
=
`
/**
 * NEXA ${className}
 *
 * Auto Generated Module
 *
 * Version:
 * 1.0.0-alpha
 */

class NEXA${className} {


    constructor(options = {}){


        this.name =
            "${moduleName}";


        this.version =
            "1.0.0-alpha";


        this.options =
            options;


    }




    execute(data = {}){


        return {


            success:
            true,


            module:
            this.name,


            data


        };


    }



}



export default NEXA${className};

`;





// Factory

files["index.js"]
=
`
import NEXA${className}
from "./NEXA.${className}.js";



export default function create${className}(options = {}){


    return new NEXA${className}(options);


}

`;





// Test

const testFile =
`
/**
 * ${className} Test
 */

import create${className}
from "../index.js";



const module =
    create${className}();



console.log(
    module.execute({
        test:true
    })
);

`;





// Documentation

const docFile =
`
# NEXA ${className}


## Module

${moduleName}


## Version

1.0.0-alpha


## Purpose

Describe module purpose here.


## API


execute(data)


`;





// Create Folder

fs.mkdirSync(
    basePath,
    {
        recursive:true
    }
);


fs.mkdirSync(
    testPath,
    {
        recursive:true
    }
);


fs.mkdirSync(
    docPath,
    {
        recursive:true
    }
);




// Write Module Files

Object.entries(files)
.forEach(
([file,content])=>{


    fs.writeFileSync(

        path.join(
            basePath,
            file
        ),

        content.trim()

    );


});




// Write Test

fs.writeFileSync(

    path.join(
        testPath,
        `${moduleName}-test.js`
    ),

    testFile.trim()

);




// Write Documentation

fs.writeFileSync(

    path.join(
        docPath,
        `${moduleName}.md`
    ),

    docFile.trim()

);





console.log(
`
=================================
NEXA Scaffold Generator v0.2.0
=================================

Module Created:

${moduleName}


Generated:

✓ Module
✓ Factory
✓ Test
✓ Documentation


Path:

${basePath}


=================================
`
);
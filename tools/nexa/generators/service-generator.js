import fs from "fs/promises";
import path from "path";


export default class ServiceGenerator {


    constructor(){

        this.root = process.cwd();

    }



    async create(name, options = {}){


        const servicePath =
            path.join(
                this.root,
                "src",
                "services",
                name
            );


        const exists =
            await this.exists(servicePath);



        if(exists && !options.force){


            console.log("");

            console.log(
                "NEXA Service Generator"
            );

            console.log(
                "======================"
            );

            console.log("");

            console.log(
                `⚠️ Service '${name}' already exists`
            );

            console.log(
                "Skipped generation"
            );

            console.log(
                "Use --force to overwrite"
            );

            return;


        }



        await fs.mkdir(
            servicePath,
            {
                recursive:true
            }
        );



        const className =
            this.capitalize(name);



        const serviceCode =

`export default class ${className}Service {


    constructor(){

        this.name = "${name}";

    }



    execute(input){


        return {

            service:this.name,

            status:"running",

            input

        };


    }


}
`;



        await this.writeFile(

            path.join(
                servicePath,
                `${name}-service.js`
            ),

            serviceCode

        );




        await this.writeFile(

            path.join(
                servicePath,
                "index.js"
            ),

`export { default } from "./${name}-service.js";
`

        );





        await this.writeFile(

            path.join(
                servicePath,
                "service.json"
            ),

JSON.stringify(

{

    name:name,

    version:"0.2.0",

    created:
        new Date().toISOString(),

    framework:
        "NEXA Service Factory"

},

null,

2

)

        );





        console.log("");

        console.log(
            "NEXA Service Generator"
        );

        console.log(
            "======================"
        );

        console.log("");

        console.log(
            "Created Service:",
            name
        );

        console.log(
            servicePath
        );

        console.log("");

        console.log(
            "✅ Service Generated"
        );


    }






    async writeFile(file,content){


        await fs.writeFile(

            file,

            content,

            "utf8"

        );


    }





    async exists(target){


        try{


            await fs.access(target);

            return true;


        }
        catch{


            return false;


        }


    }





    capitalize(text){


        return (
            text
            .charAt(0)
            .toUpperCase()
            +
            text.slice(1)
        );


    }


}
import ServiceGenerator from "../generators/service-generator.js";


export default async function(args){


    const type = args[0];

    const name = args[1];



    if(!type || !name){


        console.log("");

        console.log(
            "Usage:"
        );

        console.log(
            "node tools/nexa/index.js create service <name>"
        );

        console.log("");

        return;

    }



    if(type === "service"){


        const generator =
            new ServiceGenerator();


        await generator.create(name);


        return;


    }



    console.log(
        "Unknown create target:",
        type
    );


}
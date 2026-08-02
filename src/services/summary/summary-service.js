export default class SummaryService {


    constructor(){


        this.name =
            "summary";


        this.version =
            "0.1.0";


    }



    execute(input){


        return {


            service:
                this.name,


            version:
                this.version,


            status:
                "running",


            result:


            {

                summary:
                    input?.text ??
                    "No content"


            }


        };


    }


}
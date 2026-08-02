export default class XxxService {


    constructor(){

        this.name = "xxx";

    }



    execute(input){


        return {

            service:this.name,

            status:"running",

            input

        };


    }


}

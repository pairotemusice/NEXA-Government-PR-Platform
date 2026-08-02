export default class MonitorService {


    constructor(){

        this.name = "monitor";

    }



    execute(input){


        return {

            service:this.name,

            status:"running",

            input

        };


    }


}

/**
 * ============================================================
 * NEXA Government PR Platform
 * Version Engine
 *
 * File: NEXA.Version.js
 * Version: 0.1.0
 * ============================================================
 */


class NEXAVersion {


  constructor(){

    this.product = 
      "NEXA Government PR Platform";


    this.version = {

      major: 0,

      minor: 1,

      patch: 0,

      stage: "alpha"

    };

  }



  getVersion(){

    return `${this.version.major}.` +
           `${this.version.minor}.` +
           `${this.version.patch}-` +
           `${this.version.stage}`;

  }



  getInfo(){

    return {

      product: this.product,

      version: this.getVersion(),

      releaseType:
        this.version.stage

    };

  }



  setStage(stage){

    this.version.stage = stage;

  }



  upgrade(type){

    switch(type){


      case "major":

        this.version.major++;

        this.version.minor = 0;

        this.version.patch = 0;

        break;



      case "minor":

        this.version.minor++;

        this.version.patch = 0;

        break;



      case "patch":

        this.version.patch++;

        break;


    }

  }


}



export default NEXAVersion;
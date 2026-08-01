/**
 * ============================================================
 * NEXA Government PR Platform
 * Configuration Engine
 *
 * File: NEXA.Config.js
 * Version: 0.1.0
 * ============================================================
 */

class NEXAConfig {

  constructor() {

    this.config = {

      system: {
        name: "NEXA Government PR Platform",
        version: "0.1.0",
        environment: "development"
      },


      organization: {

        name: "สำนักงานประชาสัมพันธ์จังหวัด",

        province: "สระแก้ว",

        agency: "สวท.สระแก้ว"

      },


      ai: {

        enabled: true,

        provider: "OpenAI",

        mode: "assistant"

      },


      storage: {

        type: "Google Drive",

        rootFolder: "NEXA_Knowledge_Base"

      },


      modules: {

        core: true,

        builder: true,

        newsEngine: true,

        workflow: true

      }

    };

  }


  get(path) {

    return path
      .split(".")
      .reduce(
        (obj, key) => obj && obj[key],
        this.config
      );

  }


  set(path, value) {

    const keys = path.split(".");

    let obj = this.config;

    keys.forEach((key, index) => {

      if(index === keys.length - 1){

        obj[key] = value;

      }
      else{

        if(!obj[key]){

          obj[key] = {};

        }

        obj = obj[key];

      }

    });

  }


  all(){

    return this.config;

  }

}


export default NEXAConfig;
/**
 * ============================================================
 * NEXA Government PR Platform
 * Module Manager
 *
 * File: NEXA.Module.js
 * Version: 0.1.0
 * ============================================================
 */


class NEXAModuleManager {


  constructor(logger = null){

    this.modules = {};

    this.logger = logger;

  }



  register(name, module, metadata = {}){


    this.modules[name] = {

      instance: module,

      metadata: {

        name: name,

        version:
        metadata.version || "0.1.0",

        enabled:
        metadata.enabled !== false,

        description:
        metadata.description || ""

      }

    };


    if(this.logger){

      this.logger.info(
        `Module Registered: ${name}`
      );

    }


    return true;

  }



  get(name){

    const module =
      this.modules[name];


    if(!module){

      if(this.logger){

        this.logger.warning(
          `Module Not Found: ${name}`
        );

      }

      return null;

    }


    return module.instance;

  }



  enable(name){

    if(this.modules[name]){

      this.modules[name]
      .metadata.enabled = true;

      return true;

    }

    return false;

  }



  disable(name){

    if(this.modules[name]){

      this.modules[name]
      .metadata.enabled = false;

      return true;

    }

    return false;

  }



  list(){

    return Object.keys(
      this.modules
    ).map(name => {

      return this.modules[name]
      .metadata;

    });

  }



  status(){

    return {

      total:
      Object.keys(this.modules).length,


      modules:
      this.list()

    };

  }


}


export default NEXAModuleManager;
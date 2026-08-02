import { RuntimeStore } from "./runtime-store.js";


export class RuntimeManager {

  constructor(){

    this.store = new RuntimeStore();

  }


  async start(service){

    return await this.store.update(
      service,
      {
        status:"running",
        startedAt:new Date().toISOString()
      }
    );

  }


  async stop(service){

    return await this.store.update(
      service,
      {
        status:"stopped",
        stoppedAt:new Date().toISOString()
      }
    );

  }


  async status(service){

    return await this.store.get(service);

  }

}
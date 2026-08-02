/**
 * NEXA Module Registry Connector v0.1.0
 * Sprint 3.10 Intelligence Integration
 */

class ModuleRegistryConnector {

    constructor(adapter) {

        this.adapter = adapter;

    }


    register(name, module) {

        return this.adapter.register(
            name,
            module
        );

    }


    modules() {

        return this.adapter.list();

    }

}


export default ModuleRegistryConnector;
/**
 * NEXA Intelligence Registry v0.1.0
 * Sprint 3.9
 */

class IntelligenceRegistry {

    constructor() {
        this.modules = [];
    }


    register(module) {

        this.modules.push(module);

        return {
            success: true,
            name: module.name
        };

    }


    get(name) {

        return this.modules.find(
            module => module.name === name
        );

    }


    list() {

        return this.modules;

    }


    count() {

        return this.modules.length;

    }

}


export default IntelligenceRegistry;
/**
 * NEXA Module Runtime v0.1.0
 * Sprint 3.10 Intelligence Integration
 */

class ModuleRuntime {

    constructor(registry) {

        this.registry = registry;

    }


    register(name, module) {

        return this.registry.register(
            name,
            module
        );

    }


    execute(name, input) {

        const module = this.registry.get(name);

        if (!module) {
            throw new Error(
                `Module not found: ${name}`
            );
        }

        return module.execute(input);

    }

}


export default ModuleRuntime;
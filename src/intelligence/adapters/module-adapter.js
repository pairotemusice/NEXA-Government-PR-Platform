/**
 * NEXA Module Adapter v0.1.0
 * Sprint 3.10 Intelligence Integration
 *
 * Adapter สำหรับเชื่อม Intelligence Layer
 * กับ NEXA Modules ต่าง ๆ
 */

class ModuleAdapter {

    constructor() {

        this.modules = new Map();

        this.version = "0.1.0";

    }


    register(name, module) {

        this.modules.set(name, module);

        return {

            name,

            status: "registered"

        };

    }


    get(name) {

        return this.modules.get(name);

    }


    list() {

        return Array.from(
            this.modules.keys()
        );

    }


    execute(name, input) {

        const module = this.get(name);


        if (!module) {

            throw new Error(
                `NEXA Module not found: ${name}`
            );

        }


        if (typeof module.execute !== "function") {

            throw new Error(
                `Invalid module interface: ${name}`
            );

        }


        return module.execute(input);

    }

}


export default ModuleAdapter;
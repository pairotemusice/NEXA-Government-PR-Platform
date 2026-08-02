import fs from "fs/promises";
import path from "path";

const RUNTIME_FILE = path.resolve(
  "src/runtime/service-runtime.json"
);

export class RuntimeStore {

  async ensure() {

    try {

      await fs.access(RUNTIME_FILE);

    } catch {

      await fs.writeFile(
        RUNTIME_FILE,
        JSON.stringify({}, null, 2)
      );

    }

  }


  async read() {

    await this.ensure();

    const data = await fs.readFile(
      RUNTIME_FILE,
      "utf-8"
    );

    return JSON.parse(data);

  }


  async write(state) {

    await fs.writeFile(
      RUNTIME_FILE,
      JSON.stringify(state, null, 2)
    );

  }


  async update(service, payload) {

    const state = await this.read();

    state[service] = {
      ...(state[service] || {}),
      ...payload,
      updatedAt: new Date().toISOString()
    };


    await this.write(state);

    return state[service];

  }


  async get(service) {

    const state = await this.read();

    return state[service];

  }

}
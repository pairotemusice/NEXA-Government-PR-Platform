import Router from "./kernel/router.js";


const args = process.argv.slice(2);


const command = args.shift();


const router = new Router();


await router.execute(command, args);
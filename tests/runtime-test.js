import { RuntimeManager }
from "../src/runtime/runtime-manager.js";


const runtime = new RuntimeManager();


console.log(
 await runtime.start("news")
);


console.log(
 await runtime.status("news")
);


console.log(
 await runtime.stop("news")
);
#!/usr/bin/env node

import Router from "./kernel/router.js";


const router = new Router();


router.execute(process.argv);
/**
 * ============================================================
 * NEXA Government PR Platform
 * PR Writer Module Export
 *
 * File: index.js
 * Version: 0.1.0-alpha
 * ============================================================
 */


import NEXAPRWriter 
from "./NEXA.PRWriter.js";



export default function createPRWriter(options = {}){


    return new NEXAPRWriter(
        options
    );


}
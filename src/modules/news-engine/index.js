/**
 * ============================================================
 * NEXA Government PR Platform
 * News Engine Module Export
 *
 * File: index.js
 * Version: 0.1.0-alpha
 * ============================================================
 */


import NEXANewsEngine 
from "./NEXA.NewsEngine.js";



export default function createNewsEngine(options = {}){


    return new NEXANewsEngine(
        options
    );


}
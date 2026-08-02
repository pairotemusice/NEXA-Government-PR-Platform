/**
 * ============================================================
 * NEXA Government PR Platform
 *
 * Module Template Factory
 *
 * File:
 * index.js
 *
 * Version:
 * 1.0.0-alpha
 * ============================================================
 */


import NEXATemplate
from "./NEXA.Template.js";



export default function createTemplate(options = {}) {


    return new NEXATemplate(options);


}
/**
 * ============================================================
 * NEXA Shared SDK
 *
 * File: lib/index.js
 * Version: 1.0.0
 *
 * Central Export Layer
 * ============================================================
 */


/**
 * Console Library
 */
export {
    printHeader,
    printSection,
    printSuccess,
    printFail,
    printWarning,
    printInfo,
    printFooter,
    printScore,
    printBlank

} from "./console.js";



/**
 * Filesystem Library
 */
export {

    fileExists,
    directoryExists,
    createDirectory,
    readFile,
    writeFile,
    readJSON,
    writeJSON,
    backupFile,
    listDirectory

} from "./filesystem.js";



/**
 * SDK Version
 */
export const NEXA_SDK_VERSION = "1.0.0";



/**
 * SDK Information
 */
export const SDK_INFO = {

    name:
    "NEXA Shared SDK",


    version:
    NEXA_SDK_VERSION,


    status:
    "foundation"


};
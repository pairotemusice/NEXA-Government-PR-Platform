/**
 * ============================================================
 * NEXA Shared Filesystem Engine
 *
 * File: filesystem.js
 * Version: 1.0.0
 *
 * File / Folder Management Layer
 * ============================================================
 */

import fs from "fs";
import path from "path";


/**
 * Check File Exists
 */
export function fileExists(filePath) {

    return fs.existsSync(filePath);

}



/**
 * Check Directory Exists
 */
export function directoryExists(dirPath) {

    return fs.existsSync(dirPath)
        &&
        fs.lstatSync(dirPath).isDirectory();

}



/**
 * Create Directory
 */
export function createDirectory(dirPath) {

    if (!directoryExists(dirPath)) {

        fs.mkdirSync(
            dirPath,
            {
                recursive: true
            }
        );

    }

    return true;

}



/**
 * Read Text File
 */
export function readFile(filePath) {

    return fs.readFileSync(
        filePath,
        "utf8"
    );

}



/**
 * Write Text File
 */
export function writeFile(
    filePath,
    content
) {

    const folder =
        path.dirname(filePath);


    createDirectory(folder);


    fs.writeFileSync(
        filePath,
        content,
        "utf8"
    );


    return true;

}



/**
 * Read JSON
 */
export function readJSON(filePath) {

    const content =
        readFile(filePath);


    return JSON.parse(content);

}



/**
 * Write JSON
 */
export function writeJSON(
    filePath,
    data
) {

    const content =
        JSON.stringify(
            data,
            null,
            2
        );


    return writeFile(
        filePath,
        content
    );

}



/**
 * Backup File
 */
export function backupFile(
    source,
    destination
) {

    if (!fileExists(source)) {

        throw new Error(
            `File not found: ${source}`
        );

    }


    fs.copyFileSync(
        source,
        destination
    );


    return true;

}



/**
 * List Directory
 */
export function listDirectory(
    dirPath
) {

    if (!directoryExists(dirPath)) {

        return [];

    }


    return fs.readdirSync(
        dirPath
    );

}
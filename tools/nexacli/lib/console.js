/**
 * ============================================================
 * NEXA Shared Console Library
 *
 * File: console.js
 * Version: 1.0.0
 * ============================================================
 */


const LINE =
"=================================";


export function printHeader(title = "NEXA") {

    console.log("");
    console.log(LINE);
    console.log(title);
    console.log(LINE);

}



export function printSection(title) {

    console.log("");
    console.log("---------------------------------");
    console.log(title);
    console.log("---------------------------------");

}



export function printSuccess(message) {

    console.log(
        "PASS",
        message
    );

}



export function printFail(message) {

    console.log(
        "FAIL",
        message
    );

}



export function printWarning(message) {

    console.log(
        "WARN",
        message
    );

}



export function printInfo(message) {

    console.log(
        "INFO",
        message
    );

}



export function printFooter() {

    console.log(LINE);

}



export function printScore(title, value) {

    console.log(
        `${title}: ${value}`
    );

}



export function printBlank() {

    console.log("");

}
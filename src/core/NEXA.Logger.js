/**
 * ============================================================
 * NEXA Government PR Platform
 * Logger Engine
 *
 * File: NEXA.Logger.js
 * Version: 0.1.0
 * ============================================================
 */

class NEXALogger {

  constructor(options = {}) {

    this.appName = options.appName || 
      "NEXA Government PR Platform";

    this.logs = [];

  }


  createLog(level, message, data = {}) {

    const log = {

      timestamp: new Date().toISOString(),

      application: this.appName,

      level: level,

      message: message,

      data: data

    };


    this.logs.push(log);

    return log;

  }


  info(message, data = {}) {

    return this.createLog(
      "INFO",
      message,
      data
    );

  }


  warning(message, data = {}) {

    return this.createLog(
      "WARNING",
      message,
      data
    );

  }


  error(message, data = {}) {

    return this.createLog(
      "ERROR",
      message,
      data
    );

  }


  getLogs(){

    return this.logs;

  }


  clear(){

    this.logs = [];

  }

}


export default NEXALogger;
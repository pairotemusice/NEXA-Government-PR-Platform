/**
 * NEXA Intelligence Layer v0.1.0
 * Sprint 3.9
 */

import IntelligenceEngine from "./engine.js";
import IntelligenceRegistry from "./registry.js";
import IntelligencePipeline from "./pipeline.js";


const registry = new IntelligenceRegistry();

const engine = new IntelligenceEngine();

const pipeline = new IntelligencePipeline(
    engine,
    registry
);


export {

    engine,

    registry,

    pipeline

};


export default {

    engine,

    registry,

    pipeline

};
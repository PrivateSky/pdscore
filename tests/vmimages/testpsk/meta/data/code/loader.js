
var pskruntime = require(pskruntime);


var currentSpace = pskruntime.createSpace(testpsk);

exports = currentSpace;

currentSpace.declareAdapter("testAdapter", "./adapters/testAdapter.js");
currentSpace.declareSwarm("access", "./swarms/access.js");
currentSpace.declareSwarm("consent", "./swarms/consent.js");
currentSpace.declareSwarm("execute", "./swarms/execute.js");
currentSpace.declareSwarm("testSwarm", "./swarms/testSwarm.js");

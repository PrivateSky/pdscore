var pdsCore = require("../lib/index");
var assert = require("double-check").assert;

var networkConnection = require("./util/NetworkConnection.js");

var configuration = {
    id: "TEST",
    fingerprintAlgorithm: "naive",
    signatureAlgoritm: "naive",
    consent: "pds://:code:consent.js",
    access: "pds://:code:access.js"
};

var vmConfig = {
    workingDir: "./vm",
    privateKey: "P",
    publicKey: "p",
    agentId: "pds://:agents:admin"
};

var shareholders = {
    "pds://:agents:admin": 99,
    "pds://:agents:test": 1
};

//initializeaza o reprezentare in memorie a unui spatiu fara a fi salvat pe disk
var psk = pdsCore.initSpace(configuration, shareholders);

//un vm capabil sa ruleze code coreografiilor (consent, access etc...)
var vm = pdsCore.startVM(vmConfig, networkConnection);

function init(callback){
    vm.replicateSpace("pds://", callback);
}

function act(callback){

}

function test(callback){

}

assert.steps("Testing reading keys from pds",[
    init,
    act,
    test
]);


psdk.storeKey("pds://:agents:admin", "public_key");
//psdk.storeKey("pds://:code:consent.js", "");



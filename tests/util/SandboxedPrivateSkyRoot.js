var pdsCore = require("../../lib/index.js");


var networkConnection = require("./NetworkConnectionMock.js");


var vmConfig = {
    workingDir: "./vm",
    privateKey: "P",
    publicKey: "p",
    agentId: "pds://PrivateSky/agents/admin"
};

function initSandbox(callback){
    var vm = pdsCore.startVM(vmConfig, networkConnection);
    vm.replicateSpace("pds://PrivateSky", callback);
    return vm;
}

testVM = pdsCore.createVM("../vmimages/testpsk");

exports.vm = testVM;



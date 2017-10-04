



function PDSNode(baseFolder){
    var verificationSpaceUtilities = require("./verificationSpaces");
    var pdsTimeUtilities = require("./PDSTime");
    var signatureUtilities = require("./signatureUtilities");
    var agentUtilities = require("./agents");
    var organisationUtilities = require("./agents");

    var storage = require("./PDSStorage").createSTorage("local", baseFolder);

    var coreContracts  = node.loadVerificationSpace("CoreContracts");
    var privateSky      = node.loadVerificationSpace("PrivateSky");
    var organisations   = node.loadVerificationSpace("Organisations");
    var security        = node.loadVerificationSpace("Security");
    var founders        = node.loadVerificationSpace("Founders");
    var attackers       = node.loadVerificationSpace("Attackers");

    this.loadVerificationSpace = function(callback){

    }

    this.createMasterKey = function(verificationSpace){

    }

    this.storeValue = function(masterKey, value,  signatures){

    }


    this.getValue = function(key, callback){

    }


    this.shareKey = function(masterKey){ //returns a key reference that will be stored in the verification Space

    }
}



exports.createNode = function(baseFolder){
    if(!baseFolder){
        baseFolder = "./";
    }
    var node = new PDSNode(baseFolder);


    return node;
}


exports.removeNode = function(baseFolder){
    require("fs").unlink(baseFolder);
}
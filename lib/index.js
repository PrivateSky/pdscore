


function PDSNode(baseFolder){
    var verificationSpaceUtilities = require("./pds/verificationSpaces");
    var pdsTimeUtilities = require("./pds/PDSTime");
    var signatureUtilities = require("./pds/signatureUtilities");
    var agentUtilities = require("./pds/agents");
    var organisationUtilities = require("./pds/agents");

    var storage = require("./pds/PDSStorage").createSTorage("local", baseFolder);


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
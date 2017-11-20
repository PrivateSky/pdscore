
function PvskVM(baseFolder, spaces){

    var space = require("../pds/keyManagement");

    /*var verificationSpaceUtilities = require("./pds/verificationSpaces");
    var pdsTimeUtilities = require("./pds/PDSTime");
    var signatureUtilities = require("./pds/signatureUtilities");
    var agentUtilities = require("./pds/agents");
    var organisationUtilities = require("./pds/agents");

    var storage = require("./pds/PDSStorage").createSTorage("local", baseFolder); */

    function loadSpace(folder){

    }

    var activeSpaces ={};

    spaces.forEach(function(name){
        spaces[name] = loadSpace(baseFolder + "/" + name);
    })


    this.resolveSwarmMessage = function(swarmMessage, callback){
        console.log("Test....");
        callback(swarmMessage);
    }

}



exports.createVM = function(baseFolder, spaces){
    if(!baseFolder){
        baseFolder = "./";
    }
    var node = new PvskVM(baseFolder, spaces);


    return node;
}


exports.removeNode = function(baseFolder){
    require("fs").unlink(baseFolder);
}
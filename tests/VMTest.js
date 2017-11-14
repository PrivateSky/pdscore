

var assert = require("double-check").assert;
var flow = require("callflow");

//create testVM global variables
var vm = require("./util/SandboxedPrivateSkyRoot");


var myTest =  flow.createFlow("Test initialisation", {
    begin:function(end){
        this.end = end;
        this.act();
    },
    act:function(){
        assert.notNull(mockedConnection, "Connection does not exist");
        mockedConnection.executeSwarm("testSwarm", "test", this.test);
    },
    test:function(result){

        assert.notNull(testVM);
        assert.equal(result.result, "Hello World");
        this.end();
    }
});


assert.callback("Testing initialisation of the VM...", myTest);

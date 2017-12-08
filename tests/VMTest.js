

var assert = require("double-check").assert;
var flow = require("callflow");

var pskruntime = require("pskruntime");

//create testVM global variables
var vm = require("./util/SandboxedPrivateSkyRoot");


var myTest =  flow.createFlow("Test initialisation", {
    begin:function(end){
        this.end = end;
        this.act();
    },
    act:function(){
        //assert.notNull(mockedConnection, "Connection does not exist");
        assert.notNull(testVM);
        var msg = pskruntime.createSwarmMessageFromJson("testSwarm", "begin", "admin","p", {
           var:"variable"
        });

        testVM.resolveSwarmMessage(msg, this.test);
    },
    test:function(result){
        assert.equal(result.result, "Hello World");
        this.end();
    }
});


assert.callback("Testing initialisation of the VM...", myTest);

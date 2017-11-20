

var thisModule = require("../lib/index.js");

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
        assert.notNull(testVM, "There is no privateSky virtual machine available");
        var msg = pskruntime.createSwarmMessageFromJson("testSwarm", "begin", "admin","p", {
           var:"variable"
        });

        testVM.resolveSwarmMessage(msg, this.continue("test"));
    },
    test:function(result){
        assert.equal(result.result, "Hello World");
        this.end();
    }
});

//myTest();

assert.callback("Testing initialisation of the VM...", myTest);

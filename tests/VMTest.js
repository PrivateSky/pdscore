
var assert = require("double-check").assert;

//create testVM global variables
require("./util/SandboxedPrivateSkyRoot");


function init(next){
    testVM.getSpace("pds://privatesky/", next)
}

function act(next){
    testVM.setValue("keys/something","test", next);
}

function test(end){
    testVM.getValue("keys/something",function(value){
        assert.equal(value,"test");
        end();
    });

    /*assert.callback("Testing value", function(end){

    });*/
}

assert.steps("Testing how to write and read a key from pds at the level of the VM host",[
    init,
    act,
    test
]);



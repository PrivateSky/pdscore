
global.__global__enable_RUN_WITH_WHYS = true;

if(!process.env.NODE_DEV_MODULES) {
    var path = require('path');
    var newRoot =  path.resolve(__dirname + "/../../");
    process.env.NODE_DEV_MODULES = newRoot;
    console.log(process.env.NODE_DEV_MODULES);
}
require("xrequire");
var vmcore = require("./vm/vmcore.js");

exports.createVM = vmcore.createVM;

/*
removeNode: function (baseFolder) {
        require("fs").unlink(baseFolder);
    }
 */

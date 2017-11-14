
function StandardMockConnection(){
    /*
    this.replicateSpace =  function(pdsUri, dir, callback){};
    this.updateSpace = function(pdsUri, dir, callback){};
    this.validateFingerprint = function(pdsUri, fingerprint, pdsMoment, callback){};
    */

    var vm = null;
    this.executeSwarm = function(swarmName, ctor){ //for tests only
        vm.run({

        })
    };


    this.attachVM = function(vm){

    }


    return this;
}

mockedConnection = new StandardMockConnection();


exports = mockedConnection;
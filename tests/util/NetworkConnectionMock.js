
function StandardMockConnection(){
    this.replicateSpace =  function(pdsUri, dir, callback){};
    this.updateSpace = function(pdsUri, dir, callback){};
    this.validateFingerprint = function(pdsUri, fingerprint, pdsMoment, callback){};

    this.executeSwarm = function(swarmName, ctor){

    };
    return this;
}

mockedConnection = new StandardMockConnection();


exports = mockedConnection;
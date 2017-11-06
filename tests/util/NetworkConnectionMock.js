var configuration = {
    id: "PrivateSky",
    fingerprintAlgorithm: "naive",
    signatureAlgoritm: "naive",
    consent: "pds://PrivateSky/code/consent.js",
    access:  "pds://PrivateSky/code/access.js"
};

var shareholders = {
    "pds://PrivateSky/agents/admin": 99,
    "pds://PrivateSky/agents/test": 1
};

function FakeConnection(){
    this.replicateSpace =  function(pdsUri, dir, callback){};
    this.updateSpace = function(pdsUri, dir, callback){};
    this.validateFingerprint = function(pdsUri, fingerprint, pdsMoment, callback){};

    this.fakeKeyFromFile = function(uri, fileName, permissions){

    }

    this.fakeKey = function(uri, value, permissions){

    }


    this.fakeKey = function(uri, value){

    }

    return this;
}

var conn = new FakeConnection();

conn.fakeKeyFromFile("pds://PrivateSky/code/access", "../swarms/access.js");
conn.fakeKeyFromFile("pds://PrivateSky/code/consent", "../swarms/consent.js");
conn.fakeKeyFromFile("pds://PrivateSky/code/consent", "../swarms/testSwarm.js");

exports = conn;
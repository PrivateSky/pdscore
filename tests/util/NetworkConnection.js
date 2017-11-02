var configuration = {
    id: "PrivateSky",
    fingerprintAlgorithm: "naive",
    signatureAlgoritm: "naive",
    consent: "pds://:code:consent.js",
    access: "pds://:code:access.js"
};

var shareholders = {
    "pds://:agents:admin": 99,
    "pds://:agents:test": 1
};

var conn = {
    replicateSpace: function(pdsUri, dir, callback){},
    updateSpace: function(pdsUri, dir, callback){},
    validateFingerprint: function(pdsUri, fingerprint, pdsMoment, callback){}
};

exports = conn;
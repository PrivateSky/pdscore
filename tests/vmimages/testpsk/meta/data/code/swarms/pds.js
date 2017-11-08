/* example of swarm in privateSky 2.0 */
exports = {
    vars:{

    },
    read: function(key){
        if(localKey){
            this.run("doReadAsAgent", "admin", "p", key);
            this.runInAdapter("doReadAsAgent", "admin", "p", key);
        } else {
            this.swarm(getSpaceName(key), "doReadAsAgent", "admin", "p", key);
        }
    },
    write:function(){

    },
    doReadAsAgent: function(agent, privatekey, pdsKey){
        currentNode.readKey(pdsKey, agent, privatekey, function(result){
            this.home("result", result);
        } )
    }
};
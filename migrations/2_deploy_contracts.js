var HelloBlockchain = artifacts.require("HelloBlockchain");
var Arg = "Hello world";
module.exports = deployer => {
    deployer.deploy(HelloBlockchain, Arg);
};

var Voting = artifacts.require("Voting");
//expects bytes32 value, must add
//var Arg2 = ...

module.exports = deployer => {
  deployer.deploy(Voting,Arg2);
};

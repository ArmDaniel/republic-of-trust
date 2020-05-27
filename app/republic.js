function Voting(Contract) {
    this.web3 = null;
    this.instance = null;
    this.Contract = Contract;
}

Voting.prototype.onReady = function() {
    this.init(function () {
        $('#message').append("Successfully loaded Voting dApp.");
    });
}

Voting.prototype.init = function(cb) {
    //creating web3 instance
    this.web3 = new Web3(
        (window.web3 && window.web3.currentProvider) ||
        new Web3.providers.HttpProvider(this.Contract.endpoint));

    // Create the contract interface using the ABI provided in the configuration.
    var contract_interface = this.web3.eth.contract(this.Contract.abi);

    // Create the contract instance for the specific address provided in the configuration.
    this.instance = contract_interface.at(this.Contract.address);

    cb();
}

if(typeof(Contracts) === "undefined") var Contracts={ Voting: { abi: [] }};
var voting = new Voting(Contracts['Voting']);

$(document).ready(function() {
    empty.onReady();
});

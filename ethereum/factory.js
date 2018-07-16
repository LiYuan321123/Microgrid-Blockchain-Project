// import web3 from './web3';
// import HouseholdFactory from './build/HouseholdFactory.json';
const web3 = require('./web3');
const HouseholdFactory = require ('./build/HouseholdFactory.json');

//replace this address with the deployed version of batteryfactory
const instance = new web3.eth.Contract(
    JSON.parse(HouseholdFactory.interface),
    '0x29AEE0aadc244f11dDd35Dcd28375B4F00E18e9B'
);

// export default instance;
module.exports = instance;
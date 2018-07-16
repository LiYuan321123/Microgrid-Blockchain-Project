const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/HouseholdFactory.json');

const provider = new HDWalletProvider('pulse stable fever half settle phone impact theory crater grit chef census',
                                    'https://rinkeby.infura.io/YDnIBMV5OY1S3hf9iVWn'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({ gas: '1999999',from: accounts[0]});
    
    console.log('Contract deployed to', result.options.address);
};

deploy();
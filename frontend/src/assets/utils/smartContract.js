const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);
const { eth } = web3;
const abi = [
	{
		"inputs": [],
		"name": "genNewToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getToken",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const tokenGeneratorAddress = "0xAFeDb3bACF8B30036f3C4B4A6b9687b64C452aaB";
const tokenGeneratorContract = new eth.Contract(abi, tokenGeneratorAddress);

const genNewToken = async () => {
    await window.web3.eth.getAccounts().then(async e => {
        if(!e[0])
            window.ethereum && window.ethereum.enable();
        await window.web3.eth.sendTransaction({
            from: e[0],
            to: tokenGeneratorAddress,
            data: tokenGeneratorContract.methods.genNewToken().encodeABI()
        });
    });
}

const token = async () => {
    await genNewToken();
    const newToken = await tokenGeneratorContract.methods.getToken().call();
    return newToken;
}

export { token };

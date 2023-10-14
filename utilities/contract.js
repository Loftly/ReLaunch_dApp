// Utilities/contract.js
import Web3 from 'web3';

let web3;
let contract;

const ABI = [];  // Use your ABI
const CONTRACT_ADDRESS = '';  // Use your contract address

export const connectWallet = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
        const accounts = await web3.eth.getAccounts();
        return accounts[0];
    } else {
        console.error("Ethereum provider not detected");
        throw new Error("Ethereum provider not detected");
    }
}

export const getCurrentAccount = async () => {
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
}

// Add other utility methods here for contract interactions

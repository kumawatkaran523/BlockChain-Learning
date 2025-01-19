const { ethers } = window.ethers;

async function connectWallet() {
    if (window.ethereum) {
        try {
            // Request account access if needed
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            console.log('Connected:', accounts[0]);
            // Now you can interact with the blockchain using `signer`
        } catch (error) {
            console.error("Error connecting to wallet:", error);
        }
    } else {
        console.error("Please install MetaMask!");
    }
}

document.getElementById('connectButton').addEventListener('click', connectWallet);




const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contractABI = [
    // ABI of your contract
];

async function interactWithContract() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    // Example: Call a read function
    try {
        const value = await contract.someReadFunction();
        console.log('Value from contract:', value.toString());
    } catch (error) {
        console.error("Error interacting with contract:", error);
    }
}

// Call this function after connecting to the wallet

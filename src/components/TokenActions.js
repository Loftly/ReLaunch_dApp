// Components/TokenActions.js
import React, { useState, useEffect } from 'react';
import { connectWallet, getCurrentAccount } from '../Utilities/contract';

function TokenActions() {
    const [account, setAccount] = useState('');
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        if (window.ethereum) {
            getCurrentAccount().then(setAccount);
        }
    }, []);

    const handleConnectWallet = async () => {
        try {
            const acc = await connectWallet();
            setAccount(acc);
        } catch (error) {
            console.error("Failed to connect to wallet");
        }
    }

    return (
        <div>
            <h2>Token Actions</h2>
            <button onClick={handleConnectWallet}>
                {account ? `Connected: ${account}` : 'Connect Wallet'}
            </button>
            {/* Display balance if account is connected */}
            {account && <p>Balance: {balance} MOMO</p>}
        </div>
    );
}

export default TokenActions;

// Components/Navbar.js
import React, { useState } from 'react';
import web3 from '../Utilities/web3';

function Navbar() {
    const [account, setAccount] = useState('');

    const connectWallet = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
        } else {
            alert("Please install MetaMask to use this dApp!");
        }
    };

    return (
        <nav>
            <div className="navbar-brand">MOMO dApp</div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/lottery">Lottery</a></li>
                <li><a href="/betting">Betting</a></li>
                <li><a href="/marsmissions">Mars Missions</a></li>
                <li><a href="/admin">Admin</a></li>
            </ul>
            <button onClick={connectWallet}>
                {account ? `Connected: ${account.substr(0,6)}...${account.substr(-4)}` : 'Connect Wallet'}
            </button>
        </nav>
    );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import web3 from '../utilities/web3';
import { getContract } from '../utilities/contract';

function LotteryActions() {
    const [pot, setPot] = useState(0);
    const contract = getContract();

    useEffect(() => {
        async function fetchPot() {
            const potValue = await contract.methods.totalPot().call();
            setPot(web3.utils.fromWei(potValue, 'ether'));
        }
        fetchPot();
    }, [contract]);

    const buyTicket = async () => {
        const accounts = await web3.eth.getAccounts();
        const ticketPrice = await contract.methods.ticketPriceInMOMO().call();
        await contract.methods.buyTicket().send({ from: accounts[0], value: ticketPrice });
        const newPotValue = await contract.methods.totalPot().call();
        setPot(web3.utils.fromWei(newPotValue, 'ether'));
    };

    return (
        <div>
            <h2>Lottery Actions</h2>

            <div>
                <h3>Current Pot: {pot} ETH</h3>
                <button onClick={buyTicket}>Buy Ticket</button>
            </div>
        </div>
    );
}

export default LotteryActions;

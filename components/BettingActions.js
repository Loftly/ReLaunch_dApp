// Components/BettingActions.js
import React, { useState } from 'react';
import web3 from '../Utilities/web3';
import contract from '../Utilities/contract';

function BettingActions() {
    const [betAmount, setBetAmount] = useState('');
    const [betChoice, setBetChoice] = useState('');
    const [betOutcome, setBetOutcome] = useState('');

    const placeBet = async () => {
        const accounts = await web3.eth.getAccounts();
        const weiAmount = web3.utils.toWei(betAmount, 'ether');
        const betId = await contract.methods.placeBet(betChoice, weiAmount).send({ from: accounts[0] });
        const bet = await contract.methods.bets(betId).call();
        setBetOutcome(bet.outcome);
    };

    return (
        <div>
            <h2>Betting Actions</h2>

            <div>
                <label>
                    Bet Amount (in ETH):
                    <input 
                        type="text"
                        value={betAmount}
                        onChange={(e) => setBetAmount(e.target.value)}
                    />
                </label>

                <label>
                    Choose:
                    <select value={betChoice} onChange={(e) => setBetChoice(e.target.value)}>
                        <option value="">Select...</option>
                        <option value="HEADS">HEADS</option>
                        <option value="TAILS">TAILS</option>
                    </select>
                </label>

                <button onClick={placeBet}>Place Bet</button>
            </div>

            {betOutcome && (
                <div>
                    <h3>Outcome of your last bet: {betOutcome}</h3>
                </div>
            )}
        </div>
    );
}

export default BettingActions;

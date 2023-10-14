// Components/MarsMissionActions.js
import React, { useState } from 'react';
import web3 from '../utilities/web3';
import { getContract } from '../utilities/contract';

const contract = getContract();

function MarsMissionActions() {
    const [missionAmount, setMissionAmount] = useState('');
    const [missionOutcome, setMissionOutcome] = useState('');

    const startMarsMission = async () => {
        const accounts = await web3.eth.getAccounts();
        const weiAmount = web3.utils.toWei(missionAmount, 'ether');
        await contract.methods.startMarsMission(weiAmount).send({ from: accounts[0] });
        const mission = await contract.methods.userMissions(accounts[0]).call();
        setMissionOutcome(mission.outcome);
    };

    return (
        <div>
            <h2>Mars Mission Actions</h2>

            <div>
                <label>
                    Mission Amount (in ETH):
                    <input 
                        type="text"
                        value={missionAmount}
                        onChange={(e) => setMissionAmount(e.target.value)}
                    />
                </label>

                <button onClick={startMarsMission}>Start Mission</button>
            </div>

            {missionOutcome && (
                <div>
                    <h3>Outcome of your last mission: {missionOutcome}</h3>
                </div>
            )}
        </div>
    );
}

export default MarsMissionActions;

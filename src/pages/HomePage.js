// Pages/HomePage.js
import React from 'react';
import TokenActions from '../Components/TokenActions';
import LotteryActions from '../Components/LotteryActions';
import BettingActions from '../Components/BettingActions';
import MarsMissionActions from '../Components/MarsMissionActions';

function HomePage() {
    return (
        <div className="container">
            <h1>MOMO dApp</h1>
            
            <TokenActions />
            <LotteryActions />
            <BettingActions />
            <MarsMissionActions />
        </div>
    );
}

export default HomePage;

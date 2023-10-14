// Pages/HomePage.js
import React from 'react';
import TokenActions from '../components/TokenActions';
import LotteryActions from '../components/LotteryActions';
import BettingActions from '../components/BettingActions';
import MarsMissionActions from '../components/MarsMissionActions';

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

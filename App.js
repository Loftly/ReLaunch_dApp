// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import AdminPage from './Pages/AdminPage';
import LotteryPage from './Pages/LotteryPage';
import MarsMissionsPage from './Pages/MarsMissionsPage';
import BettingPage from './Pages/BettingPage';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="app-content">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/lottery" component={LotteryPage} />
                    <Route path="/marsmissions" component={MarsMissionsPage} />
                    <Route path="/betting" component={BettingPage} />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default App;

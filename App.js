// App.js
import React from 'react';
import GlobalStyles from './styles/StyledGlobals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LotteryPage from './pages/LotteryPage';
import MarsMissionsPage from './Pages/MarsMissionsPage';
import BettingPage from './pages/BettingPage';

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

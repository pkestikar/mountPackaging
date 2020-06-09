import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import HomePage from 'Pages/HomePage';
import AboutUsPage from 'Pages/AboutUsPage';
import ContactPage from 'Pages/ContactPage';
import TopBar from 'Components/TopBar';


const App = () => {
    return (
        <Router>
            <div className="mp--main-container">

            </div>

            <TopBar />

            <Switch>
                <Route component={AboutUsPage} path={'/about-us/'} />
                <Route component={ContactPage} path={'/contact/'} />
                <Route component={HomePage} path={'/'} />
            </Switch>
        </Router>
    )
};

export default App;

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
            <div id={'outer-container'} className={'mp--main-container'}>
                <TopBar />
                <main id="page-wrap" className={'mp--main-container--inner'}>
                    <Switch>
                        <Route component={AboutUsPage} path={'/about-us/'} />
                        <Route component={ContactPage} path={'/contact/'} />
                        <Route component={HomePage} path={'/'} />
                    </Switch>
                </main>
            </div>
        </Router>
    )
};

export default App;

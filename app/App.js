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
import Footer from "Components/Footer";

const App = () => {
    return (
        <Router>
            <div id={'outer-container'} className={'mp--main-container'}>
                <TopBar />
                <main id="page-wrap">
                    <Switch>
                        <Route component={AboutUsPage} path={'/about-us/'} />
                        <Route component={ContactPage} path={'/contact/'} />
                        <Route component={HomePage} path={'/'} />
                    </Switch>
                    <Footer />
                </main>
            </div>
        </Router>
    )
};

export default App;

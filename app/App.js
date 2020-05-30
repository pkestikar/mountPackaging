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

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about-us/'}>About Us</Link>
                        </li>
                        <li>
                            <Link to={'/contact/'}>Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path={'/'}>
                        <HomePage />
                    </Route>
                    <Route path={'/about-us/'}>
                        <AboutUsPage />
                    </Route>
                    <Route path={'/contact/'}>
                        <ContactPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
};

export default App;

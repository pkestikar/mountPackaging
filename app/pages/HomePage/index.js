import React from 'react';

const HomePage = (props) => {
    return (
        <div className="mp--homepage-container">
            <div className="mp--introduction-container">
                <div className={'background-curve'}></div>
                <div className="mp--introduction-container--first-section">
                        <div className="introduction-text">
                            <span className="we-design">WE DESIGN.</span>
                            <span className="we-deliver">WE DELIVER.</span>
                        </div>
                        <div className="introduction-description">
                            <span className={'description-text'}>Tailored to the customer requirements, we design and deliver top-notch packaging machinery.</span>
                        </div>
                </div>
            </div>
        </div>
    )
};

export default HomePage;

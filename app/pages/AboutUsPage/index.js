import React from 'react';

const AboutUsPage = (props) => {
    console.log('in the about us page component');
    return (
        <div className="mp--about-us-page-container">
            <div style={{ height: '300px', width: '300px', textAlign: 'center' }}>
                Hello this is the about us page
            </div>
        </div>
    )
};

export default AboutUsPage;

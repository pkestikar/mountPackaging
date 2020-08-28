import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const AboutUsPage = (props) => {
    return (
        <Container className="mp--about-us-page-container">
            <Grid container className={'mp--page-title'}>
                <Grid item xs={12}>
                    <h1>About Us</h1>
                </Grid>
            </Grid>
            <Grid container className="director-info-container">
                <Grid item xs={12} md={12} lg={4}>
                    <img src="/images/about-us/director.png" alt="Director" />
                    <div className="director-info">
                        Achyut Kestikar, Director (Operations),
                        Mount Packaging Machinery Pvt Ltd.
                    </div>
                </Grid>
                <Grid item className="director-description-wrapper" xs={12} md={12} lg={8}>
                    <p>
                        Mount Packaging Machinery Pvt. Ltd. was established in 2005, based in Pune, India.
                    </p>
                    <p>
                        Over decades, we have developed a dedicated team of qualified engineers and technicians, who design the machines on high-end softwares, manufacture parts on automated CNC machines, built and assembled to global manufacturing practices.
                    </p>
                    <p>
                        Mount Packaging Machinery Pvt. Ltd. has worked with numerous small and large enterprises worldwide with domain knowledge of forth generation packaging technology. The machines are tested on factory floor, before they are dispatched to customers. Whether small or large, highest level of  safety standards’ are followed to international norms.
                    </p>
                    <p>
                        Current leadership: <br />
                        Mr. Achyut Kestikar, Director (Operations)
                        Achyut is a competent engineer with 30+ years of experience in packaging industry with a wide industrial experience in different functions. He has a proven record of building and managing large complex projects from concept to completion phase.
                    </p>
                </Grid>
            </Grid>
        </Container>
    )
};

export default AboutUsPage;

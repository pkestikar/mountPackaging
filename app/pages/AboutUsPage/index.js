import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { MQMaxMedium, MQMinLarge } from "../../utilities/DeviceQueries";

const AboutUsPage = (props) => {

    const ProcessComposer = (props) => {
        return (
            <div className="process-info-wrapper">
                <h2>{props.processTitle}</h2>
                <p>
                    {props.processDescription}
                </p>
                {props.showMobileArrow &&
                <MQMaxMedium>
                    <div className="arrow-wrapper__mobile">
                        <img src="/images/about-us/down-arrow.png" alt="down-arrow" />
                    </div>
                </MQMaxMedium>
                }
            </div>
        )
    }

    return (
        <div className="mp--about-us-page-container">
            <Container disableGutters>
                <Grid container className={'mp--page-title'}>
                    <Grid item xs={12}>
                        <h1>About Us</h1>
                    </Grid>
                </Grid>
                <Grid container className="director-info-container">
                    <Grid item xs={12} md={12} lg={4} className={'director-image-wrapper'}>
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

            <div className="mp--our-process-container">
                <Container disabledGutters>
                    <Grid container justify={'center'} alignItems={'center'}>
                        <h2 className={'container-title'}>Our Process</h2>

                        <Grid container justify={'center'} className={'process-info-row'}>
                            <Grid item md={4}>
                                <ProcessComposer
                                    processTitle={'Study Requirements'}
                                    processDescription={'Once the customer is comfortable with the quotation, we revisit the customer requirements to prepare a list of high-level design goals and objectives.'}
                                    showMobileArrow
                                />
                            </Grid>
                            <MQMinLarge>
                                <Grid item md={4}>
                                    <div className="arrow-wrapper__desktop">
                                        <img src="/images/about-us/right-arrow.png" alt="right-arrow" />
                                    </div>
                                </Grid>
                            </MQMinLarge>
                            <Grid item md={4}>
                                <ProcessComposer
                                    processTitle={'Meeting with customer'}
                                    processDescription={'Meetups with our customer helps us present our initial design thoughts. If required, we go back to revise the requirements.'}
                                    showMobileArrow
                                />
                            </Grid>
                        </Grid>

                        <MQMinLarge>
                            <Grid container justify={'flex-end'} className={'process-info-row'}>
                                <Grid item md={4}>
                                    <div className="arrow-wrapper__desktop">
                                        <img src={'/images/about-us/down-arrow.png'} alt={'down-arrow'} />
                                    </div>
                                </Grid>
                            </Grid>
                        </MQMinLarge>

                        <Grid container justify={'center'} className={'process-info-row'}>
                            <Grid item md={4}>
                                <ProcessComposer
                                    processTitle={'Implement'}
                                    processDescription={'This is the phase where the design comes to life.'}
                                    showMobileArrow
                                />
                            </Grid>
                            <MQMinLarge>
                                <Grid item md={4}>
                                    <div className={'arrow-wrapper__desktop'}>
                                        <img src="/images/about-us/left-arrow.png" alt="left-arrow" />
                                    </div>
                                </Grid>
                            </MQMinLarge>
                            <Grid item md={4}>
                                <ProcessComposer
                                    processTitle={'Design'}
                                    processDescription={'Once the requirements are finalized, we get to the main step of designing.'}
                                    showMobileArrow
                                />
                            </Grid>
                        </Grid>

                        <MQMinLarge>
                            <Grid container justify={'flex-start'} className={'process-info-row'}>
                                <Grid item md={4}>
                                    <div className={'arrow-wrapper__desktop'}>
                                        <img src={'/images/about-us/down-arrow.png'} alt={'down-arrow'} />
                                    </div>
                                </Grid>
                            </Grid>
                        </MQMinLarge>

                        <Grid container className={'process-info-row'}>
                            <Grid item md={4} className={'process-info-item-wrapper'}>
                                <ProcessComposer
                                    processTitle={'Deliver'}
                                    processDescription={`After thorough testing, it's time to ship the customized packaging machine to your factory floor.`}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
};

export default AboutUsPage;

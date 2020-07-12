import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { IMAGE_PATH, NAV_ITEMS, CONTACT_EMAIL, COPYRIGHT_NOTICE_TEXT } from "../../config";
import {NavLink} from "react-router-dom";

const Footer = (props) => {
    return (
        <div className={'mp--footer'}>
            <Container className={'mp--footer--inner'} disableGutters>
                <Grid container>
                    <Grid item className={'footer-logo-wrapper'} xs={12} md={2}>
                        <img src={`${IMAGE_PATH}mount-logo-light.png`} alt="Logo"/>
                    </Grid>
                    <Grid item className={'footer-nav-wrapper'} xs={12} md={6}>
                        {
                            NAV_ITEMS.map(item => {
                                return (
                                    <NavLink to={`${item.link}`} activeClassName={'active'}>{item.title}</NavLink>
                                )
                            })
                        }
                    </Grid>
                    <Grid item className={'footer-contact-info'} xs={12} md={4}>
                        <h3>LET'S CONNECT</h3>
                        <div className="footer-address">
                            <p>
                                We are located at:<br />
                                Mahatma Jyotirao Phule Marg, <br />
                                Dhadge Industrial Estate, Nanded Phata, <br />
                                Sinhgad Road, <br />
                                Pune 411041, <br />
                                Maharashtra, India. <br />
                            </p>
                        </div>
                        <div className="footer-email">
                            <p>
                                Email: {CONTACT_EMAIL}
                            </p>
                        </div>
                    </Grid>
                </Grid>

                <div className="mp--copyright-notice">
                    <p>
                        {COPYRIGHT_NOTICE_TEXT}
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;

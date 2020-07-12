import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { IMAGE_PATH, NAV_ITEMS, CONTACT_EMAIL, COPYRIGHT_NOTICE_TEXT } from "../../config";
import {NavLink} from "react-router-dom";

const Footer = (props) => {
    return (
        <div className={'mp--footer'}>
            <Container disableGutters>
                <Grid container className={'mp--footer--inner'}>
                    <Grid item className={'footer-logo-wrapper'} xs={12} md={2}>
                        <div>
                            <img src={`${IMAGE_PATH}mount-logo-light.png`} alt="Logo"/>
                        </div>
                    </Grid>
                    <Grid item className={'footer-nav-wrapper'} xs={12} md={6}>
                        {
                            NAV_ITEMS.map((item, key) => {
                                return (
                                    <NavLink key={`nav-item-${key}`} to={`${item.link}`} activeClassName={'active'}>{item.title}</NavLink>
                                )
                            })
                        }
                    </Grid>
                    <Grid item className={'footer-contact-info'} xs={12} md={4}>
                        <div className={'footer-connect-heading'}>LET'S CONNECT!</div>
                        <div className="footer-address">
                            We are located at:<br />
                            Mahatma Jyotirao Phule Marg, <br />
                            Dhadge Industrial Estate, Nanded Phata, <br />
                            Sinhgad Road, <br />
                            Pune 411041, <br />
                            Maharashtra, India. <br />
                        </div>
                        <div className="footer-email">
                            Email: {CONTACT_EMAIL}
                        </div>
                    </Grid>
                </Grid>

                <div className="mp--copyright-notice">
                    {COPYRIGHT_NOTICE_TEXT}
                </div>
            </Container>
        </div>
    );
};

export default Footer;

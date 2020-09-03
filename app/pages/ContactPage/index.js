import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PageHeader from "Components/PageHeader";
import { CONTACT_EMAIL } from "Config";
import MoreInfoComposer from "Components/MoreInfoComposer";
import { useHistory } from 'react-router-dom';

const ContactPage = (props) => {
    let history = useHistory();

    const handleQuotationClick = () => {
        history.push('/contact/');
    };

    return (
        <div className="mp--contact-page-container">
            <Container maxWidth={'lg'}>
                <PageHeader title={'Contact'}/>

                <Grid container justify={'center'} alignItems={'center'}>
                    <Grid item lg={4} className={'company-address-wrapper'}>
                        <span>We are located at:</span>
                        <p>
                            Mahatma Jyotirao Phule Marg, <br/>
                            Dhadge Industrial Estate, Nanded Phata, <br/>
                            Sinhgad Road, <br/>
                            Pune 411041, <br/>
                            Maharashtra, India. <br/>
                        </p>
                        <span className={'email'}>Email: <a href={`mailto: ${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></span>
                    </Grid>
                </Grid>

                <MoreInfoComposer
                    title={'Ready with requirements?'}
                    ctaText={'Get Quotation'}
                    handleClick={handleQuotationClick}
                />
            </Container>
        </div>
    )
};

export default ContactPage;

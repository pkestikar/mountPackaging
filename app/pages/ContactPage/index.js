import React, { useState } from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PageHeader from "Components/PageHeader";
import { CONTACT_EMAIL } from "Config";
import MoreInfoComposer from "Components/MoreInfoComposer";
import { useHistory } from 'react-router-dom';
import InputComposer from "Components/InputComposer";
import Button from 'Components/Button';

const ContactPage = (props) => {
    let history = useHistory();

    const [contactFormData, setContactFormData] = useState({
        name: {
            value: '',
            hasError: false
        },
        company: {
            value: '',
            hasError: false
        },
        email: {
            value: '',
            hasError: false
        },
        message: {
            value: '',
            hasError: false
        }
    });

    const handleQuotationClick = () => {
        history.push('/contact/');
    };

    const handleInputChange = e => {
        let name = e.target.name;
        let newData = Object.assign({}, contactFormData);
        newData[name].value = e.target.value;
        setContactFormData(Object.assign({}, contactFormData, newData));
    }

    const handleSendMessageClick = () => {
        console.log('need to send this payload');
        console.log(contactFormData);
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

                <h2 className={'contact-form-title'}>Let's Connect!</h2>

                <Grid container className={'contact-form-container'} justify={'center'} alignItems={'center'}>
                    <Grid item xs={12} sm={10} md={8}>
                        <form className={'mp--form-theme'}>
                            <InputComposer label={'NAME'}>
                                <input type="text" name={'name'} id={'name'} value={contactFormData.name.value} onChange={e => handleInputChange(e)}/>
                            </InputComposer>
                            <InputComposer label={'COMPANY'}>
                                <input type="text" name={'company'} id={'company'} value={contactFormData.company.value} onChange={e => handleInputChange(e)}/>
                            </InputComposer>
                            <InputComposer label={'EMAIL'}>
                                <input type="email" name={'email'} id={'email'} value={contactFormData.email.value} onChange={e => handleInputChange(e)}/>
                            </InputComposer>
                            <InputComposer label={'MESSAGE'}>
                                <textarea rows={'6'} name={'message'} id={'message'} value={contactFormData.message.value} onChange={e => handleInputChange(e)}/>
                            </InputComposer>
                        </form>
                    </Grid>
                    <Grid item xs={12} className={'send-message-button-wrapper'}>
                        <Button onClick={handleSendMessageClick}>Send Message</Button>
                    </Grid>
                </Grid>
            </Container>
            <MoreInfoComposer
                title={'Ready with requirements?'}
                ctaText={'Get Quotation'}
                handleClick={handleQuotationClick}
                borderTop
            />
        </div>
    )
};

export default ContactPage;

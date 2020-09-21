import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PageHeader from "Components/PageHeader";
import { SERVICES_PAGE_SERVICE_LIST, IMAGE_PATH } from '../../config';
import MoreInfoComposer from "Components/MoreInfoComposer";

const ServiceGridItemComposer = (props) => {
    return (
        <Grid item sm={12} md={6} className={'service-detail-item'}>
            <div className="wrapper">
                <img src={`${IMAGE_PATH}services/${props.image}`} alt={props.title}/>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </Grid>
    )
};

const ServicesPage = (props) => {
    const handleQuotationClick = () => {
        console.log('quotation click');
    };

    return (
        <div className="mp--services-page">
            <Container maxWidth={'lg'}>
                <PageHeader title={'Services'} />

                <Grid container>
                    <Grid item sm={12} className={'services-page-description'}>
                        <p>We value our customers to the point providing the after sale support both during and post warranty. We adhere to a comprehensive approach while creating solutions which is to create value throughout the entire cycle.</p>
                    </Grid>
                </Grid>

                <h2 style={{ textAlign: 'center' }}>Our services include</h2>

                <Grid container className={'services-details-wrapper'} justify={'center'}>
                    <Grid item sm={12} md={10}>
                        <Grid container justify={'center'} spacing={3}>
                            {SERVICES_PAGE_SERVICE_LIST.map((service, key) => {
                                return (
                                    <ServiceGridItemComposer { ...service } key={key}/>
                                )
                            })
                            }
                        </Grid>
                    </Grid>
                </Grid>

                <MoreInfoComposer
                    title={'Ready with requirements?'}
                    ctaText={'Get Quotation'}
                    handleClick={handleQuotationClick}
                    borderTop
                />
            </Container>
        </div>
    )
};

export default ServicesPage;

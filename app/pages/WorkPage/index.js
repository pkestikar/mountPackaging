import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PageHeader from "Components/PageHeader";
import Icon from 'Components/Icon';
import { WORK_PAGE_INDIVIDUAL_UNIT_NAMES, WORK_PAGE_MACHINE_SHOWCASE } from "../../config/index";
import MoreInfoComposer from "Components/MoreInfoComposer";

const UnitNameComposer = (props) => {
    if (!props.name) return null;

    return (
        <div className="individual-unit-name">
            <Icon sizeInPixels={'12'} icon={'hexagon'} />
            <span className={'name'}>{props.name}</span>
        </div>
    )
};

const WorkPage = (props) => {

    const handleQuotationClick = () => {
        console.log('quotation click');
    };

    return (
        <div className="mp--work-page">
            <Container maxWidth={'lg'}>
                <PageHeader title={'Work'} />

                <Grid container>
                    <Grid item sm={12} className={'work-page-description'}>
                        <p>Mount Packaging Machinery provides solutions for all types of packaging & filling machines</p>
                    </Grid>
                </Grid>

                <h2 style={{ textAlign: 'center' }}>Individual Units</h2>

                <Grid container>
                    <Grid item sm={12} className={'individual-units-list'}>
                        {WORK_PAGE_INDIVIDUAL_UNIT_NAMES.map((unit, key) => {
                            return (
                                <UnitNameComposer name={unit} key={`unit-${key}`}/>
                            )
                        })
                        }
                    </Grid>
                </Grid>
            </Container>

            <div className="mp--work-samples-container">
                <Container maxWidth={'lg'}>
                    <h2>Some of our machines</h2>

                    <Grid container className={'work-samples'} justify={'center'}>
                        {WORK_PAGE_MACHINE_SHOWCASE.map((machine, key) => {
                            return (
                                <Grid item className={'work-sample'} sm={12} md={6} lg={4} key={`sample-${key}`}>
                                    <img className={'image'} src={`/images/work/${machine.image}`} alt={machine.title} />
                                    <div className={'title'}>{machine.title}</div>
                                </Grid>
                            )
                        })
                        }
                    </Grid>
                </Container>
            </div>

            <MoreInfoComposer
                title={'Ready with requirements?'}
                ctaText={'Get Quotation'}
                handleClick={handleQuotationClick}
                borderTop
            />
        </div>
    )
};

export default WorkPage;

import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PageHeader from "Components/PageHeader";
import Icon from 'Components/Icon';

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

    //TODO: get this data from an API call whenever that is ready
    const individualUnits = [
        'Bag in box filling machines',
        'Box case erectors and sealers',
        'Cap elevators',
        'Capping machines',
        'Container and cap unscramblers',
        'De-Palletiser',
        'Gear pump filling machines',
        'Gravimetric filling machine',
        'Infeed Table',
        'Inline check-weighing',
        'Labelling system(s)',
        'Lidder (pick and place or sweep on)',
        'Misprint rejection system for cans and boxes',
        'Palletiser',
        'Pantograph filling machine',
        'Peristaltic pump filling machines',
        'Printing and ink jet coding',
        'Roller conveyor systems (automated or gravity fed)',
        'Volumetric pump filling machines',
        'Weigh fill machines'
    ];

    return (
        <div className="mp--work-page">
            <Container maxWidth={'lg'}>
                <PageHeader title={'Work'} />

                <Grid container>
                    <Grid item sm={12} className={'work-page-description'}>
                        <p>Mount Packaging Machinery provides solutions for all the packaging & filling machiness</p>
                    </Grid>
                </Grid>

                <h2 style={{ textAlign: 'center' }}>Individual Units</h2>

                <Grid container>
                    <Grid item sm={12} className={'individual-units-list'}>
                        {individualUnits.map(unit => {
                            return (
                                <UnitNameComposer name={unit} />
                            )
                        })
                        }
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
};

export default WorkPage;

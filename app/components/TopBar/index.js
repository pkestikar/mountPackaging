import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import Button from '../Button';
import { push as Menu } from 'react-burger-menu';
import { MQMaxMedium, MQMinLarge } from "../../utilities/DeviceQueries";
import { IMAGE_PATH, NAV_ITEMS } from "../../config";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const TopBar = (props) => {
    let history = useHistory();

    window.addEventListener('scroll', () => {
        if (window.scrollY !== 0) {
            document.getElementById('mp--topbar').classList.add('scroll');
        } else {
            document.getElementById('mp--topbar').classList.remove('scroll');
        }
    });

    const sideMenuStyles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            right: '36px',
            top: '30px'
        },
        bmBurgerBars: {
            background: 'white',
            height: '11%'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%',
        },
        bmMenu: {
            fontSize: '1.15em',
            overflow: 'hidden',
            paddingTop: '4rem'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            padding: '0.8em'
        },
        bmItem: {
            display: 'flex',
            width: '100%'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    };

    return (
        //TODO: weird horizontal scroll problem needs to be fixed
        <div className={`mp--topbar`} id={'mp--topbar'}>
            <Container className="mp--topbar--inner" disableGutters>
                <MQMaxMedium>
                    <Menu styles={sideMenuStyles} right pageWrapId={'page-wrap'} outerContainerId={'outer-container'} id={'side-menu'} width={'230px'}>
                        {
                            NAV_ITEMS.map((item, key) => {
                                return (
                                    <NavLink key={`nav-item-${key}`} to={`${item.link}`} activeClassName={'active'}>{item.title}</NavLink>
                                )
                            })
                        }
                        <div className="">
                            <Button palette={'secondary'}>Get Quotation</Button>
                        </div>
                    </Menu>
                </MQMaxMedium>

                <Grid container className={'topbar-grid-container'}>
                    <Grid item className={'logo-container'} xs={4} md={2}>
                        <img src={`${IMAGE_PATH}logo.png`} alt="Logo" onClick={() => history.push('/')}/>
                    </Grid>

                    <MQMinLarge>
                        <Grid item className={'topbar-elements-container'} md={7}>
                            {
                                NAV_ITEMS.map((item, key) => {
                                    return (
                                        <NavLink key={`nav-item-${key}`} to={`${item.link}`} activeClassName={'active'}>{item.title}</NavLink>
                                    )
                                })
                            }
                        </Grid>

                        <Grid item className="get-quote-wrapper" md={3}>
                            <Button palette={'secondary'}>Get Quotation</Button>
                        </Grid>
                    </MQMinLarge>
                </Grid>
            </Container>
        </div>
    )
};

export default TopBar;


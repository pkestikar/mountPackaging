import React from 'react';
import { NavLink } from "react-router-dom";
import Button from '../Button';
import { push as Menu } from 'react-burger-menu';
import { MQMaxMedium, MQMinLarge } from "../../utilities/DeviceQueries";

const TopBar = (props) => {
    const sideMenuStyles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            right: '36px',
            top: '36px'
        },
        bmBurgerBars: {
            background: 'white'
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
            width: '230px'
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
        <div className="mp--topbar">
            <div className="mp--topbar--inner">
                <MQMaxMedium>
                    <Menu styles={sideMenuStyles} right pageWrapId={'page-wrap'} outerContainerId={'outer-container'} id={'side-menu'}>
                        <NavLink to={'/about-us/'} activeClassName={'active'}>About Us</NavLink>
                        <NavLink to={'/work/'} activeClassName={'active'}>Work</NavLink>
                        <NavLink to={'/services/'} activeClassName={'active'}>Services</NavLink>
                        <NavLink to={'/contact/'} activeClassName={'active'}>Contact</NavLink>
                        <div className="">
                            <Button palette={'secondary'}>Get Quotation</Button>
                        </div>
                    </Menu>
                </MQMaxMedium>

                <div className="logo-container">
                    <img src="../../../images/logo.png" alt="Logo"/>
                </div>

                <MQMinLarge>
                    <div className="topbar-elements-container">
                        <NavLink to={'/about-us/'} activeClassName={'active'}>About Us</NavLink>
                        <NavLink to={'/work/'} activeClassName={'active'}>Work</NavLink>
                        <NavLink to={'/services/'} activeClassName={'active'}>Services</NavLink>
                        <NavLink to={'/contact/'} activeClassName={'active'}>Contact</NavLink>
                    </div>
                    <div className="get-quote-wrapper">
                        <Button palette={'secondary'}>Get Quotation</Button>
                    </div>
                </MQMinLarge>
            </div>
        </div>
    )
};

export default TopBar;


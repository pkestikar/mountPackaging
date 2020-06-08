import React from 'react';
import { NavLink } from "react-router-dom";
import Button from '../Button';

import Icon from 'Components/Icon';

const TopBar = (props) => {
    return (
        <div className="mp--topbar">
            <div className="mp--topbar--inner">
                <div className="logo-container">
                    <img src="../../../images/logo.png" alt="Logo"/>
                </div>
                <div className="topbar-elements-container">
                    <NavLink to={'/about-us/'} activeClassName={'active'}>About Us</NavLink>
                    <NavLink to={'/work/'} activeClassName={'active'}>Work</NavLink>
                    <NavLink to={'/services/'} activeClassName={'active'}>Services</NavLink>
                    <NavLink to={'/contact/'} activeClassName={'active'}>Contact</NavLink>
                    <NavLink to={'/contact/'} activeClassName={'active'}><Icon src={'../../../images/svg/burger-menu-icon.svg'}/></NavLink>
                </div>
                <div className="get-quote-wrapper">
                    <Button palette={'secondary'}>Get Quotation</Button>
                </div>
            </div>
        </div>
    )
};

export default TopBar;


import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import MenuButton from '../SideDrawer/MenuButton/MenuButton';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <MenuButton clicked={props.opened} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);


export default toolbar;

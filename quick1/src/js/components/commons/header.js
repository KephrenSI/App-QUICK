/* hepl-dw/vitfoud-client
 *
 * /src/js/components/commons/header.js - Header component
 *
 * coded by leny@flatLand!
 * started at 22/04/2017
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export default class Header extends Component {
    handleBackClick( oEvent ) {
        oEvent.preventDefault();

        this.props.onBack();
    }

    renderNav() {
        let $prevLink, $aboutLink;

        if ( this.props.backLink ) {
            $prevLink = (
                <Link to={ this.props.backLink }>{ "" }</Link>
            );
        }

        $aboutLink = (
            <Link to="/about">{ "" }</Link>
        );

        return (
            <nav className={ "header__nav" }>
                <div className={ "header__prev" }>{ $prevLink }</div>
                <div className={ "header__about" }>{ $aboutLink }</div>
            </nav>
        );
    }

    render() {
        console.log( "Header.render( props: )", this.props );

        return (
            <header className={ "header" }>
                <h1 className={ "header__title1" }>
                    <img className={ "header__logo" } src={"./assets/img/logo.png"}/>
                </h1>
                <h2 className={ "header__title2" }>{ this.props.pageTitle }</h2>
                { this.renderNav() }
            </header>
        );
    }
}

Header.propTypes = {
    "pageTitle": PropTypes.string.isRequired,
    "backLink": PropTypes.string,
};

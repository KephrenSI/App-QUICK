/* hepl-dw/vitfoud-client
 *
 * /src/js/containers/pages/about.js - Container for about page
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React from "react";
import { Component as Container } from "reflux";

import Header from "../../components/commons/header";

import AboutProject from "../../components/about/project";
import AboutMe from "../../components/about/me";

export default class AboutPageContainer extends Container {
    render() {
        console.log( "AboutPageContainer.render( state: )", this.state );

        return (
            <div className={ "page" }>
                <Header pageTitle={ "À propos…" } backLink="/" />
                <img className={ "page__slogan" } src={"./assets/img/quick_2015.png"}/>
                <main className={ "page__content" }>
                    <AboutProject />
                    <AboutMe />
                    <div className={ "page__infos" }> { "© QUICK | Képhren SIMONIS | 2016-2017" } </div>
                </main>
            </div>
        );
    }
}

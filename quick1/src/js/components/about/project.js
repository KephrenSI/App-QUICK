/* hepl-dw/vitfoud-client
 *
 * /src/js/components/about/project.js - About Component : about project
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";

export default class AboutProject extends Component {
    render() {
        return (
            <div className={ "page__projet" }>
            	<h2 className={ "page__title2" }>À propos du projet</h2>
            	<p className={ "page__para" }>{ "Voici l'app de Localisation QUICK," }</p>
            	<p className={ "page__para" }>{ "Dans le cadre du cours de Design Web avec monsieur Delnatte, nous avons réalisé les Wireframes, design et intégration du design pour une application mobile ( IOS ou Andrïd ) qui a pour but de localiser les restaurant Quick à proximité." }</p>
            	<p className={ "page__para" }>{ "C'est monsieur Delnatte qui à coder l'application avec les élèves de 3ième. L'application est codée en React et pour faciliter ma partie de l'intégration j'ai implémenté Gulp à mon workflow avec diverses fonctions comme browser-sync. De plus j'ai utiliser BEM et ITCC pour avoir un code plus clair." }</p>
            </div>
        );
    }
}

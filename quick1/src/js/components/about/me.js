/* hepl-dw/vitfoud-client
 *
 * /src/js/components/about/me.js - About Component : about me
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";

export default class AboutMe extends Component {
    render() {
        return (
            <div className={ "page__me" }>
            	<h2 className={ "page__title2" }>À propos de moi</h2>
            	<p className={ "page__para" }>{ "Je m'appelle Képhren SIMONIS et je fais actuellement ma 2ème année à la Haute École de la Province de Liège (Seraing), une école spécialisée dans le web. Depuis longtemps, je suis un amateur de design sous toutes ses formes. Je suis absolument passionné par le montage vidéo et j'adore concevoir des interfaces claires et intuitives. Étant un perfectionniste très curieux toujours en quête de nouveautés, j'essaye constamment de rester ouvert et de me tenir informé, en ce qui concerne l'Image et le Web. À cet égard, l'évolution du Web m'apporte toujours tout ce dont j'ai besoin pour satisfaire ma curiosité. J'aime travailler sur des projets ambitieux avec des personnes passionnées et je suis totalement ouvert à toute offre en matière de nouveaux projets." }</p>
            	<p className={ "page__para" }>{ "N'hésitez pas à me contacter, je recherche actuellement un stage de 3 mois, de février à avril 2018." }</p>
            </div>
        );
    }
}

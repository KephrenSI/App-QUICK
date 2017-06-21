/* help-dw/vitfoud-client
 *
 * /src/js/components/details/hours.js - Details Components : Opening hours
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import { hoursAsString } from "../../utils/misc";

const DAY_NAMES = [ "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche" ];

export default class PlaceHours extends Component {
    renderOpenState() {
        if ( this.props.open ) {
            return ( <p className={ "open ouverture" }>{ "Cet endroit est actuellement ouvert" }</p> );
        }

        return ( <p className={ "close ouverture" }>{ "Cet endroit est actuellement fermé." }</p> );
    }

    renderDay( [ iOpenHour, iCloseHour ], iDayIndex ) {
        return (
            <li key={ iDayIndex } className={ "listHours__elt" }>
                <strong className={ "listHours__day" }>{ `${ DAY_NAMES[ iDayIndex ] } : ` }</strong>
                <span className={ "listHours__hour" }>{ `${ hoursAsString( iOpenHour ) } - ${ hoursAsString( iCloseHour ) }` }</span>
            </li>
        );
    }

    render() {
        console.log( "PlaceHours.render( props: )", this.props );

        let aHours = Array.from( this.props.hours );

        aHours.push( aHours.shift() ); // Fix "weeks stars sunday".

        return (
            <div>
                { this.renderOpenState() }
                <ul className={ "listHours" }>
                    { aHours.map( this.renderDay.bind( this ) ) }
                </ul>
            </div>
        );
    }
}

PlaceHours.propTypes = {
    "hours": PropTypes.arrayOf( PropTypes.arrayOf( PropTypes.number ) ),
    "open": PropTypes.bool,
};

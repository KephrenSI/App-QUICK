/* hepl-dw/vitfoud-client
 *
 * /src/js/components/details/map.js - Details Component : map
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PlaceMap extends Component {
    render() {
        let sURL = `https://maps.googleapis.com/maps/api/staticmap?center=${ this.props.position.latitude },${ this.props.position.longitude }&zoom=14&size=245x245&maptype=roadmap&markers=color:red|label:Q|${ this.props.position.latitude },${ this.props.position.longitude }&key=AIzaSyDLQApuIxpySrcLirqnDSUqOgZlhRFghaQ`;

        return (
            <div className={ "map" }>
                <img src={ sURL } />
            </div>
        );
    }
}

PlaceMap.propTypes = {
    "position": PropTypes.shape( {
        "latitude": PropTypes.number,
        "longitude": PropTypes.number,
    } ),
};

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const Location = ({city}) => (  

    // Desestructuracion
        <div className="locationCont">
            <h1>{city}</h1>
        </div>
);
/**
 * ptsr-> PropTypes.string.isRequired
 */
Location.propTypes = {
    city: PropTypes.string.isRequired,
}
export default Location;
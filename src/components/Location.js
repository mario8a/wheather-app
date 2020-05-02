import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => (  

    // Desestructuracion
        <div>
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
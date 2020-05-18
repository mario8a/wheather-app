import React, { Component } from 'react';
import  {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { getForecastDataFromCities } from '../reducers/cities';

import ForecastExtended from '../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        const {city, forecastData} = this.props;
        return (
            city && 
            <ForecastExtended city={city} forecastData = {forecastData} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};
const mapStateToProps = state => ({city: state.city , forecastData: getForecastDataFromCities(state.cities, state.city) });

export default connect(mapStateToProps, null )(ForecastExtendedContainer);
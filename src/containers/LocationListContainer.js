import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import LocationList from '../components/LocationList';

//modules
import {setSelectedCity} from '../actions';

class LocationListContainer extends Component {

    handleSelectedLocation = city => {

    
        this.props.setCity(city);
      }

    render() {
        return (
            <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectedLocation}/>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

// const mapDispatchToPropsActions = () => {};
//connect recibe dos funiones. la primera no se, la segunda permite trabajar con las actions
// a su vez recibe otra funcion, el cual es el componente y se coloca al final del codigo
// const componentConnected = connect(null, mapDispatchToPropsActions)


const mapDispatchToPropsActions = dispatch => (
    {
    setCity: value => dispatch(setSelectedCity(value))
    }
  );
  

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);
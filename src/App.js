import React, {Component} from 'react';
//redux connect- va conectar react con redux y asi aplicar las nuevas funcionalidades
import {connect} from 'react-redux';

import './App.css';
import {Grid, Col, Row} from 'react-flexbox-grid';

import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

//MaterialUI
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

//modules
import {setCity} from './actions';

const cities  = [
  'Ciudad de Mexico,mx',
  'Madrid,es',
  'Bogota,col',
  'Lima,pe',
  'Buenos Aires,ar',
  'Washington,us'
];


class App extends Component {

  constructor() {
    super()
    
    this.state = {
      city: null
    }
  }

  handleSelectedLocation = city => {
    this.setState({city});
    console.log(`handleSelectedLocation ${city}` );

    this.props.setCity(city);
  }
  render() {
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography color='initial' variant='h5'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
             <div className="details">
                {
                  city &&
                  <ForecastExtended city={city}/> 
                }
             </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
  
}

// const mapDispatchToPropsActions = () => {};
//connect recibe dos funiones. la primera no se, la segunda permite trabajar con las actions
// a su vez recibe otra funcion, el cual es el componente y se coloca al final del codigo
// const componentConnected = connect(null, mapDispatchToPropsActions)


const mapDispatchToPropsActions = dispatch => (
  {
  setCity: value => dispatch(setCity(value))
  }
);

const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;
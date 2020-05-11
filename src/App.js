import React, {Component} from 'react';
import './App.css';
import {Grid, Col, Row} from 'react-flexbox-grid';
import LocationList from './components/LocationList';

//MaterialUI
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const cities  = [
  'Ciudad de Mexico,mx',
  'Madrid,es',
  'Bogota,col',
  'Lima,pe',
  'Buenos Aires,ar',
  'Washington,us'
];

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}` );
  }
  render() {
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
             <div className="details">  </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
  
}

export default App;

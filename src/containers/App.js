import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Intro from '../components/Intro/Intro';
import BankForm from '../components/BankForm/BankForm';
import Particles from 'react-particles-js';
//import GoogleMapsClient from '@google/maps'




const particleOptions = { 
 particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1300
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state= {
      route : 'user'
    }
  }

  

  onRouteChange = (route) => {
    
    this.setState({
      route : route
    })

  }

  

  /*onButtonSubmit = () => {
   
    googleMapsClient.geocode({
     address: '9 Seminary Avenue, Binghamton, New York 13905'
      }, function(err, response) {
      if(!err) {
       getCoordinates(response);
    } else {
      console.log(err);
    }

  });

    const getCoordinates = (response) => {
      this.setState({
        lat : response.json.results[0].geometry.location.lat,
        lng : response.json.results[0].geometry.location.lng,

      })
   }
    
  }*/
    
  render() {
    return (
      <div className="App">
       <Particles className="particles" params={particleOptions} />
       <Navigation onRouteChange={this.onRouteChange} Route={this.state.route} />
       <Intro Route={this.state.route} />
       <BankForm Route={this.state.route} onButtonSubmit={this.onButtonSubmit} />
      </div>
    );
  }
}

export default App;




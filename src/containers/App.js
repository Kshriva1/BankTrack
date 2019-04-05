import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Intro from '../components/Intro/Intro';
import BankForm from '../components/BankForm/BankForm';


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
  render() {
    return (
      <div className="App">
       <Navigation onRouteChange={this.onRouteChange} Route={this.state.route} />
       {this.state.route === 'user' ?
       <div>     
       <Intro />
       <BankForm />
       {/*<MapDisplay />*/}
       </div> 
         :
        <div>
        <Intro />
        </div>
     }
      
      </div>
    );
  }
}

export default App;




import React from 'react';
import './BankForm.css';
import { Map,GoogleApiWrapper,InfoWindow,Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class BankForm extends React.Component {

  constructor() {
    super();
    this.state= {
      showingInfoWindow: false,  
      activeMarker: {},          
      selectedPlace: {}
    }
  }

   onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
  });

    onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
     }
    };


  
  render() {
  if(this.props.Route === 'user') {
  return(
    <div>
<div className='shadow-5 br3 pa4 form center w-60'>

<div className='center'><b className='ph2 dark-green pr1 ma2'>Bank Name</b><input className='f4 pa2 w-25 pv2 mv1 ml2' input='text' /></div>
<div className='pv2'><b className='ph2 dark-green pr1 ma2 '>Bank Branch</b><input className='f4 pa2 w-25 pv2 mv2' input='text' /></div>
<div><button className='pa3 f4 w-30 link grow ph3 pv2 white dib bg-green' onClick={this.props.onButtonSubmit}>Find Location</button></div>

</div>
 { (this.props.lat && this.props.lng) ?
 <div>
 {console.log(this.props.lat,this.props.lng)};
  <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: this.props.lat , lng: this.props.lng }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Binghamton University'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    
 </div>  :

  <div><p className="f3">{'No Bank Selected'}</p></div>

  }

</div>  
   
 )
} else {

  return (

       <div className='shadow-5 br3 pa4 form center w-60 mb3'>

           <div className='center'><b className='ph2 dark-green pr1 ma2'>Bank Name</b><input className='f4 pa2 w-25 pv2 mv1 ml3' input='text' /></div>
           <div className='pv2'><b className='ph2 dark-green pr1 ma2 '>Bank Address</b><input className='f4 pa2 w-25 pv2 mt3' input='text' /></div>
           <div className='center pv2'><b className='ph2 dark-green pr1 ma2'>Bank Branch</b><input className='f4 pa2 w-25 pv2 mt3 ml2' input='text' /></div>
           <div className='center pv2'><b className='ph2 dark-green pr1'>Opening hours</b><input className='f4 pa2 w-25 pv2 mt3 ml2' input='text' /></div>
           <div className='center pv2'><b className='ph2 dark-green pr1'>Phone Number</b><input className='f4 pa2 w-25 pv2 mt3 ml2' input='tel' /></div>
           <div className='center pv2'><b className='ph2 dark-green pr1 ml2'>Bank Code</b><input className='f4 pa2 w-25 pv2 mt3 ml4' input='number' /></div>
           <div><button className='pa3 f4 w-30 link grow ph3 pv2 white dib bg-green mt3'>Submit</button></div>

       </div>
       
    )
}

}

}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBUyYM0IbNfZTWKhz9VPqdsAegsJq00Z8E'
})(BankForm);
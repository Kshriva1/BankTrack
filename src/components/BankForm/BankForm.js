import React from 'react';
import './BankForm.css';
import GoogleMapsClient from '@google/maps'
import { Map,GoogleApiWrapper,InfoWindow,Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

let googleMapsClient = GoogleMapsClient.createClient({
  key: 'AIzaSyBUyYM0IbNfZTWKhz9VPqdsAegsJq00Z8E'
});

class BankForm extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      showingInfoWindow: false,  
      activeMarker: {},          
      selectedPlace: {},
      bankNameChange: '',
      bankBranchChange: '',
      registerBankNameChange: '',
      registerBankAddressChange: '',
      registerBankBranchChange: '',
      registerOpeningHoursChange: '',
      registerPhoneNumberChange: '',
      registerBankCodeChange: '',
      message: "Enter the information to register the Bank",    
      lat : false,
      lng : false
    }
  }

  componentWillReceiveProps() {

    this.setState({
      showingInfoWindow: false,  
      activeMarker: {},
      lat: false,
      lng: false,
      bankNameChange: '',
      bankBranchChange: '',
      registerBankNameChange: '',
      registerBankAddressChange: '',
      registerBankBranchChange: '',
      registerOpeningHoursChange: '',
      registerPhoneNumberChange: '',
      registerBankCodeChange: '',
      message: "Enter the information to register the Bank"
    })
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


    onBankNameChange = (event) => {

      this.setState({
        bankNameChange : event.target.value
      })
    }

     onBankBranchChange = (event) => {

      this.setState({
        bankBranchChange : event.target.value
      })
    }

    onRegisterBankNameChange = (event) => {

      this.setState({
        registerBankNameChange : event.target.value
      })
    }

    onRegisterBankAddressChange = (event) => {

      this.setState({
        registerBankAddressChange: event.target.value
      })
    }

    onRegisterBankBranchChange = (event) => {

      this.setState({
        registerBankBranchChange : event.target.value
      })
    }

    onRegisterPhoneNumberChange = (event) => {

      this.setState({
        registerPhoneNumberChange: event.target.value
      })
    }

    onRegisterOpeningHoursChange = (event) => {

      this.setState({
        registerOpeningHoursChange : event.target.value
      })
    }

    onRegisterBankCodeChange = (event) => {

      this.setState({
        registerBankCodeChange : event.target.value
      })
    }

    onButtonSubmit = () => {
     fetch('http://localhost:3001/map_display', {
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        bank_name: this.state.bankNameChange,
        bank_branch: this.state.bankBranchChange
      })
     })
     .then(response => response.json())
     .then(data => {
           if(data.bank_address) {
     
    googleMapsClient.geocode({
     address: data.bank_address
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
        lng : response.json.results[0].geometry.location.lng   
      })
   }

 }
 else {
  console.log("data not obtained")
 }
})
  .catch(err => console.log(err))   
  
  }


  onRegisterSubmit = () => {
    fetch('http://localhost:3001/bank_register', {
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        bank_name: this.state.registerBankNameChange,
        bank_address: this.state.registerBankAddressChange,
        bank_branch: this.state.registerBankBranchChange,
        opening_hours: this.state.registerOpeningHoursChange,
        phone_number: this.state.registerPhoneNumberChange,
        bank_code: this.state.registerBankCodeChange
      })
     })
     .then(response => response.json())
     .then(bankData => {
      if(bankData) {
             
          this.setState({message: "The Bank has been successfully registered"})   
      } else {

        this.setState({message: "Cannot register the bank. Check your information."})
      }

  })
     .catch(err => console.log(err))
 }


  render() {
  console.log(this.state.lat, this.state.lng);  
  if(this.props.Route === 'user') {
  return(
    <div>
<div className='shadow-5 br3 pa4 form center w-60'>

<div className='center'><b className='ph2 dark-green pr1 ma2'>Bank Name</b><input className='f4 pa2 w-25 pv2 mv1 ml2' value={this.state.bankNameChange} onChange={this.onBankNameChange} input='text' /></div>
<div className='pv2'><b className='ph2 dark-green pr1 ma2 '>Bank Branch</b><input className='f4 pa2 w-25 pv2 mv2' value={this.state.bankBranchChange} onChange={this.onBankBranchChange} input='text' /></div>
<div><button className='pa3 f4 w-30 link grow ph3 pv2 white dib bg-green' onClick={this.onButtonSubmit}>Find Location</button></div>

</div>
 { (this.state.lat && this.state.lng) ?
 <div>
 <div className="mt3">
  <Map 
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: this.state.lat , lng: this.state.lng }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={this.state.bankNameChange}
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
    </div>
 </div>  :

  <div><p className="f3">{'No Bank Selected'}</p></div>

  }

  <footer>©2019 Banktrack</footer>

</div>  
   
 )
} else {

  return (
       <div>
       <div className='shadow-5 br3 pa4 form center w-60 mb3'>

           <div className='center'><b className='ph2 dark-green pr1 ma2'>Bank Name</b><input className='f4 pa2 w-25 pv2 mv1 ml3' input='text' value={this.state.registerBankNameChange} onChange={this.onRegisterBankNameChange} /></div>
           <div className='pv2'><b className='ph2 dark-green pr1 ma2 '>Bank Address</b><input className='f4 pa2 w-25 pv2 mt3' input='text' value={this.state.registerBankAddressChange} onChange={this.onRegisterBankAddressChange}/></div>
           <div className='center pv2'><b className='ph2 dark-green pr1 ma2'>Bank Branch</b><input className='f4 pa2 w-25 pv2 mt3 ml2' input='text' value={this.state.registerBankBranchChange} onChange={this.onRegisterBankBranchChange}/></div>
           <div className='center pv2'><b className='ph2 dark-green pr1'>Opening hours</b><input className='f4 pa2 w-25 pv2 mt3 ml2' input='text' value={this.state.registerOpeningHoursChange} onChange={this.onRegisterOpeningHoursChange}/></div>
           <div className='center pv2'><b className='ph2 dark-green pr1'>Phone Number</b><input className='f4 pa2 w-25 pv2 mt3 ml2' input='tel' value={this.state.registerPhoneNumberChange} onChange={this.onRegisterPhoneNumberChange}/></div>
           <div className='center pv2'><b className='ph2 dark-green pr1 ml2'>Bank Code</b><input className='f4 pa2 w-25 pv2 mt3 ml4' input='number' value={this.state.registerBankCodeChange} onChange={this.onRegisterBankCodeChange}/></div>
           <div><button className='pa3 f4 w-30 link grow ph3 pv2 white dib bg-green mt3' onClick={this.onRegisterSubmit}>Submit</button></div>
       </div>
         <div><p className='f3'>{this.state.message}</p></div>
         <footer>©2019 Banktrack</footer>
       </div>
    )
}

}

}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBUyYM0IbNfZTWKhz9VPqdsAegsJq00Z8E'
})(BankForm);
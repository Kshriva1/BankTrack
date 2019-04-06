import React from 'react';
import user from './user.png'
import bank from './bank.png'

const Navigation = ({ onRouteChange,Route }) => {


  if(Route === 'user') {
  return (

  
      <div className="navigation pa3" style={{display:'flex',justifyContent:'flex-end'}}>
  
	  <div>
  	  <img onClick={() => onRouteChange("bank")} className="button bg-navy dim link pointer" src={bank} alt="" />
  
      <div className="fw3 white bg-navy">FOR BANKS</div>
      </div>

	  </div>
  
  	)
  } else {

  	return (
      <div className="navigation pa3" style={{display:'flex',justifyContent:'flex-end'}}>
  
	   <div>
  	    <img onClick={() => onRouteChange("user")} className="button bg-navy dim link pointer" src={user} alt="" />
  
        <div className="fw3 white bg-navy">FOR USERS</div>
       </div>

	  </div> 
  		)
  }


}


export default Navigation;
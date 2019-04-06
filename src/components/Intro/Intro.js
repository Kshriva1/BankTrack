import React from 'react';
import './Intro.css';

const Intro = ({ Route }) => {
   if(Route === 'user') {
   return (

     <div>
     <p className='f3'>
     {'WELCOME TO BANKTRACK! ENTER YOUR BANK NAME AND BRANCH TO GET THE LOCATION!'}
     </p>
     </div>

   	)   
  } else {

    return (

     <div>
     <p className='f3'>
     {'WELCOME TO BANKTRACK! PLEASE ENTER YOUR BANK DETAILS FOR USERS TO FIND YOU!'}
     </p>
     </div>

   	)   
 

  }

}

export default Intro;
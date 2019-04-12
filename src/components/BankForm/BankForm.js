import React from 'react';
import './BankForm.css'

const BankForm = ({ Route,onButtonSubmit,lat,lng }) => {

	if(Route === 'user') {
	return(
    <div>
<div className='shadow-5 br3 pa4 form center w-60'>

<div className='center'><b className='ph2 dark-green pr1 ma2'>Bank Name</b><input className='f4 pa2 w-25 pv2 mv1 ml2' input='text' /></div>
<div className='pv2'><b className='ph2 dark-green pr1 ma2 '>Bank Branch</b><input className='f4 pa2 w-25 pv2 mv2' input='text' /></div>
<div><button className='pa3 f4 w-30 link grow ph3 pv2 white dib bg-green' onClick={onButtonSubmit}>Find Location</button></div>

</div>

   <p>{lat}</p>
   <p>{lng}</p>

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

export default BankForm;
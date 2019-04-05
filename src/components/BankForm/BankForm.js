import React from 'react';
import './BankForm.css'

const BankForm = () => {
	return(
<div className='shadow-5 br3 pa4 form center w-60'>

<div className='center'><b className='ph2 dark-green pr1 ma2'>Bank Name</b><input className='f4 pa2 w-25 pv2 mv1 ml2' input='text' /></div>
<div className='pv2'><b className='ph2 dark-green pr1 ma2 '>Bank Branch</b><input className='f4 pa2 w-25 pv2 mv2' input='text' /></div>
<div><button className='pa3 f4 w-30 link grow ph3 pv2 white dib bg-green'>Find Location</button></div>

</div>
)

}

export default BankForm;
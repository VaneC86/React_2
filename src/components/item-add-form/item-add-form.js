import React from 'react';

import './item-add-form.css';

const ItemAddForm =()=>{

	return(
		<form className="item-add-form d-flex">
		<input type="text" className='form-control'
		placeholder = 'What needs to be done'/>
		<button className='btn btn-outline-secondary'>Add Item</button>
		</form>
		)
}
export default ItemAddForm;
import React,{Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component{

	render(){
		return(
		<div className='btn-group'>
			<button className='btn btn-outline-info'>All</button>
			<button className='btn btn-outline-secondary'>Active</button>
			<button className='btn btn-outline-secondary'>Done</button>
		</div>

			)
	}
}


// const ItemStatusFilter =() =>{
// 	return (
// 		<div className='btn-group'>
// 			<button className='btn btn-outline-info'>All</button>
// 			<button className='btn btn-outline-secondary'>Active</button>
// 			<button className='btn btn-outline-secondary'>Done</button>
// 		</div>
// 		)
// }
// export default ItemStatusFilter;
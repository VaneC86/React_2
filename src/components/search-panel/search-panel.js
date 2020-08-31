import React from 'react';

import './search-panel.css';

const SearchPanel =()=>{
	const searchText='enter search text';
	const style={
		fontSize:'18px',
		width:'100%'
	}
		return(
			<input className='form-control search-input' placeholder={searchText} style={style}/>
		)
}

export default SearchPanel
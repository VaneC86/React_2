// import React from 'react';
import React,{Component} from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css'

export default class App extends Component{
state={
	todoList:[
		{label:'Drink Coffee',important:false,id:1},
		{label:'Build React App',important:true,id:2},
		{label:'Drink Tea',important:false,id:3}
	]
}
deleteItem = (id)=>{
	this.state(({todoList}) =>{
		const idx = todoList.findIndex((el)=>el.id===id)
		const left = todoList.slice(0,idx);
		const right = todoList.slice(idx + 1);
		const newArray = [...left,...right];
		return{
			todoList:newArray
		}
	})
}

render(){
	return(
	<div className='todo-app'>	
		
		<AppHeader toDo={1} done={3}/>
		<div className='top-panel d-flex'>
			<SearchPanel/>
			<ItemStatusFilter/>
		</div>
		<TodoList todos={this.state.todoList} onDeleted ={(id)=>console.log(`Deleted: ${id}`)}/>
		<ItemAddForm/>
	</div>	

		)
}
}

// // const App = ()=>{
// // 	const todoList = [
// // 		{label:'Drink Coffee',important:false,id:1},
// // 		{label:'Build React App',important:true,id:2},
// // 		{label:'Drink Tea',important:false,id:3}
// // 	]

// // 	return(
// // 	<div className='todo-app'>	
		
// // 		<AppHeader toDo={1} done={3}/>
// // 		<div className='top-panel d-flex'>
// // 			<SearchPanel/>
// // 			<ItemStatusFilter/>
// // 		</div>
// // 		<TodoList todos={todoList} onDeleted ={(id)=>console.log(`Deleted: ${id}`)}/>
// // 	</div>	
// // 	)
// // }

// export default App;
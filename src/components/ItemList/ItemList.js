import React from 'react';
import Item from '../Item/Item';
import List from '@mui/material/List';


const ItemList = ({items, onClickDone, onClickDelete}) => (
	<List>
		{items.map(item => <li key={item.value}>
			<Item 
			value = {item.value} 
			isDone = {item.isDone} 
			onClickDone = {onClickDone} 
			onClickDelete = {onClickDelete}
			id = {item.id}
			/>
		</li>)}
	</List>);


export default ItemList;
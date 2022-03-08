import React from 'react';
import Item from '../Item/Item';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const ItemList = ({items, onClickDone, onClickDelete}) => (
	<List>
		{items.map(item => <ListItem key={item.value}>
			<Item 
			value = {item.value} 
			isDone = {item.isDone} 
			onClickDone = {onClickDone} 
			onClickDelete = {onClickDelete}
			id = {item.id}
			/>
		</ListItem>)}
	</List>);


export default ItemList;
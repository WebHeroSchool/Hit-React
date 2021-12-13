import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Item = ({value, isDone, classes, onClickDone}) => (
	<ListItem > 
		<Checkbox 
			checked = {isDone}
			tabIndex = {-1}
			onClick = {() => onClickDone(isDone)} 
		/>

		<ListItemText 
		primary = {value} 
		classes={{
			root: isDone && classes.done
		}} />

		<ListItemSecondaryAction>
			<IconButton aria-label = "Delete">
				<DeleteIcon />
			</IconButton>
		</ListItemSecondaryAction>

	</ListItem>);



export default Item;
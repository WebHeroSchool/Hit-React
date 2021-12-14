import React from 'react';
// import classnames from 'classnames';
// import styles from './Item.module.css';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { withStyles } from '@material-ui/styles';

const styles = {
	done: {textDecoration: 'line-through'}
}


const Item = ({value, isDone, classes, onClickDone, id, onClickDelete}) => (
	<React.Fragment>
		<Checkbox
			checked = {isDone}
			tabIndex = {-1}
			onClick = {() => onClickDone(id)} 
		/>

		<ListItemText 
		primary = {value} 
		classes={{
			root: isDone && classes.done
		}} />

		<ListItemSecondaryAction>
			<IconButton aria-label = "Delete" >
				<DeleteIcon onClick = {() => onClickDelete(id)} />
			</IconButton>
		</ListItemSecondaryAction>
	</React.Fragment>
);



export default withStyles(styles)(Item);
import React from 'react';
import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';
import styles from'./Footer.module.css';

const Footer = ({count}) => (<div className = {styles.footer}>

	<span className = {styles.footer__count}>Осталось: {count} </span>
	
	<div className = "filters">
		<ButtonGroup variant="outlined" aria-label="outlined button group">
			<Button sx={{ fontSize: 8, p: '5px', textTransform: 'none' }}> Все </Button>
			<Button sx={{ fontSize: 8, p: '5px', textTransform: 'none' }}> Активные </Button>
			<Button sx={{ fontSize: 8, p: '5px', textTransform: 'none' }}> Завершенные </Button>
		</ButtonGroup>
	</div>

		<Button sx={{ fontSize: 8, p: '5px', textTransform: 'none' }} variant="contained">Удалить все</Button>


	</div>);

export default Footer;
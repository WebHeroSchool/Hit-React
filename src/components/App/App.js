import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
	const items = [
		{value: 'Написать новое приложение'},
		{value: 'Сходить в клуб'},
		{value: 'Выбрать всем подарки'}
	];

	return (<div className = "wrap">
		  <h1 className = "wrap__title">Список дел:</h1>
		  <InputItem />
		  <ItemList items = {items} />
		  <Footer count={3} />
		</div>
	);
};

export default App;

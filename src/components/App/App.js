import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const App = () => {
	const items = [
		{value: 'Написать новое приложение'},
		{value: 'Сходить в клуб'},
		{value: 'Выбрать всем подарки'}
	];

	return (<div>
		  <h1>Список дел:</h1>
		  <ItemList items = {items} />
		  <Footer count={3} />
		</div>
	);
};

export default App;

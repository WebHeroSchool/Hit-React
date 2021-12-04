import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItem = 'Написать новое приложение';

const App = () => (<div>
  <h1>Список дел:</h1>
  <ItemList todoItem = {todoItem} />
  <Footer count={3} />
</div>);

export default App;

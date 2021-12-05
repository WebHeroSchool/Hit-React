import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItem}) => (
<ul>
  <li><Item todoItem = {todoItem}/></li>
  <li><Item todoItem = 'Сходить в магазин'/></li>
  <li><Item todoItem = 'Выбрать всем подарки'/></li>
</ul>);

export default ItemList;
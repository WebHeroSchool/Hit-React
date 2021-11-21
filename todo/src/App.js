import logo from './logo.svg';
import './App.css';

let num = 30,
    flag = false;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p style={{color: 'red'}}>
          Hello World!
        </p>

        <p style={{margin: 10}}>
          Вывод переменной: {num}
        </p>

        <p style={{margin:10}}>
          Вывод числа: {23} <br />
          Вывод суммы чисел: {23 + num} <br />
        </p>

        {flag && <p> Логические операции</p>}
        <p style={{margin:10}}> undefined {undefined} , null  {null}, true  {true} и false {false} не будут выводиться в разметку</p>
        
        <p style={{margin:10}}>
          Использование тернарника: {flag ? 'Flag is true' :  'Flag is false'}
        </p>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Shapes/App';
import {Square,ShoppingList} from './Shapes/Square';
/*import ShoppingList from './Shapes/Square';*/
// import {Game} from './TicTacGame';
// Shapes/

ReactDOM.render(
  <div>
    <ShoppingList />
    <App />
    <Square />
  </div>, 
  document.getElementById('root')
);
// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


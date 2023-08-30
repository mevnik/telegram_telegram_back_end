import React, {useEffect} from 'react';
import Header from './Components/Header/header.jsx';
// https://www.w3schools.com/jsref/jsref_operators.asp
import './App.css';
import {useTelegram} from './Hooks/useTelegram.jsx'

function App() {
const {name,onClose,tg,onToggleButton} = useTelegram()
  useEffect(() => {
    tg.ready()
  },[tg])

  const username = name? name: 'Jon';

  return (
    <div className="App">
      <Header onClose = {onClose} username = {username}/>
      <button onClick = {onToggleButton}>toggle</button>
    </div>
  );
}

export default App;


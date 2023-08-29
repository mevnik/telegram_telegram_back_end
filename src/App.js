import React, {useEffect} from 'react';
import Header from './Components/Header/header.jsx';
// https://www.w3schools.com/jsref/jsref_operators.asp
import './App.css';
const tg = window.Telegram.WebApp

function App() {
  const onClose = () => {tg.close()}
  useEffect(() => {
    tg.ready()
  },[])

  const name = tg.initDataUnsafe?.user?.username;
  const username = name? name: 'Jon';

  return (
    <div className="App">
      <Header onClose = {onClose} username = {username}/>

    </div>
  );
}

export default App;

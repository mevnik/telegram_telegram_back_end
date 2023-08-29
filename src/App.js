import React, {useEffect} from 'react';
import Header from './Components/Header/header.jsx';

import './App.css';
const tg = window.Telegram.WebApp

function App() {
  const onClose = () => {tg.close()}
  useEffect(() => {
    tg.ready()
  },[])

  return (
    <div className="App">
      <Header onClose = {onClose} username = {tg.initDataUnsafe?.user?.username}/>

    </div>
  );
}

export default App;

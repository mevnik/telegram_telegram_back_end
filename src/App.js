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

const onSend = () => {
        const data = {
          all_price: "555",
          query_id: "34",
          name: "jon"
        }

        fetch('http://159.253.18.191:8000/web-api',{
          method: 'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify(data)
        })
}

  const username = name? name: 'Jon';

  return (
    <div className="App">
      <Header onClick = {onClose} username = {username}/>
      <button onClick = {onToggleButton}>toggle</button>
      <button onClick = {onSend}>send</button>
    </div>
  );
}

export default App;


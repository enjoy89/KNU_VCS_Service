import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components'
import Home from './pages/Home';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('d')
    axios.get('/test').then((res) => {
      console.log(res);
      setMessage(res.data);
    }).catch((err) => {
      console.log(err)
    })

  }, []);
  return (
    <div>
      <Home />
      

    </div>
  );
}

export default App;

export const Ha =  styled.div`
  background: yellow;
`;
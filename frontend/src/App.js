import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components'
import Home from './pages/Home';

function App() {
  // const [message, setMessage] = useState('');
  return (
    <>
      <Home />
    </>
  );
}

export default App;

export const Ha =  styled.div`
  background: yellow;
`;
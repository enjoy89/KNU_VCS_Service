import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

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
      {message}

    </div>
  );
}

export default App;

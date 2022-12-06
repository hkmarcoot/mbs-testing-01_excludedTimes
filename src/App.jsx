import { useState } from 'react';
import reactLogo from './assets/react.svg';
import BookingPage from './components/client/BookingPage/BookingPage';
import './index.css'

function App() {
  const [count, setCount] = useState(0);

  return (
   <>
    <BookingPage/>
   </>
  )
}

export default App;

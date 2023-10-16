import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
      <div className=''>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;

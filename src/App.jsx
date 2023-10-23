//import { useState } from 'react';
import { Outlet } from "react-router-dom";

// reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import Navbar from "./Components/Navbar/Navbar";

function App() {
  // [count, setCount] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[72px]"></div>
      <div className="mt-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;

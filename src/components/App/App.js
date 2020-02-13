import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive(!isActive);
  return (
    <>
      <label onClick={toggleMenu} className="menu" htmlFor="nav-toggle">
        <span className={`menu__icon ${isActive && 'menu__icon-checked'}`}>&nbsp;</span>
      </label>
    </>
  );
};

export default App;

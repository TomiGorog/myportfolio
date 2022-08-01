import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './CSS-modules/Sidebar.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from './App';
import ReactSwitch from 'react-switch';

export default props => {

    let themeC = React.useContext(ThemeContext)
  return (
    <Menu right>
        <Link to="/"  className="menu-item">
          Home
        </Link>
       
        <Link to="about"  className="menu-item">
          About
        </Link>
       
        <Link to="/landing"  className="menu-item">
          Landing
        </Link>
       
        <Link to="/"  className="menu-item">
          Home
        </Link>
        <ReactSwitch className='menu-item' onChange={themeC.toggleTheme} checked={themeC.theme === "dark"} />
      
    </Menu>
  );
};
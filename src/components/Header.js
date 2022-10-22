import { Link } from 'react-router-dom';
import logo from '../media/logo.png';
import '../styles/Header.css';
import { MdMenu } from 'react-icons/md';
import { useEffect, useState } from 'react';

function Dropdown({ dropMenuHandler }) {

  return (
    <ul id="dropContainer">
      <li className="dropItem" onClick={dropMenuHandler}><Link to="/">Home</Link></li>
      <li className="dropItem" onClick={dropMenuHandler}><Link to="/charities">Charities</Link></li>
      <li className="dropItem" onClick={dropMenuHandler}><Link to="/causes">Causes</Link></li>
      <li className="dropItem" onClick={dropMenuHandler}><Link to="/events">Events</Link></li>
      <li className="dropItem" onClick={dropMenuHandler}><Link to="/contact">Contact</Link></li>
    </ul>
  );
}

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropMenuHandler = () => {
    setShowDropdown(!showDropdown);
  };

  const resizeHandler = () => {
    window.addEventListener('resize', () => setShowDropdown(false))
  };
  useEffect(resizeHandler, []);

  return (
    <header>
      <nav>
        <ul>
          <li id="logo"><Link to="/"><img src={logo} alt="Fund the Reach Logo" /></Link></li>
          <li id="menuIcon" onClick={dropMenuHandler}>{MdMenu()}</li>
          <li className="navItem"><Link to="/">Home</Link></li>
          <li className="navItem"><Link to="/charities">Charities</Link></li>
          <li className="navItem"><Link to="/causes">Causes</Link></li>
          <li className="navItem"><Link to="/events">Events</Link></li>
          <li className="navItem"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      {
        showDropdown &&
        <Dropdown dropMenuHandler={dropMenuHandler}/>
      }
    </header>
  );
}

export default Header;

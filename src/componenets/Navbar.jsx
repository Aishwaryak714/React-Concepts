import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
      <Link to='/'><h4>Home</h4></Link>
        <Link to='/Parent'><h4>Lifting State up</h4></Link>
        <Link to='/Users'><h4>Fetching data using fetch</h4></Link>
    </div>
  )
}

export default Navbar
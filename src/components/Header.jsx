// import React from 'react';
import Nav from './Nav';

function Header({ title }) {
    return <div>
        <header>
            <span>{title}</span>
            <Nav />
            
      </header>
  </div>;
}

export default Header;
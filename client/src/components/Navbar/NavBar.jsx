import React from 'react';
import { link } from "react-router-dom";

const NavBar = () => {
    return (

        <ul className="nav">
  <li className="nav-item">
    <link className="nav-link active" href="#">Search</link>
  </li>
  <li className="nav-item">
    <link className="nav-link" href="#">Saved</link>
  </li>
</ul>
  );
}

export default NavBar;
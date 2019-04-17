import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {

   return (
      <div> 
      	<a href="/about">About</a>
      	<NavLink to="/">Home</NavLink>
      	<NavLink to="/contact">Contact</NavLink>
      </div>


   	);

};

export default Navigation;

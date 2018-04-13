import React from 'react';
import {Nav, NavbarBrand} from 'reactstrap';

const Header = () => (
  <Nav>
    <NavbarBrand href="/">
      <img src="/images/logo-almundo.svg"/>
    </NavbarBrand>
  </Nav>
);

export default Header;
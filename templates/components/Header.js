module.exports = `
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to={'/'}>
          HOME
        </Link>
        <Link to={'/'}>
          Link
        </Link>
        <Link to={'/'}>
          Link
        </Link>
      </header>
    );
  }
}

export default Header;
`
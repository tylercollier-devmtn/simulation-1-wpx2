import React, { Component } from 'react';
import './Header.css';
import { Route, Link } from 'react-router-dom';
import Shelf from './Shelf';

class Header extends Component {
  render() {
    return (
      <div className="header-with-logo">
        <Route exact path="/" render={() => (
          <div>
            (LOGO) Shelfie
          </div>
        )} />
        <Route path="/shelves/:id" render={(props) => (
          <div>
            <Link to="/">(LOGO)</Link>
            {' '}
            Shelf {props.match.params.id}
          </div>
        )} />
      </div>
    );
  }
}

export default Header;

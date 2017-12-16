import React, { Component } from 'react';
import './Header.css';
import { Route, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header-with-logo">
        <Route exact path="/" render={() => (
          <div>
            <Link to="/">(LOGO)</Link> Shelfie
          </div>
        )} />
        <Route path="/shelves/:shelfId" render={(props) => (
          <div>
            <Link to="/">(LOGO)</Link>
            {' '}
            Shelf {props.match.params.shelfId}
          </div>
        )} />
      </div>
    );
  }
}

export default Header;

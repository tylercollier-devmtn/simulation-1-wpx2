import React, { Component } from 'react';
import './Bin.css';
import { Link } from 'react-router-dom';

class Bin extends Component {
  constructor() {
    super()
    this.state = {
      bins: []
    }
  }

  render() {
    const { id, name, price, shelfId } = this.props;

    return (
      <div className={name ? 'dark-red' : 'light-red'}>
        {name && <div>
          name: {name}
          {' '}
          price: {price}
        </div>}
        {!name && <div>
          <Link to={"/create/" + shelfId + id}>+ Add Inventory to Bin</Link>
        </div>}
      </div>
    );
  }
}

export default Bin;

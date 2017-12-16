import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Bin from './Bin';

class Shelf extends Component {
  constructor() {
    super()
    this.state = {
      bins: []
    }
  }

  componentDidMount() {
    axios.get('/api/shelf/' + this.props.name).then(response => {
      this.setState({ bins: response.data.bins });
    })
  }

  render() {
    return (
      <div>
        <div>Shelf component {this.props.name}</div>
        {this.state.bins.map(e => {
          // e right now looks like { id: 1, name: '', price: 10 }
          // return <Bin {...e} />
          return <Bin key={e.id} shelfId={this.props.match.params.shelfId} id={e.id} name={e.name} price={e.price} />
        })}
      </div>
    );
  }
}

export default Shelf;

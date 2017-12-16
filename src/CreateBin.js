import React, { Component } from 'react';
import axios from 'axios';

class CreateBin extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: '',
    };
    this.onAdd = this.onAdd.bind(this)
    this.setPrice = this.setPrice.bind(this)
  }

  onAdd() {
    const shelfId = this.props.match.params.shelfAndBinIds[0]
    const binId = this.props.match.params.shelfAndBinIds[1]
    axios.post('/api/bin/' + binId, {
      name: this.state.name,
      price: this.state.price,
    }).then(response => {
      this.props.history.push('/shelves/' + shelfId);
    });
  }

  setPrice(event) {
    this.setState({
      price: event.target.value
    });
  }

  render() {
    const { match } = this.props;
    const shelfId = match.params.shelfAndBinIds[0]
    const binId = match.params.shelfAndBinIds[1]

    return (
      <div>
        <h1>Add to shelf {shelfId}, {binId}</h1>
        <div>Name: <input onChange={e => this.setState({ name: e.target.value })} /></div>
        <div>Price <input onChange={this.setPrice} /></div>
        <div><button onClick={this.onAdd}>Add to bin</button></div>
      </div>
    )
  }
}

export default CreateBin;

import React, { Component } from 'react';
import './Main.css';

const shelves = [
  {
    id: 7,
    name: 'A',
  }, {
    id: 22,
    name: 'B',
  }, {
    id: 35,
    name: 'C',
  }, {
    id: 4098,
    name: 'D',
  },
]


class Main extends Component {
  constructor() {
    super()
    this.state = {
      shelves: []
    }
  }

  componentDidMount() {
    // axios.get()
    setTimeout(() => {
      this.setState({
        shelves: shelves
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        {this.state.shelves.map((e) => <div className="shelf">Shelf {e.name}</div>)}
      </div>
    );
  }
}

export default Main

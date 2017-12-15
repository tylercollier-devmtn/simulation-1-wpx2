import React, { Component } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

const shelves = [
  {
    name: 'A',
  }, {
    name: 'B',
  }, {
    name: 'C',
  }, {
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
        {this.state.shelves.map((e) => (
          <div className="shelf">
            <Link to={`/shelves/${e.name}`}>Shelf {e.name}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Main

import React, { Component } from 'react';
import './Main.css';
import { Route, Link } from 'react-router-dom';
import Shelf from './Shelf';
import CreateBin from './CreateBin';

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
        <Route exact path="/" render={() =>
          this.state.shelves.map((e) => (
            <div className="shelf">
              <Link to={`/shelves/${e.name}`}>Shelf {e.name}</Link>
            </div>
          ))} />
        <Route path="/shelves/:shelfId" render={(props) => <Shelf {...props} name={props.match.params.shelfId} />} />
        <Route path="/create/:shelfAndBinIds" component={CreateBin} />
      </div>
    );
  }
}

export default Main

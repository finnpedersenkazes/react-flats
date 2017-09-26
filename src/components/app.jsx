import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={flats}/>
      </div>
    );
  }
}

export default App;

// <FlatList flats={this.state.flats}/>

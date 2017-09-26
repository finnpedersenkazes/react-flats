import React, { Component } from 'react';
import FlatList from './flat_list';
import SimpleMap from './simple_map';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats,
      selectedFlat: flats[0]
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} />
        <SimpleMap flat={this.state.selectedFlat} />
      </div>
    );
  }
}

export default App;

// <FlatList flats={this.state.flats}/>

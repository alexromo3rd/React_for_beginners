import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
  // Two steps to use when updating a piece of state

  // 1. Take a copy of the existing state (never modify (mutate) state directly)
  const fishes = {...this.state.fishes} // {...} is called Object Spread and it creates a copy of the object
  // 2. Add our new fish to that fishes variable
  fishes[`fish${Date.now()}`] = fish;
  // 3. Set the new fishes object to state
  this.setState({
    fishes: fishes
  });
  };
 
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order />
        <Inventory 
          addFish={this.addFish} 
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
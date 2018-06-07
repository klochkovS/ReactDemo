import React, { Component } from 'react';
import { v4 } from 'uuid';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import TimeLine from './TimeLine';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
    this.addColor = this.addColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0,
      },
    ];
    this.setState({ colors });
  }

  rateColor(id, rating) {
    const colors = this.state.colors.map(color =>
      (color.id !== id) ?
        color : { id: color.id, title: color.title, color: color.color, rating });
    this.setState({ colors });
  }

  removeColor(id) {
    const colors = this.state.colors.filter(color =>
      color.id !== id);
    this.setState({ colors });
  }

  render() {
    const historicDatesForSkiing = [
      {
        year: 1879,
        event: "Ski Manufacturing Begins"
      },
      {
        year: 1882,
        event: "US Ski Club Founded"
      },
      {
        year: 1924,
        event: "First Winter Olympics Held"
      },
      {
        year: 1926,
        event: "First US Ski Shop Opens"
      },
      {
        year: 1932,
        event: "North America's First Rope Tow Spins"
      },
      {
        year: 1936,
        event: "First Chairlift Spins"
      },
      {
        year: 1949,
        event: "Squaw Valley, Mad River Glen Open"
      },
      {
        year: 1958,
        event: "First Gondola Spins"
      },
      {
        year: 1964,
        event: "Plastic Buckle Boots Available"
      }
    ];
    const { addColor, rateColor, removeColor } = this;
    const { colors } = this.state;
    return (
      <div className="app">
        <TimeLine
          name="History of Skiing"
          data={historicDatesForSkiing}
        />
        <AddColorForm onNewColor={addColor} />
        <ColorList
          colors={colors}
          onRate={rateColor}
          onRemove={removeColor}
        />
      </div>
    );
  }
}

export default App;

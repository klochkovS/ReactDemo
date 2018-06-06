import React, { Component } from 'react';
import { v4 } from 'uuid';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import { Display, WhenFalsy, WhenTruthy } from './Display';

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
    const { addColor, rateColor, removeColor } = this;
    const { colors } = this.state;
    return (
      <div className="app">
        <Display ifTruthy={20 >= 21}>
          <WhenTruthy>
            <h1>You can enter</h1>
          </WhenTruthy>
          <WhenFalsy>
            <h1>Beat it Kid</h1>
          </WhenFalsy>
        </Display>
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

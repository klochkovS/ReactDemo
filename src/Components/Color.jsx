import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import { rateColor, removeColor } from '../actions';

class Color extends Component {

  render() {
    const {
      id, title, color, rating,
    } = this.props;
    const { store } = this.context;
    return (
      <section className="color" style={this.style}>
        <h1 ref="title">{title}</h1>
        <button onClick={() => store.dispatch(removeColor(id))}>x</button>
        <div
          className="color"
          style={{ backgroundColor: color }}>
        </div>
        <div>
          <StarRating
            starsSelected={rating}
            onRate={rating => store.dispatch(rateColor(id, rating))}
          />
        </div>
      </section>
    );
  }
}

Color.contextTypes = {
  store: PropTypes.object,
};

export default Color;

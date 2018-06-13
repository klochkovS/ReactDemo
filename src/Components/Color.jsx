import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

class Color extends Component {

  render() {
    const {
      title, color, rating, onRemove, onRate,
    } = this.props;
    return (
      <section className="color" style={this.style}>
        <h1 ref="title">{title}</h1>
        <button onClick={onRemove}>
        </button>
        <div
          className="color"
          style={{ backgroundColor: color }}>
        </div>
        <div>
          <StarRating starsSelected={rating} onRate={onRate} />
        </div>
      </section>
    );
  }
}

Color.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  color: PropTypes.string,
  onRate: PropTypes.func,
};

Color.defaultProps = {
  title: undefined,
  rating: 0,
  color: '#000000',
  onRate: f => f,
};

export default Color;

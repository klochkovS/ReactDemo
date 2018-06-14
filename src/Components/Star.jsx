import React from 'react';
import './star.css';

const Star = ({ selected = false, onRate = f => f }) => (
  <div className={(selected) ? 'star selected' : 'star'}
    onClick={onRate}>
  </div>
);

export default Star;

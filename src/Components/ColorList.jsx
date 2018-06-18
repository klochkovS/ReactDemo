import React from 'react';
import Color from './Color';
import { rateColor, removeColor } from '../actions';
import { sortFunction } from '../lib/array-helpers';

const ColorList = ({ colors = [] }) => {
  return (
    <div className="color-list">
      {(colors.length === 0) ?
        <p>No Colors Listed. (Add a Color)</p> :
        colors.map(color =>
          <Color key={color.id} {...color} />
        )
      }
    </div>
  );
};

export default ColorList;

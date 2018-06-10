import React, { Component } from 'react';
import Expandable from './hoc/Expandable';

const ShowHideMessage = ({ children, collapsed, expandCollapse }) => (
  <p onClick={expandCollapse}>
    {(collapsed) ?
      children.replace(/[a-zA-Z0-9]/g, 'x') :
      children}
  </p>
);

const HiddenMessage = Expandable(ShowHideMessage);

export default HiddenMessage;

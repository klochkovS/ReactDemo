import React from 'react';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';

const App = ({ store }) => (
  <div className="app">
    <AddColorForm store={store} />
    <ColorList store={store} />
  </div>
);

export default App;

import React from 'react';
import recipesData from '../data';
import Menu from './Menu';
import AddColorForm from './AddColorForm';


const logColor = (title, color) =>
  console.log(`New Color: ${title} | ${color}`);

const App = () => (
  <section>
    <AddColorForm onNewColor={logColor} />
    <Menu recipes={recipesData} />
  </section>
);


export default App;

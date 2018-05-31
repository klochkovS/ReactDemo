import React, { Component } from 'react';
import recipesData from './data';
import './App.css';


const Recipe = ({ name, ingredients, steps }) => (
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h1>{name}</h1>
    <ul className="ingredients">
      {ingredients.map((ingredient, i) => <li key={i}>{ingredient.name}</li>)}
    </ul>
    <section className="instruction">
      <h2>Cooking Instructions</h2>
      {steps.map((step, i) => <p key={i}>{step}</p>)}
    </section>
  </section>
);

const Menu = ({ title, recipes }) => (
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, i) => <Recipe key={i} {...recipe} />)}
    </div>
  </article>
);

class App extends Component {
  render() {
    return (
      <Menu recipes={recipesData} />
    );
  }
}

export default App;

import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import storeFactory from './store';

const store = storeFactory();

const r = () =>
  render(
    <App store={store} />,
    document.getElementById('root'),
  );


store.subscribe(r);
r();

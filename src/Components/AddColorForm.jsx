import React from 'react';
import { addColor } from '../actions';

const AddColorForm = ({ store }) => {
  let _title;
  let _color;

  const submit = (evnt) => {
    evnt.preventDefault();
    store.dispatch(addColor(_title.value, _color.value));
    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  };

  return (
    <form className="add-color" onSubmit={submit}>
      <input
        ref={input => _title = input}
        type="text"
        placeholder="color title..."
        required
      />
      <input ref={input => _color = input} type="color" required />
      <button>Add</button>
    </form>
  );
};

export default AddColorForm;

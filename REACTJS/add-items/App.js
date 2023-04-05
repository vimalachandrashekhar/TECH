import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Items(props) {
  return <li>name: {props.name}</li>;
}

function Grocery() {
  const [items, setItems] = useState([
    { id: 1, name: 'milk' },
    { id: 2, name: 'bread' },
    { id: 3, name: 'sugar' }
  ]);
  const [newItem, setNewItem] = useState('');

  const handleNewItemChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newItemObj = { id: items.length + 1, name: newItem };
    setItems([...items, newItemObj]);
    setNewItem('');
  };

  return (
    <>
      <h1>ITEM LISTS!!</h1>
      <ul>
        {items.map((item) => (
          <Items key={item.id} name={item.name} />
        ))}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <label>
          New Item:
          <input type="text" value={newItem} onChange={handleNewItemChange} />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Grocery />);

export default Grocery;

import React from 'react';
import ReactDOM from 'react-dom/client';
function GroceryList() {
  const items = [
    { id: 1, name: 'milk' },
    { id: 2, name: 'bread' },
    { id: 3, name: 'sugar' },
  ];
  return (
    <>
    <h1>Grocery List</h1>
    <ul>
      
      {items.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
      </>
  );
}
const root = ReactDOM.createRoot(document.getelementById('root'));
root.render(<GroceryList />);

export default GroceryList;

import React from 'react';
import ReactDOM from 'react-dom/client';
function Items(props) {
  return <li>name: { props.name }</li>;
}

function Grocery() {
  const item = [
    {id: 1, name: 'milk'},
    {id: 2, name: 'bread'},
    {id: 3, name: 'sugar'}
  ];
  return (
    <>
      <h1>ITEM LISTS!!</h1>
      <ul>
        {item.map((item) => <Items key={item.id} name={item.name} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Grocery />);

export default Grocery;
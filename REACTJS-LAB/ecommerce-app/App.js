import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10.00, image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/Reusable_water_bottle.png?format=webp&v=1597958401' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 15.00, image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/Rug_by_pool.png?format=webp&v=1597960046' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 20.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPogtt-z-iE0y_5AiXG1NsJs-Km4Ge-5p7m2zoiuJlc7UFpf0Ibm9FQirTK9SRiEdal7A&usqp=CAU' },
    { id: 4, name: 'Product 4', description: 'Description of Product 4', price: 25.00, image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651' },
    { id: 5, name: 'Product 5', description: 'Description of Product 5', price: 30.00, image: 'https://professionalproductphotography.com/wp-content/uploads/2021/11/professional-product-photography-simple-gallery-1024x512.jpg' }
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter(item => item.id !== product.id);
    setCart(newCart);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li className="cart"><a href="#">Cart ({cart.length})</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="products">
          {products.map(product => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </section>
        <section className="cart-items">
          <h2>Cart</h2>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 E-commerce Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

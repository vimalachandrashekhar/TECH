import React from 'react';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
         
            <li><a class="h" href="#">Home</a></li>
            <li><a class="d"href="#">Destinations</a></li>
            <li><a class="a" href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
           
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Discover your dream destination</h1>
          <p>Explore our top destinations and start planning your next adventure</p>
          <button>View Destinations</button>
        </section>
        <section>
          <h2>Popular Destinations</h2>
          <ul>
            <li>
              <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/08/24145640/Untitled-design-2022-08-24T145349.164-1600x900.jpg" alt="Destination 1" />
              <h3>Munnar</h3>
              <p>Munnar, the famed hill station of south India, is a romantic locale where natural beauty is everywhere to visit, explore and to enjoy.  </p>
              <p><a href ="https://www.munnar.com/about.htm#about" target="_blank"> read more...</a></p>
            </li>
            <li>
              <img src="https://assets.cntraveller.in/photos/60ba179da1a415b43b10bb90/master/pass/lead.jpg" alt="Destination 2" />
              <h3>Waynad</h3>
              <p> Adorning the northern hills of Kerala is the beautiful district of Wayanad, maintained by the District Tourism Promotion Council, Wayanad.</p>
              <p><a href ="https://www.wayanad.com/pages/about-wayanad" target="_blank"> read more...</a></p>
            </li>
            <li>
              <img src="https://th-i.thgim.com/public/migration_catalog/article11567134.ece/alternates/FREE_1200/13BGPALACE_ILLUMINATION" alt="Destination 3" />
              <h3>Mysore</h3>
              <p>Mysuru is famous in the world for its sandalwood and rosewood artifacts.stone sculptures, incense sticks, inlay work with ivory and its exquisite silk sarees. </p>
            <p><a href ="https://en.wikipedia.org/wiki/Mysore" target="_blank"> read more...</a></p>
            </li>
          </ul>
        </section>
        <section>
          <h2>About Us</h2>
          <p>Gagan Holidays is a renowned brand in the bus operating industry. Our vision is to give a new face to the bus industry. Since our inception passenger comfort was our top priority. We have frequently added luxury buses to our huge fleet of buses. The only thing we focus on is that the comfort quotient of our passengers should never be compromised. We have always tried our best to push our limits in order to develop our travel experience</p>
          <button>Learn More</button>
        </section>
        <section>
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Travel Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

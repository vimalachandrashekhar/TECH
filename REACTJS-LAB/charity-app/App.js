import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Work</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="banner">
          <h1>Help us make a difference.</h1>
          <button>Donate Now</button>
         
        </section>
        <section className="about">
          <h2>About Us</h2>
          <p>We are a non-profit organization dedicated to helping those in need. Our mission is to provide food, shelter, and other essential resources to individuals and families facing difficult times. With your help, we can make a difference in our community and beyond.</p>
          <button>Learn More</button>
        </section>
        <section className="work">
          <h2>Our Work</h2>
          <div className="work-item">
            <img src="https://www.charitylook.com/wp-content/uploads/2021/07/Food-for-the-Poor-Charity-Assistance-in-Need.jpg" alt="Work Item 1" />
            <h3>Food Assistance</h3>
            <p>We provide nutritious meals to families in need through our food pantry and meal programs.</p>
          </div>
          <div className="work-item">
            <img src="https://i.ytimg.com/vi/qBucKP87k2s/maxresdefault.jpg" alt="Work Item 2" />
            <h3>Shelter</h3>
            <p>We offer temporary and permanent housing solutions to individuals and families experiencing homelessness.</p>
          </div>
          <div className="work-item">
            <img src="https://media.istockphoto.com/id/1199705901/photo/mid-adult-volunteer-shakes-hands-with-girl-at-registration-table.jpg?s=612x612&w=0&k=20&c=9dRm8UGu7XeI3qi9V07q0c140eIv__WMm3_JOYb8VpE=" alt="Work Item 3" />
            <h3>Community Outreach</h3>
            <p>We collaborate with local organizations and volunteers to provide support and resources to our community.</p>
          </div>
        </section>
        <section className="donate">
          <h2>Donate</h2>
          <p>Your contribution can make a difference in the lives of those we serve. Please consider making a donation today.</p>
          <button>Donate Now</button>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Charity Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.tailorbrands.com/wp-content/uploads/2021/03/Header-3-scaled.jpg" alt="Photography logo" />
        <h1>Photography Site</h1>
      </header>
      <section className="image-section">
        <h2>Our Work</h2>
        <div className="image-grid">
          <img src="https://www.nhm.ac.uk/content/dam/nhmwww/discover/wpy-57/Andr%C3%A9s-sunflowers.jpg.thumb.1160.1160.jpg" alt="Image 1" />
          <img src="https://www.clubmahindra.com/blog/media/section_images/naturephot-ec32e94608f809e.webp" alt="Image 2" />
          <img src="http://static1.squarespace.com/static/5683aff9a12f443fdcd7b3a0/59b6514bcd0f685d6d47d371/602e541589858a5348fd394a/1615873738836/how+to+do+creative+photography+at+home+header.jpg?format=1500w" alt="Image 3" />
          <img src="https://imageio.forbes.com/specials-images/imageserve/60c246899835f50f501d53b8/Two-albino--white--tigers/960x0.jpg?height=568&width=711&fit=bounds" alt="Image 4" />
          <img src="https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDU4NDg2NzAzNjYyNDQw/angles-and-frames-for-creative-photography-composition.jpg" alt="Image 5" />
          <img src="https://www.kentfaith.com/image/catalog/blog/329/329.jpg" alt="Image 6" />
        </div>
      </section>
      <footer>
        <p>Contact us:</p>
        <p>Email: photography@email.com</p>
        <p>Phone: 555-555-5555</p>
      </footer>
    </div>
  );
}

export default App;

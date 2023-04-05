import React from 'react';


function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>My Technical Documentation</h1>
      </header>
      <nav className="nav">
        <ul>
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
        </ul>
      </nav>
      <main className="main">
        <section id="section1">
          <h2>ABSTRACT</h2>
          <p>Nanomedicine offers the prospect of powerful new tools for the treatment of human diseases and the improvement of human biological systems using molecular nanotechnology. This paper presents a theoretical nanorobot scaling study for artificial mechanical phagocytes of microscopic size, called "microbivores" whose primary function is to destroy microbiological pathogens found in the human bloodstream using a digest and discharge protocol.</p>
        </section>
        <section id="section2">
          <h2>INTRODUCTION</h2>
          <p>The microbivore is an oblate spheroidal nanomedical device consisting of 610 billion precisely arranged structural atoms plus another ~150 billion mostly gas or water molecules when fully loaded. The nanorobot measures 3.4 microns in diameter along its major axis and 2.0 microns in diameter along its minor axis, thus ensuring ready passage through even the narrowest of human capillaries which are ~4 microns in diameter. Its gross geometric volume of 12.1056 micron includes two normally empty internal materials processing chambers totaling 4 micron in displaced volume.</p>
        </section>
        <section id="section3">
          <h2>APPLICATIONS</h2>
          <p>Microbicores as a general class of medical nanorobots, have much broader applicability which goes beyond the idea of phagocytosis of isolated bloodborne bacterial pathogens. Microbivores could be useful in the treatment of infections of the meninges and the cerebrospinal fluid (CSF) by quickening the kill rate as opposed to typical antibotic treatments.
Microbivores could also be used used in systemic inflammatory cytokine management. With minor additions, microbivores could be used to combat toxemia, the distribution throughout the body of poisonous products of bacteria growing in a focal or local site, and other biochemical sequelae of sepsis. Often times even when killing a certain bacteria byproducts are produced that can significantly harm the body. Since in the microbivores all the bacteria components are internalized and fully digested into harmless nonantigenic molecules prior to discharge from the device, the nanorobots represent a complete antimicrobial therapy without increasing the risk of sepsis or septic shock.</p>
        </section>
      </main>
    </div>
  );
}

export default App;

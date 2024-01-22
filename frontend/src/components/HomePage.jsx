import React from 'react';
import Navigation from './Navigation/Navigation';
import SecondaryNav from './Navigation/secondarynav'; 
import Header from './Navigation/header';
import Banner from './Navigation/Banner';

function HomePage() {
  return (
    <div>
      <SecondaryNav /> 
      <Banner /> 
      {/* <Banner /> */}
      <main>
        <section className="featured-products">
          <h2>Featured Products</h2>
          {/* ... */}
        </section>
        <section className="best-sellers">
          <h2>Best Sellers</h2>
          {/* ... */}
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Amasphere</p>
      </footer>
    </div>
  );
}

export default HomePage;

import React from 'react';
import NavBar from './NavBar'; 

function HomePage() {
  return (
    <div>
      <NavBar />
      <main>

        <section className="featured-products">

          <h2>Featured Products</h2>

        </section>
        <section className="best-sellers">

          <h2>Best Sellers</h2>

        </section>

      </main>
      <footer>

        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
}

export default HomePage;

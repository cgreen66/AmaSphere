import React from 'react';
import Navigation from './Navigation/Navigation';
import SecondaryNav from './Navigation/secondarynav'; 
import Header from './Navigation/header';
import Banner from './Navigation/Banner';
import ProductList from './ProductList';

function HomePage() {
  return (
    <div>
            <SecondaryNav />
      <Banner />
      <main>
        <section className="featured-products">

          <ProductList />
    
        </section>


      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Amasphere</p>
      </footer>
    </div>
  );
}

export default HomePage;

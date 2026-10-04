import "./Hero.css";

function Hero() {
return (
<section className="hero">
<h2>Discover Classic Vinyl</h2>
<p>
Explore our collection of vintage records, jazz albums, and rock
classics.
</p>
<a href="#products" className="hero-button">
Shop Now
</a>
</section>
);
}

export default Hero;
function HomePage() {
  return (
    <main>
      <section className="hero">
        <h1>Welcome to Our Store</h1>
        <p>Discover great products at great prices.</p>
      </section>

      <section className="why-shop">
        <h2>Why Shop With Us?</h2>
        <p>
          We offer quality products, affordable prices, and a simple shopping
          experience designed with you in mind.
        </p>

        <div className="benefits">
          <div>
            <h3>Quality Products</h3>
            <p>We carefully select products that provide great value.</p>
          </div>

          <div>
            <h3>Affordable Prices</h3>
            <p>Get the products you want without breaking the bank.</p>
          </div>

          <div>
            <h3>Easy Shopping</h3>
            <p>Browse our products and add your favorites to your cart.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;

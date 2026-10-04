import "./ProductCard.css";

function ProductCard({ name, price, image }) {
return (
<div className="product-card">
<img src={image} alt={name} />
<h2>{name}</h2>
<p>${price}</p>
</div>
);
}

export default ProductCard;

import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
  return (
    <main>
      <h1>Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </main>
  );
}

export default ProductsPage;

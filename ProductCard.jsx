function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">
        <h2>{product.name}</h2>

        <p className="price">
          ${product.price.toFixed(2)}
        </p>

        <p>{product.description}</p>

        <button onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

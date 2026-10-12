
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <button onClick={() => onAddToCart(product)}>
        Добавить в корзину
      </button>
    </div>
  );
}

export default ProductCard;

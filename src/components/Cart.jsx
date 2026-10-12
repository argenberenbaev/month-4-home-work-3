
function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Корзина</h2>

      {cartItems.length === 0 ? (
        <p>Корзина пока пуста</p>
      ) : (
        <ul>
          {cartItems.map((product, index) => (
            <li key={index}>
              <img src={product.image} alt={product.name} />
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

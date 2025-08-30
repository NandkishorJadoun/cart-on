import { Plus, Minus, Trash } from "lucide-react";

function CartItem({
  cartItem,
  removeItemHandler,
  increaseQuantity,
  decreaseQuantity,
}) {
  const totalPrice = Math.round(cartItem.cart * cartItem.price * 100) / 100;

  return (
    <div>
      <p>{cartItem.title}</p>
      <div>
        <img src={cartItem.image} alt={cartItem.title} />
        <div>
          <button
            disabled={cartItem.cart <= 1}
            onClick={() => decreaseQuantity(cartItem.id)}
          >
            <Minus />
          </button>

          <span> {cartItem.cart} </span>
          <button
            disabled={cartItem.cart >= 5}
            onClick={() => increaseQuantity(cartItem.id)}
          >
            <Plus />
          </button>
        </div>
        <p>{totalPrice}</p>
        <button onClick={() => removeItemHandler(cartItem.id)}>
          <Trash />
        </button>
      </div>
    </div>
  );
}

export default CartItem;

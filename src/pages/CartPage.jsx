import { Minus, Plus, Trash2 } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateQuantity } from "../features/cart/cartSlice";
import { removeFromCart } from "../features/cart/cartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Your cart is empty</h2>
          <p className="text-gray-600 mb-4">
            Add Some Products to your cart to see them here
          </p>
          <Link
            to="/"
            className="inline-block py-2 px-6 bg-zinc-200 text-black rounded-lg hover:bg-zinc-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 shadow-md p-4 rounded-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-4 border-b px-2"
            >
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-23 h-20  rounded"
                />
              </Link>
              <div className="flex-1">
                <Link to={`/product/${item.id}`}>
                  <h3 className="font-semibold">{item.title}</h3>
                </Link>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: Math.max(0, item.quantity - 1),
                        })
                      )
                    }
                    className="bg-zinc-200 text-black rounded-lg hover:bg-zinc-300"
                  >
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                    className="bg-zinc-200 text-black rounded-lg hover:bg-zinc-300"
                  >
                    <Plus size={16} />
                  </button>
                  <div className="ml-4 text-red-500 hover:text-red-600 cursor-pointer">
                    <Trash2
                      size={16}
                      onClick={() => dispatch(removeFromCart(item.id))}
                    />
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between border-t pt-2 font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

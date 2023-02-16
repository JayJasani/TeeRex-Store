import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "store/cart";

export function useCart() {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart.data);

  const addToCartAction = (params) => dispatch(addToCart(params));

  return {
    cartData,
    addToCartAction,
  };
}

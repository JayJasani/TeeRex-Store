import { useDispatch, useSelector } from "react-redux";

export function useCart() {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart.data);

  return {
    cartData,
  };
}

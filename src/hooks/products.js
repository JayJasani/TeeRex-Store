import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "store/products";

export function useProducts() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);

  const getProductsAction = () => dispatch(getProducts());

  return {
    products,
    loading,
    getProductsAction,
  };
}

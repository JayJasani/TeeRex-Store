// Layout
import Layout from "common/Layout";

// Pages

import Products from "pages/Products";
import Cart from "pages/Cart";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Products /> },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];
export default routes;

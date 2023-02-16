import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

const Routes = () => {
  return useRoutes(routes);
};
function App() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet titleTemplate="%s | " defaultTitle="TeeRex Store"></Helmet>
      </HelmetProvider>
      <Routes />
      <ToastContainer
        position="bottom-right"
        pauseOnHover="false"
        autoClose={2000}
        closeButton="false"
      />
    </React.Fragment>
  );
}

export default App;

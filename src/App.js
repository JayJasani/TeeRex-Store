import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

// import Page404 from "./view/Page404";
// import ProtectedRoute from "./components/ProtectedRoute";

// import Helmet from 'react-helmet';
const Routes = () => {
  return useRoutes(routes);
};
function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | " defaultTitle="TeeRex Store"></Helmet>
      </HelmetProvider>
      <Routes />
    </>
  );
}

export default App;

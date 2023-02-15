import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { configureAppStore } from "./store";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const configureStore = configureAppStore();

const AppWithStore = () => {
  return (
    <StoreProvider store={configureStore.store}>
      <PersistGate loading={<></>} persistor={configureStore.persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <Router>
        <AppWithStore />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

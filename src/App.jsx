import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import ReduxStore from "./store/configure-store";
import router from "./routes/routes";

const store = ReduxStore.configureStore();

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./components/redux";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  //<React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
  //</React.StrictMode>
);

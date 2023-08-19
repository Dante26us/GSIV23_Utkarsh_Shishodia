import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/index.jsx";
import ErrorPage from "./ErrorPage/index.jsx";
import MovieDetail from "./MovieDetail/index.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "/:id",
    element: <MovieDetail />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

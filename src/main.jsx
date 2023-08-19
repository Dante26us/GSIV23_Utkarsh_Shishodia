import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import MovieDetail from "./pages/MovieDetail";
import Header from "./components/Header";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

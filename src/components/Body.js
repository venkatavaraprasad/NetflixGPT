import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ Fix import
import Login from "./Login";
import Browser from "./Browser";
import Moviedetails from "./Moviedetails";

import Layout from "./Layout"; // Import the new Layout component

const approter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
    {
      index:true,
      element: <Login />, 
    },
    {
        path: 'browser', 
        element: <Browser />,
    },
    {
        path: "movie/:movieid", 
        element: <Moviedetails />,
    },
    ],
  },
]);

const Body = () => {
  return (
    <div>
      <RouterProvider router={approter} />
    </div>
  );
};

export default Body;

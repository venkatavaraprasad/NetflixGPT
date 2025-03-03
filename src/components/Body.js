import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ Fix import
import Login from "./Login";
import Browser from "./Browser";
import Moviedetails from "./Moviedetails";

import Layout from "./Layout"; // Import the new Layout component
import GPTsearch from "./GPTsearch";

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
    {
      path: "/GPTsearch", 
      element: <GPTsearch/>,
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

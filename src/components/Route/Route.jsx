import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import PhotoCart from "../PhotoCart";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <PhotoCart comName="Random" />,
      },
      {
        path: "/people",
        element: <PhotoCart comName="People" />,
      },
      {
        path: "/wallpaper",
        element: <PhotoCart comName="Wallpaper" />,
      },
      {
        path: "/3dranders",
        element: <PhotoCart comName="3D Randers" />,
      },
      {
        path: "/travel",
        element: <PhotoCart comName="Travel" />,
      },
      {
        path: "/nature",
        element: <PhotoCart comName="Nature" />,
      },
      {
        path: "/streetphotography",
        element: <PhotoCart comName="Street Photography" />,
      },
      {
        path: "/experimental",
        element: <PhotoCart comName="Experimental" />,
      },
      {
        path: "/textures-patterns",
        element: <PhotoCart comName="Textures & Patterns" />,
      },
      {
        path: "/animals",
        element: <PhotoCart comName="Animals" />,
      },
      {
        path: "/architecture-interiors",
        element: <PhotoCart comName="Architecture & Interiors" />,
      },
      {
        path: "/fashion-beauty",
        element: <PhotoCart comName="Fashion & Beauty" />,
      },
      {
        path: "/flim",
        element: <PhotoCart comName="Flim" />,
      },
      {
        path: "/food-drink",
        element: <PhotoCart comName="Food & Drink" />,
      },
    ],
  },
]);

export default Route;

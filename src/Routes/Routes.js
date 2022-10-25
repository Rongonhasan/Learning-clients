
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Navbar/Blog";
import Courses from "../Navbar/Courses";
import FAQ from "../Navbar/FAQ";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children : [
            {
                path: '/',
                element: <header></header>,
              },
            {
                path: '/courses',
                element: <Courses></Courses>,
              },
              {
                path: '/FAQ',
                element: <FAQ></FAQ>,
              },
              {
                path: '/Blog',
                element: <Blog></Blog>,
              }
        ]
      },
])

import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from "./Home";
import Courses from './Courses'
import Blog from './Blog'

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
          {
            path: '/',
            element: <Home></Home>
          },
          {
            path: '/home',
            element: <Home></Home>
          },
          {
            path: '/courses',
            element: <Courses></Courses>
          },
          {
            path: '/blog',
            element: <Blog></Blog>
          }

        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from "./Home";
import Courses from './Courses'
import Blog from './Blog'
import Login from "./Login";
import Register from "./Register";
import CourseDetails from "./CourseDetails";

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
            element:  
            <Courses></Courses>,
            loader:()=>fetch('https://learning-server-tau.vercel.app/courses')
        
          },
          {
            path: '/blog',
            element: <Blog></Blog>
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/courses/:id',
            element: <CourseDetails></CourseDetails>,
            loader:({params})=>fetch(`https://learning-server-tau.vercel.app/courses/${params.id}`)
          },
          {
            path: '/registar',
            element: <Register></Register>
          }

        ]
    }
])
import React from "react";
import Home from './components/homepage/Home'
import { useRoutes } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/navbar";
import Coaching from "./components/Choaching/choaching";
import Courses from "./components/Courses/Courses";
import Blog from "./components/Blogs/Blog";
import Contact from "./components/Contact Page/Contact";
import Register from "./components/signUp/Register";
import Profile from "./components/UserDetail/Profile";

const Routes = () => {

  
    return useRoutes([
        {
            path: '/',
            element: <Navbar />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/Coaching',
                    element: <Coaching />,
                },
                {
                    path: '/Courses',
                    element: <Courses />
                },
                {
                    path: '/getAllBlog',
                    element: <Blog />
                },
                {
                    path: '/contactus',
                    element: <Contact />
                },
                {
                    path: '/userdashboard',
                    element: <Profile />
                }
            ]
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <Register />
        }
    ])
}

export default Routes;
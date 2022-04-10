import React from "react";
import Home from './components/homepage/Home'
import { useRoutes } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/navbar";
import Coaching from "./components/Choaching/choaching";
import Courses from "./components/Courses/Courses";
import Blog from "./components/Blogs/Blog";
import Contact from "./components/Contact Page/Contact";
import Profile from "./components/UserDetail/Profile";
import Register from "./components/signUp/Register";
import ActivationEmail from "./components/Login/ActivationEmail";
import ForgotPassword from "./components/forgotPassword/ForgotPassword"
import ResetPassword from "./components/forgotPassword/ResetPassword"
import SingleCourse from "./components/Courses/Components/SingleCourse";
import LandingPage from "./components/Courses/Components/LandingPage";

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
                },{
                    path:'/courses/:id',
                    element:<LandingPage />
                },{
                    path:'/courses/watchCourse/:id',
                    element:<SingleCourse />
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
            path: '/register',
            element: <Register />
        },
        {
            path: '/activateEmail/:activation_token',
            element: <ActivationEmail />
            
        },
        {
            path: 'forgot_password',
            element: <ForgotPassword />
            
        },
        {
            path: '/resetPassword/:token',
            element: <ResetPassword />
        },
    ])
}

export default Routes;
import React from "react";
import Home from './components/homepage/Home'
import { useRoutes } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/navbar";
import Coaching from "./components/Choaching/choaching";
import Courses from "./components/Courses/Courses";
import Blog from "./components/Blogs/Blog";
import BlogDetails from "./components/Blogs/BlogDetails";
import AddBlog from "./components/Blogs/AddBlog";
import Contact from "./components/Contact Page/Contact";
import Profile from "./components/UserDetail/Profile";
import Register from "./components/signUp/Register";
import ActivationEmail from "./components/Login/ActivationEmail";
import ForgotPassword from "./components/forgotPassword/ForgotPassword"
import ResetPassword from "./components/forgotPassword/ResetPassword"
import Dashboard from "./components/Dashboard/DashboardMain";
import DashboardHome from "./components/Dashboard/pages/DashboardHome/DashboardHome";
import Coachingdeta from "./components/Choaching/Coachingdeta";

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
                },
                {
                    path: '/AddBlog',
                    element: <AddBlog />
                },
                {
                    path: '/BlogDetails/:id',
                    element: <BlogDetails />
                },
                {
                    path: '/CoachingDetailes/:id',
                    element: <Coachingdeta />
                },
            
                {
                    path: '/Dashboard',
                    element: <Dashboard />,
                    children:[
                        {
                            path: '/Dashboard/home',
                            element: <DashboardHome />
                        },
                    ]
                },
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
            path: '/activateEmailFaculty/:activation_token',
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
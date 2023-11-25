import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home Pages/Home";
import AllClasses from "../Pages/All Classes/AllClasses";
import SignUp from "../Pages/SignUp & Login/SignUp";
import Login from "../Pages/SignUp & Login/Login";
import TechTOLetsSkillUp from "../Pages/Tech To LetsSkillUp/TechTOLetsSkillUp";
import StudentDashboard from "../Dashboard/StudentDashboard/StudentDashboard";
import Dashboard from "../Dashboard/Dashboard";
import ClassDetails from "../Components/Class Details/ClassDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/all-classes',
                element: <AllClasses/>
            },
            {
                path: '/class-details',
                element: <ClassDetails/>
            },
            {
                path: '/techto-letsskillup',
                element: <TechTOLetsSkillUp/>
            }
            
        ]
    },
    {
        path: 'signup',
        element: <SignUp/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: 'dashboard',
        element: <Dashboard/>,
        children: [
            // student dashbaord
            {
                path: 'student-dashboard',
                element: <StudentDashboard/>
            }
        ]
    }
]);
export default router;
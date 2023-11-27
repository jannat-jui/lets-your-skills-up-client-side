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
import AllUsers from "../Dashboard/Admin Dashboard/AllUsers";
import TeacherRequest from "../Dashboard/Admin Dashboard/Teacher Request/TeacherRequest";
import AddClasses from "../Dashboard/Teacher Dashboard/AddClasses";
import MyClass from "../Dashboard/Teacher Dashboard/My Class/MyClass";
import AllClassesAdmin from "../Dashboard/Admin Dashboard/All Classes/AllClassesAdmin";
import MyEnrollClasses from "../Dashboard/StudentDashboard/MyEnrollClasses/MyEnrollClasses";
import UpdateClass from "../Dashboard/Teacher Dashboard/My Class/Update Class/UpdateClass";
import ClassDetailsTeacher from "../Dashboard/Teacher Dashboard/Class Details/ClassDetailsTeacher";
import Payment from "../Dashboard/StudentDashboard/Payment/Payment";
import EnrollClassDetails from "../Dashboard/StudentDashboard/EnrollClass Details/EnrollClassDetails";

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
                path: '/all-classes/:id',
                element: <ClassDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/addclasses/adminroute/approved/${params.id}` , {credentials: 'include'} )
            },
            {
                path: '/payment/:id',
                element: <Payment/>,
                loader: ({params}) => fetch(`http://localhost:5000/addclasses/adminroute/approved/${params.id}`, {credentials: 'include'} )
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
            },
            {
                path: 'enroll-classes',
                element: <MyEnrollClasses/>,
                loader: ()=>fetch('http://localhost:5000/addclasses/adminroute/approved')
            },
            {
                path: 'enroll-classes/:id',
                element: <EnrollClassDetails/>,
            },

            //admin dashbaord
            {
                path: 'users',
                element: <AllUsers/>
            },
            {
                path: 'teacher-request',
                element: <TeacherRequest/>
            },
            {
                path: 'classes',
                element: <AllClassesAdmin/>
            },

            // teacher dashboard

            {
                path: 'addclass',
                element: <AddClasses/>
            },
            {
                path: 'myclass',
                element: <MyClass/>
            },
            {
                path: 'update-class/:id',
                element: <UpdateClass/>
            },
            {
                path: 'myclass/:id',
                element: <ClassDetailsTeacher/>
            }

        ]
    }
]);
export default router;
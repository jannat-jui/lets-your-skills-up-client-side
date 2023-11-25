import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useTeacher from "../Hooks/useTeacher";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isTeacher] = useTeacher();
    return (
        <div className="flex">
        <div className="w-[20rem] min-h-screen bg-[#D1A054] pt-12 px-8">
           
           
            <h1 className="text-black cin font-extrabold text-2xl uppercase">Lets Skill Up</h1>
            <h1 className="text-black cin tracking-[0.4rem] text-lg font-bold  uppercase">Online Education</h1>
        
        
            <ul className="menu w-full px-0 mt-16">
                {
                     isAdmin ? <>
                     <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base" to="/dashboard/adminhome">Admin Home</NavLink></li>
                     <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base" to="/dashboard/teacher-request">Teacher Requests</NavLink></li>
                     <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base" to="/dashboard/users">All Users</NavLink></li>
                 
                     </>



                     :

                     isTeacher ? 'oka teacher' : 
                     <>
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base hover:bg-white " to="/dashboard/userhome">User Home</NavLink></li>
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base hover:bg-white " to="/dashboard/userhome">My Enroll Class</NavLink></li>
                    <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base hover:bg-white " to="/dashboard/userhome">Profile</NavLink></li>
                
                    </>
                }
              
                
                <div className="divider"></div> 
                
                <li><NavLink className="uppercase font-bold cin flex justify-start items-center text-base mt-[1.5rem] hover:bg-white " to="/"> Home</NavLink></li>
               

            </ul>
        </div>

        <div className="flex-1">
            <Outlet></Outlet>
        </div>
        
    </div>
    );
};

export default Dashboard;
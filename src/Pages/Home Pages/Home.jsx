import { useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import Partners from "../../Components/Partners Section/Partners";
import JoinAsATeacher from "./Join As a Teacher/JoinAsATeacher";
import HomeStats from "./Stats/HomeStats";
import StudentFeedback from "./StudentFeedBack/StudentFeedback";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PopularCourses from "./Popular Courses/PopularCourses";


const Home = () => {
    useEffect(()=>{
        AOS.init();
    }, [])
    return (
        <div>
            <Banner/>
            <Partners/>
            <PopularCourses/>
            <StudentFeedback/>
            <HomeStats/>
            <JoinAsATeacher/>
            
        </div>
    );
};

export default Home;
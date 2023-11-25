import Banner from "../../Components/Banner/Banner";
import Partners from "../../Components/Partners Section/Partners";
import JoinAsATeacher from "./Join As a Teacher/JoinAsATeacher";
import PopularCourses from "./Popular Courses/popularCourses";
import HomeStats from "./Stats/HomeStats";
import StudentFeedback from "./StudentFeedBack/StudentFeedback";


const Home = () => {
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
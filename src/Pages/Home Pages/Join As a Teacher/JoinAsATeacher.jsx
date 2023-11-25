
import { Link } from "react-router-dom";
import teacherbg from "../../../assets/images/teacherbg.png"

const JoinAsATeacher = () => {
    return (
        <div className="flex justify-around items-center px-[8%] mt-32">
            <div style={{ border: "5px solid rgba(255, 146, 47, 0.50)" }} className="w-[31rem] h-[31rem] rounded-[50%] flex justify-center items-center overflow-hidden">
                <div className="w-[25rem] h-[25rem] rounded-[50%] bg-[#F0D9CA] relative">
                    <img className="-top-8 absolute -left-10" src={teacherbg} alt="" />
                </div>
            </div>


            <div>
                <h1 className="text-[#000] text-[2.25rem] font-semibold leading-[3.6rem] ">Purchase your awesome <br /> lessons and find your tutors </h1>

                <p className="text-[#6C6C6C] text-lg w-[40rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem habitant a tincidunt cras accumsan integer suscipit. Libero accumsan eget aliquet.</p>

                <div>
                    <Link to='/techto-letsskillup'><button className="btn btn-secondary bg-[#FB9C46] rounded-2xl border-none text-white font-semibold mt-8">Start Teaching Today</button></Link>
                </div>
            </div>

        </div>
    );
};

export default JoinAsATeacher;
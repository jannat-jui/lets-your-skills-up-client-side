
import statbg from "../../../assets/images/statbg.png"
const HomeStats = () => {
    return (
        <div className="flex items-center justify-around px-[8%] mt-32">

            <div className="flex gap-16 ">
                
                <div className="text-center space-y-4 border-2 p-4 rounded-tr-3xl cursor-pointer hover:bg-gray-300">
                    <img className="w-[10rem] h-[8rem]" src={statbg} alt="" />
                    <h1 className="text-4xl text-[#FB9C46] font-bold">200</h1>
                    <p className="text-lg font-medium">Total User</p>
                </div>

                <div className="text-center space-y-4 border-2 p-4 rounded-tr-3xl cursor-pointer hover:bg-gray-300">
                    <img className="w-[10rem] h-[8rem]" src={statbg} alt="" />
                    <h1 className="text-4xl text-[#FB9C46] font-bold">200</h1>
                    <p className="text-lg font-medium">Total Classes</p>
                </div>

                <div className="text-center space-y-4 border-2 p-4 rounded-tr-3xl cursor-pointer hover:bg-gray-300">
                    <img className="w-[10rem] h-[8rem]" src={statbg} alt="" />
                    <h1 className="text-4xl text-[#FB9C46] font-bold">200</h1>
                    <p className="text-lg font-medium">Total Enrollment</p>
                </div>

            </div>


            <div>
                <img src={statbg} alt="" />

            </div>

        </div>
    );
};

export default HomeStats;
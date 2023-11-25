import bannerimage from "../../assets/images/banner-image.png"
import rocket from "../../assets/images/rocket.png"
import award from "../../assets/images/awart.png"

const Banner = () => {
    return (
        <div className="flex justify-between items-center px-[8%] mt-20">

            <div>
                <h1 className="w-[40rem] text-black text-[3rem] font-bold leading-[4.8rem]">Learn Frome Home
                    With <span className="text-[#FB9C46] mr-4"> The Best</span>
                    Online Languange Tutors</h1>

                <p className="w-[47rem] text-[#6C6C6C] text-lg mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Id interdum dui mollis . Suspendisse nulla</p>

                <div>
                    <button className="btn mt-6 btn-success w-[18rem] h-[3.8rem] bg-[#058E6E] text-white text-base font-semibold">Try Free Lessons</button>
                </div>
            </div>


            <div className="relative">
                <div style={{background: "linear-gradient(139deg, #F1C365 7.67%, #F6AE54 40.13%, #FF922F 59.18%)"}} className="w-[28rem] h-[39rem] rounded-[12.75rem] flex justify-center items-center overflow-hidden">
                    <img className="pt-5" src={bannerimage} alt="" />
                </div>


                <img className="absolute -top-20 -left-52 " src={rocket} alt="" />
                <img className="absolute -bottom-32 -right-32 " src={award} alt="" />
            </div>

        </div>
    );
};

export default Banner;
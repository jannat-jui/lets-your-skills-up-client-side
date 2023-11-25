import udemy from "../../assets/images/Udemy_logo.svg.png"
import { Tooltip } from 'react-tooltip';
const Partners = () => {
    return (
        <div className="px-[8%] mt-32 flex items-center gap-12">
            <p className="text-[#230F0F] text-[1.75rem] font-semibold ">We partner with more <br /> than 10+ companies</p>
            
            <div>

            <a id="my-anchor-element"> <img className="w-[8rem] cursor-pointer" src={udemy} alt="" /></a>
            <Tooltip
                anchorSelect="#my-anchor-element"
                content="Hello world!"
            />


            </div>
            
        </div>
    );
};

export default Partners;
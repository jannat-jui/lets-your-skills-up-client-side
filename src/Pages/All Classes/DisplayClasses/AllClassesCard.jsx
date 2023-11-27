
import { Tooltip } from "react-tooltip";
import coursetext from "../../../assets/images/coursetest.png"
import user from "../../../assets/images/user.svg"
import { Link } from "react-router-dom";
const AllClassesCard = ({classs}) => {
    return (
        <div className="w-[23rem] h-[31rem] rounded-lg border-2 border-[#FB9C46] rounded-tr-[5rem] bg-white">

            <div className="relative">
                <img className="rounded-tr-[5rem] h-[16rem] w-full" src={classs?.image} alt="" />

                <div className="w-[4.625rem] h-[2.06rem] flex gap-2 justify-center items-center bg-white  rounded-[1.25rem] absolute top-[13rem] left-4">
                    <img src={user} alt="" />
                    <p>{classs?.enrollCount}</p>
                </div>

            </div>

            <div className="px-4 mt-4 space-y-3">
                <h1 className="w-[20rem] text-xl font-bold">{classs?.title}</h1>

                <p>Instructor Name: {classs?.name}</p>

                <div className="h-[3rem] overflow-hidden cursor-pointer">
                <a id="my-anchor-element">{classs?.description}</a>
                <Tooltip
                    anchorSelect="#my-anchor-element"
                    content={classs?.description}
                />
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-[#DC4298] font-bold text-lg">$ {classs?.price}</p>
                    <Link to={`/all-classes/${classs._id}`}><button className="border-2 w-[10rem] border-[#DC4298] btn btn-outline rounded-lg">Enroll</button></Link>
                </div>
            </div>

        </div>
    );
};

export default AllClassesCard;
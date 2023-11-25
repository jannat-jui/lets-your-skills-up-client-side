
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Provider/AuthProvider";
const TechTOLetsSkillUp = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
         
    }

    return (
        <div className="w-[90vw] mx-auto mt-20">
            <div className="w-[70vw] mx-auto">
                <h1 className="text-black text-center text-[2.5rem] font-semibold">Join as a teacher</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Name</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="name" id="" placeholder="Your name" {...register("name", { required: true })} defaultValue={user?.displayName} />
                    {errors.name && <span>This field is required</span>}

                    {/* Image input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Image</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="photo" id="" placeholder="Your Photo Url" {...register("photo", { required: true })} defaultValue={user?.photoURL} />
                    {errors.photo && <span>This field is required</span>}

                    {/* experienced input  */}

                    <p className="text-[#444] mt-5 text-xl font-semibold">Experience</p>
                    <select className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" {...register("experince", { required: true })}>
                        <option value="">Select...</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Experienced">Experienced</option>
                        <option value="Some Idea">Some Idea</option>
                    </select>
                    {errors.experince && <span>This field is required</span>}


                    {/* Title input  */}

                    <p className="text-[#444] mt-5 text-xl font-semibold">Title</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="title" id="" placeholder="Enter Course Title" {...register("title", { required: true })} />
                    {errors.title && <span>This field is required</span>}

                    {/* category input  */}

                    <p className="text-[#444] mt-5 text-xl font-semibold">Choose Category</p>
                    <select className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" {...register("category", { required: true })}>
                        <option value="">Select...</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Android Development">Android Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Video Editing">Video Editing</option>
                        <option value="Game Development">Game Development</option>
                    </select>
                    {errors.category && <span>This field is required</span>}



                    {/* {errors.password?.type==='minLength' && <span>Password must be 6 character</span>} */}

                    <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#D1A054B3] text-white text-xl font-bold" type="submit" id="" value="Submit For Review" />






                </form>


            </div>

        </div>
    );
};

export default TechTOLetsSkillUp;
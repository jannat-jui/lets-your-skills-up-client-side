import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const SignUp = () => {

  const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.form?.pathname || "/";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { mutate } = useMutation({
    mutationKey: ['food'],
    mutationFn: (addingData) => {
      return axios.post('http://localhost:5000/users', addingData, { withCredentials: true, })
    },
    onSuccess: () => {
      Swal.fire({
        title: 'Success!',
        text: 'Food Added Successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }

  })

  const onSubmit = async (data) => {
    console.log(data)

    createUser(data.email, data.password)
      .then(result => {
        console.log(result.user)

        updateUserProfile(data.name, data.image)
          .then((() => {
            mutate({
              name: data.name,
              email: data.email,
              photo: data.image
            })
            navigate(from, {replace: true})
            reset()
          }))
      })
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user)
        mutate({
          email: result.user?.email,
          name: result.user?.displayName,
          photo: result.user?.photoURL,
        })
        navigate(from, { replace: true })
      })
  }


  return (
    <div>
      <div className="w-[28rem]">
        <h1 className="text-black text-center text-[2.5rem] font-semibold">Sign Up</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          <p className="text-[#444] mt-5 text-xl font-semibold">Name</p>

          <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="name" id="" placeholder="Your name" {...register("name", { required: true })} />

          {errors.name && <span>This field is required</span>}

          <p className="text-[#444] mt-5 text-xl font-semibold">Photo</p>
          <div>
            <input type="text" {...register("image", { required: true })} name="image" className="file-input file-input-bordered file-input-warning w-full mt-2 h-[3.5rem]" />
          </div>

          {errors.image && <span>This field is required</span>}

          <p className="text-[#444] mt-5 text-xl font-semibold">Email</p>

          <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="email" name="email" id="" placeholder="Type here" {...register("email", { required: true })} />

          <p className="text-[#444]  text-xl mt-4 font-semibold">Password</p>

          <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="password" name="password" id="" placeholder="Enter your password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} />

          {errors.password?.type === 'minLength' && <span>Password must be 6 character</span>}


          <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#D1A054B3] text-white text-xl font-bold" type="submit" id="" value="Sign Up" />

          <p className="text-[#D1A054] mt-5 text-center text-xl font-medium">Already have an account? <Link to='/login'><span className="font-bold">Log in</span></Link></p>

          <p className="text-[#444] mt-5 text-xl font-medium text-center">Or sign in with</p>

          <div className="flex items-center justify-center gap-14 mt-5">

            <div onClick={handleGoogleSignIn} className="w-[3.25rem] hover:bg-white cursor-pointer btn-neutral h-[3.25rem] bg-[#F1F2F4] border-2 flex justify-center items-center border-black rounded-[50%] ">
              <img src="" alt="" />
            </div>


          </div>
        </form>


      </div>
    </div>
  );
};

export default SignUp;
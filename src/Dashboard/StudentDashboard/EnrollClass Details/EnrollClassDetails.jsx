import { useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@material-tailwind/react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../../../Provider/AuthProvider";


const EnrollClassDetails = () => {
    const { id } = useParams()
    const classData = useLoaderData();
    console.log(classData)
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0)
    const handleOpen = () => setOpen(!open);
    const {user} = useContext(AuthContext);
    console.log(user)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    console.log(id)
    const axiosPublic = useAxiosPublic()
    const { data: assignments = [], refetch } = useQuery({
        queryKey: ['assignments'],
        queryFn: async () => {
            const res = await axiosPublic.get('/assignments')
            return res.data;
        }
    })
    console.log(assignments)
    const filterAssignment = assignments.filter(item => item.classId === id)
    console.log(filterAssignment)
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setRating(newRating)
    };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { mutate } = useMutation({
        mutationKey: ['food'],
        mutationFn: (addingData) => {
              return axios.post('http://localhost:5000/feedbacks', addingData, { withCredentials: true, })
        },
        onSuccess: () => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Assignment Added",
                showConfirmButton: false,
                timer: 1500
            });
            handleOpen()
        }

    })
    const onSubmit = async (data) => {
        console.log(data)
        mutate({
            
            description: data.description,
            rating: rating,
            classId: id,
            userName: user?.displayName,
            userEmail: user?.email,
            userPhoto: user?.photoURL,
            classTitle: classData?.title



          })
          reset()


    }

    return (
        <div>

            <div>
                <Button onClick={handleOpen} variant="gradient">
                    Teaching Evaluation Report
                </Button>
                <Dialog
                    open={open}
                    handler={handleOpen}
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}
                >
                    <DialogHeader>Teaching Evaluation Report</DialogHeader>
                    <DialogBody>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <p className="text-[#444] mt-5 text-xl font-semibold">Description</p>

                            <input className="w-full mt-2 h-[4.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="description" id="" placeholder="Enter Description" {...register("description", { required: true })} />
                            {errors.description && <span>This field is required</span>}

                            <p className="text-[#444] mt-5 text-xl font-semibold">Rating</p>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={44}
                                activeColor="#ffd700"
                            />



                            <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#D1A054B3] text-white text-xl font-bold" type="submit" id="" value="Send" />


                        </form>
                    </DialogBody>
                    <DialogFooter>

                        <Button variant="gradient" color="green" onClick={handleOpen}>
                            <span>Cancel</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </div>

            <div className="overflow-x-auto rounded-tl-2xl rounded-tr-2xl mt-8">
                <table className="table  rounded-tl-2xl rounded-tr-2xl">
                    {/* head */}
                    <thead className="bg-gray-400 h-[4.5rem] rounded-tl-2xl rounded-tr-2xl">
                        <tr>
                            <th className="text-white font-semibold"></th>

                            <th className="text-white font-semibold">Title</th>
                            <th className="text-white font-semibold">Description</th>
                            <th className="text-white font-semibold">Deadline</th>
                            <th className="text-white font-semibold">Submit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            filterAssignment.map((assignment, index) => <tr key={assignment._id}>
                                <th>{index + 1}</th>

                                <td>{assignment?.title}</td>
                                <td>{assignment?.description}</td>
                                <td>{assignment?.deadline}</td>

                                {/* <td className="">
                                    {
                                        assignment.role === 'admin' ? <button disabled className="btn  rounded-md  btn-neutral border-none btn-xs">Make Admin</button> : <button  className="btn  rounded-md  btn-neutral border-none btn-xs">Make Admin</button>
                                    }

                                </td> */}



                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default EnrollClassDetails;
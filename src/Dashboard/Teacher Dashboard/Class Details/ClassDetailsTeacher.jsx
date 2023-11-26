import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ClassDetailsTeacher = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const {id} = useParams();
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
          return axios.post('http://localhost:5000/assignments', addingData, { withCredentials: true, })
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
            title: data.title,
            deadline: data.deadline,
            description: data.description,
            classId: id

          })
          reset()


    }


    return (
        <div>



            <div>
                <Button onClick={handleOpen} variant="gradient">
                    Create
                </Button>
                <Dialog
                    open={open}
                    handler={handleOpen}
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}
                >
                    <DialogHeader>Create Class Assignment</DialogHeader>
                    <DialogBody>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <p className="text-[#444] mt-5 text-xl font-semibold">Title</p>

                            <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="title" id="" placeholder="Enter Title" {...register("title", { required: true })} />
                            {errors.title && <span>This field is required</span>}

                            <p className="text-[#444] mt-5 text-xl font-semibold">Deadline</p>

                            <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="datetime-local" name="deadline" id="" placeholder="Enter Deadline" {...register("deadline", { required: true })} />
                            {errors.deadline && <span>This field is required</span>}


                            <p className="text-[#444] mt-5 text-xl font-semibold">Description</p>

                            <input className="w-full mt-2 h-[6.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="description" id="" placeholder="Enter Description" {...register("description", { required: true })} />
                            {errors.description && <span>This field is required</span>}
                           
                           
                            <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#D1A054B3] text-white text-xl font-bold" type="submit" id="" value="Create" />

                            
                        </form>
                    </DialogBody>
                    <DialogFooter>
                       
                        <Button variant="gradient" color="green" onClick={handleOpen}>
                            <span>Cancel</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </div>

        </div>
    );
};

export default ClassDetailsTeacher;
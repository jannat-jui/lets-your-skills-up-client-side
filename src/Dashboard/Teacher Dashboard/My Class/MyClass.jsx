import { Link } from "react-router-dom";
import useClass from "../../../Hooks/useClass";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyClass = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // const [classs, refetch] = useClass();

    const axiosSecure = useAxiosSecure();

    const { user } = useContext(AuthContext);
    const { refetch, data: classs = [] } = useQuery({
        queryKey: ['classs', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/addclasses?email=${user.email}`);
            return res.data;
        }
    })

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/addclasses/${item._id}`)
                // console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }






    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
                {
                    classs.map(classss => <Card key={classss._id} className="w-96">
                        <CardHeader floated={false} className="h-80">
                            <img className="w-full" src={classss?.image} alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-left">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Title: {classss?.title}
                            </Typography>
                            <Typography className="font-medium text-black mt-3" textGradient>
                                Name: {classss?.name}
                            </Typography>
                            <Typography color="blue-gray" className="font-medium text-black mt-2" textGradient>
                                Email: {classss?.email}
                            </Typography>

                            <Typography color="blue-gray" className="font-medium text-black mt-2" textGradient>
                                Price: ${classss?.price}
                            </Typography>

                            <Typography color="blue-gray" className="font-medium h-[3rem] mt-2 overflow-hidden" textGradient>
                                Description: {classss?.description}
                            </Typography>


                            <Typography className="flex gap-5">

                                {
                                    classss.status === 'approved' && <button className="mt-4 btn btn-neutral bg-green-500 border-none text-white text-lg flex-1">Accepted</button>

                                }
                                {
                                    classss.status === 'rejected' && <button className="mt-4 btn btn-error bg-red-500 text-white text-lg flex-1">Rejected</button>

                                }
                                {
                                    classss.status === 'pending' && <button className="mt-4 btn btn-error bg-orange-800 text-white text-lg flex-1">Pending</button>

                                }
                                <Link to={`/dashboard/update-class/${classss._id}`}><button className="mt-4 btn btn-error text-white text-lg flex-1">Update</button></Link>
                                <button onClick={() => handleDeleteItem(classss)} className="mt-4 btn btn-error text-white text-lg flex-1">Delete</button>
                            </Typography>

                            <Typography color="blue-gray" className="font-medium" textGradient>
                                {
                                    classss.status === 'approved' ? <Link to={`/dashboard/myclass/${classss._id}`}><button className="mt-4 btn btn-error text-white text-lg w-full">See Details</button></Link>
                                        :
                                        <button disabled className="mt-4 btn btn-error text-white text-lg w-full">See Details</button>
                                }
                            </Typography>


                        </CardBody>

                    </Card>)
                }
            </div>
            

        </div>
    );
};

export default MyClass;
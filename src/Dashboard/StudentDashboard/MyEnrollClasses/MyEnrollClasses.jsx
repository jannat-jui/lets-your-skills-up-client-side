import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link, useLoaderData } from "react-router-dom";

const MyEnrollClasses = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
const classData = useLoaderData()
console.log(classData)
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })
    console.log(payments)

   const filterData = (arr1, arr2) => {
    return arr1.filter(item1 =>
      arr2.some(item2 => item2.courseId === item1._id)
    );
  };
  const filteredData = filterData(classData, payments);


   console.log('------------>', filteredData)


    return (
        <div>

            <div>
                {
                    filteredData?.map(item=><Card  key={item._id} className="mt-6 w-96 relative">
                    <CardHeader color="blue-gray" className="relative h-56">
                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                        />
    
                    </CardHeader>
    
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {item?.title}
                        </Typography>
                        <Typography>
                            Instructor: Nahid Alam {item._id}
                        </Typography>
    
    
                    </CardBody>
    
                    <div className='flex justify-between items-center'>
    
                        <CardFooter className="pt-0">
                           <Link to={`/dashboard/enroll-classes/${item._id}`}> <Button>Continue</Button></Link>
                        </CardFooter>
                    </div>
                </Card>)
                }
            </div>

        </div>
    );
};

export default MyEnrollClasses;
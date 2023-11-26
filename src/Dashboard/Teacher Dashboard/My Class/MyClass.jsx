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

const MyClass = () => {
    const [classs, refetch] = useClass();
    console.log(classs)
    const axiosSecure = useAxiosSecure();

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
        <div className="grid grid-cols-2">
            {
                classs.map(classs => <Card key={classs._id} className="w-96">
                    <CardHeader floated={false} className="h-80">
                        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                    </CardHeader>
                    <CardBody className="text-left">
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                           Title: Natalie Paisley
                        </Typography>
                        <Typography color="blue-gray" className="font-medium" textGradient>
                            Name
                        </Typography>
                        <Typography color="blue-gray" className="font-medium" textGradient>
                            Email
                        </Typography>

                        <Typography color="blue-gray" className="font-medium" textGradient>
                            Price
                        </Typography>

                        <Typography color="blue-gray" className="font-medium" textGradient>
                            Description
                        </Typography>

                        
                        <Typography className="flex gap-5">
                            
                        {
                            classs.status==='approved' && <button className="mt-4 btn btn-error text-white text-lg flex-1">Accepted</button> 
                        
                        }
                        {
                            classs.status==='rejected' && <button className="mt-4 btn btn-error text-white text-lg flex-1">Rejected</button> 
                        
                        }
                        {
                            classs.status==='pending' && <button className="mt-4 btn btn-error text-white text-lg flex-1">Pending</button> 
                        
                        }
                        <Link to={`/dashboard/update-class/${classs._id}`}><button className="mt-4 btn btn-error text-white text-lg flex-1">Update</button></Link>
                        <button onClick={()=>handleDeleteItem(classs)} className="mt-4 btn btn-error text-white text-lg flex-1">Delete</button>
                        </Typography>

                        <Typography color="blue-gray" className="font-medium" textGradient>
                        <button className="mt-4 btn btn-error text-white text-lg w-full">See Details</button>
                        </Typography>

                    </CardBody>

                </Card>)
            }
        </div>
    );
};

export default MyClass;
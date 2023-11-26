import useClass from "../../../Hooks/useClass";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

const MyClass = () => {
    const [classs, refetch] = useClass();
    console.log(classs)
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
                        <button className="mt-4 btn btn-error text-white text-lg flex-1">update</button>
                        <button className="mt-4 btn btn-error text-white text-lg flex-1">delete</button>
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
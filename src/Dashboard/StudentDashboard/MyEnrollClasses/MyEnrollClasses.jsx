import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Tooltip } from "react-tooltip";

const MyEnrollClasses = () => {
    return (
        <div>

<Card className="mt-6 w-96 relative">
                        <CardHeader color="blue-gray" className="relative h-56">
                            <img
                                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                alt="card-image"
                            />

                        </CardHeader>
                        
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                UI/UX Review Check
                            </Typography>
                            <Typography>
                                Instructor: Nahid Alam
                            </Typography>
                           

                        </CardBody>

                        <div className='flex justify-between items-center'>
                            
                            <CardFooter className="pt-0">
                                <Button>Continue</Button>
                            </CardFooter>
                        </div>
                    </Card>
            
        </div>
    );
};

export default MyEnrollClasses;
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

const TeacherRequest = () => {
    const axiosSecure = useAxiosSecure()
    const { data: teachers = [], refetch } = useQuery({
        queryKey: ['teachers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/teacherrequest')
            return res.data;
        }
    })
    console.log(teachers)

    const handleApprove = (teacher) => {
        axiosSecure.patch(`/teacherrequest/teacher/${teacher._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                alert('he is teacher now')
                
            }
        })
    }
    return (
        <div className="grid grid-cols-2">
            {
                teachers.map(teacher => <Card key={teacher._id} className="w-96">
                    <CardHeader floated={false} className="h-80">
                        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            Natalie Paisley
                        </Typography>
                        <Typography color="blue-gray" className="font-medium" textGradient>
                            Beginner Level Experience
                        </Typography>

                        <Typography variant="h5" color="blue-gray" className="mb-2 mt-3">
                            Title: Web Development
                        </Typography>
                        <Typography color="blue-gray" className="font-medium" textGradient>
                            CAtegory:
                        </Typography>

                        <Typography className="flex gap-5">
                            {
                                teacher.role === 'teacher' ? 'Teacher' :  <button onClick={() => handleApprove(teacher)} className="mt-4 btn btn-success text-white text-lg flex-1">Approve</button>
                            }
                           

                            <button className="mt-4 btn btn-error text-white text-lg flex-1">Reject</button>
                        </Typography>

                    </CardBody>

                </Card>)
            }
        </div>
    );
};

export default TeacherRequest;
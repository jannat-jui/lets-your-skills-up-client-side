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
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    alert('he is teacher now')

                }
            })
    }
    return (

        <div>
            <div className="overflow-x-auto rounded-tl-2xl rounded-tr-2xl mt-8">
                <table className="table  rounded-tl-2xl rounded-tr-2xl">
                    {/* head */}
                    <thead className="bg-gray-400 h-[4.5rem] rounded-tl-2xl rounded-tr-2xl">
                        <tr>
                            <th className="text-white font-semibold"></th>
                            <th className="text-white font-semibold">Name</th>
                            <th className="text-white font-semibold">Image</th>
                            <th className="text-white font-semibold">Experience</th>
                            <th className="text-white font-semibold">Title</th>
                            <th className="text-white font-semibold">Category</th>
                            <th className="text-white font-semibold">Status</th>
                            <th className="text-white font-semibold">Approve</th>
                            <th className="text-white font-semibold">Rejeect</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            teachers.map((teacher, index) => <tr key={teacher._id}>
                                <th>{index + 1}</th>
                                <th>jannat jui</th>
                                <td></td>
                                <td>experce</td>
                                <td>title</td>
                                <td>category</td>
                                <td>status</td>
                                <td>{
                                    teacher.role === 'teacher' ? 'Teacher' : <button onClick={() => handleApprove(teacher)} className="mt-4 btn btn-success text-white text-lg flex-1">Approve</button>
                                }</td>

                                <td><button className="mt-4 btn btn-error text-white text-lg flex-1">Reject</button></td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherRequest;
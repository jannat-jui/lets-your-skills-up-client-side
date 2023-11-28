import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import Swal from "sweetalert2";

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

    // const handleApprove = (teacher) => {
    //     axiosSecure.patch(`/teacherrequest/teacher/${teacher._id}`)
    //         .then(res => {
    //             console.log(res.data)
    //             if (res.data.modifiedCount > 0) {
    //                 refetch()
    //                 alert('he is teacher now')

    //             }
    //         })
    // }

    const handleApprove = teacher => {
        const updateRole = {
            role: 'teacher'
        }
        axiosSecure.put(`/teacherrequest/teacher/${teacher._id}`, updateRole)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Teacher Request Approved",
                        showConfirmButton: false,
                        timer: 1500
                      });

                }
            })
    }

    const handleReject = teacher => {
        const updateRole = {
            role: 'rejected'
        }
        axiosSecure.put(`/teacherrequest/teacher/${teacher._id}`, updateRole)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Teacher Request Rejected",
                        showConfirmButton: false,
                        timer: 1500
                      });

                }
            })
    }

    return (

        <div>
            <div className="overflow-x-auto rounded-tl-2xl rounded-tr-2xl mt-20 mx-[5%]">
                <table className="table  rounded-tl-2xl rounded-tr-2xl ">
                    <thead className="bg-orange-300 text-xl h-[4.5rem] rounded-tl-2xl rounded-tr-2xl">
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
                                <th>{teacher?.name}</th>
                                <td></td>
                                <td>experce</td>
                                <td>title</td>
                                <td>{teacher.status}</td>
                                <td>{teacher.role==='teacher' ? 'accepted' : teacher.role==='rejected'? 'rejected': 'pending'}</td>
                                <td>{
                                    teacher.role === 'teacher' || teacher.role==='rejected' ? <button disabled className="mt-4 btn btn-success text-white text-lg flex-1">Approve</button> : 
                                    
                                    <button onClick={() => handleApprove(teacher)} className="mt-4 btn btn-success text-white text-lg flex-1">Approve</button>
                                    
                                }</td>

                                <td>{
                                    teacher.role === 'rejected' || teacher.role==='teacher' ? <button disabled className="mt-4 btn btn-success text-white text-lg flex-1">Reject</button> : <button onClick={() => handleReject(teacher)} className="mt-4 btn btn-error text-white text-lg flex-1">Reject</button>
                                }</td>



                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherRequest;
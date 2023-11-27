import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@material-tailwind/react";


const EnrollClassDetails = () => {
    const { id } = useParams()
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
    return (
        <div>

            <div>
                <Button className="btn btn-secondary">Teaching Evaluation Report</Button>
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
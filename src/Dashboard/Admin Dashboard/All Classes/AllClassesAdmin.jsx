import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AllClassesAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/addclasses/adminroute')
            return res.data;
        }
    })
    console.log(classes)

    const handleMakeApprove = classs =>{
        const updateStatus={
            status:'approved'
        }
        axiosSecure.put(`/addclasses/adminroute/admin/${classs._id}`, updateStatus)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Class Approved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                
            }
        })
    }

    const handleReject = classs =>{
        const updateStatus={
            status:'rejected'
        }
        axiosSecure.put(`/addclasses/adminroute/admin/${classs._id}`, updateStatus)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Class is Rejected",
                    showConfirmButton: false,
                    timer: 1500
                  });
                
            }
        })
    }

    

    return (
        <div className="mx-[5%] pt-12">
           <h1 className="text-center text-3xl">All Classes</h1>

           <div>
           <div className="overflow-x-auto rounded-tl-2xl rounded-tr-2xl mt-8">
                        <table className="table  rounded-tl-2xl rounded-tr-2xl">
                            {/* head */}
                            <thead className="bg-orange-300 text-lg h-[4.5rem] rounded-tl-2xl rounded-tr-2xl">
                                <tr>
                                    <th className="text-white font-semibold"></th>
                                    <th className="text-white font-semibold">Title</th>
                                    <th className="text-white font-semibold">Image</th>
                                    <th className="text-white font-semibold">Email</th>
                                    <th className="text-white font-semibold">Short Description</th>
                                    <th className="text-white font-semibold">Approve</th>
                                    <th className="text-white font-semibold">Reject</th>
                                    <th className="text-white font-semibold">See Progress</th>
                                  
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    classes.map((classs, index)=><tr key={classs._id}>
                                        <th>{index+1}</th>
                                        <td>{classs.title}</td>
                                        <th><img className="w-[6rem] h-[4rem]" src={classs?.image} alt="" /></th>
                                        <td>{classs.email}</td>
                                        <td className="">{classs.description}</td>
                                        <td>{
                                            classs.status==='approved' ? <button disabled className="btn  rounded-md  btn-neutral border-none btn-sm">Approve</button> :  <button onClick={()=>handleMakeApprove(classs)} className="btn  rounded-md  btn-success text-white border-none btn-sm">Approve</button>
                                           }</td>
                                        
                                        <td>{
                                            classs.status==='rejected' ? <button disabled className="btn  rounded-md  btn-error border-none btn-sm">Rejected</button> :  <button onClick={()=>handleReject(classs)} className="btn  rounded-md  btn-error text-white border-none btn-sm">Rejected</button>
                                           }</td>
                                        <td>{classs.status==='approved' ? <Link to={`/dashboard/classes/${classs._id}`}><button className="btn btn-md btn-info">See Prograss</button></Link> : <button disabled className="btn btn-md">See Progress</button>}
                                            </td>
                                       
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>

           </div>


            
        </div>
    );
};

export default AllClassesAdmin;
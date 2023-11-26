import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


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
                alert('class is approved')
                
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
                alert('class is rrejected')
                
            }
        })
    }

    

    return (
        <div>
           <h1 className="text-center text-3xl">All Classes</h1>

           <div>
           <div className="overflow-x-auto rounded-tl-2xl rounded-tr-2xl mt-8">
                        <table className="table  rounded-tl-2xl rounded-tr-2xl">
                            {/* head */}
                            <thead className="bg-gray-400 h-[4.5rem] rounded-tl-2xl rounded-tr-2xl">
                                <tr>
                                    <th className="text-white font-semibold"></th>
                                    <th className="text-white font-semibold">Image</th>
                                    <th className="text-white font-semibold">Title</th>
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
                                        <th><img src={classs?.image} alt="" /></th>
                                        <td>{classs.title}</td>
                                        <td>{classs.email}</td>
                                        <td>{classs.description}</td>
                                        <td>{
                                            classs.status==='approved' ? 'approved' :  <button onClick={()=>handleMakeApprove(classs)} className="btn  rounded-md  btn-neutral border-none btn-xs">Approve</button>
                                           }</td>
                                        
                                        <td>{
                                            classs.status==='rejected' ? 'rejected' :  <button onClick={()=>handleReject(classs)} className="btn  rounded-md  btn-error border-none btn-xs">Rejected</button>
                                           }</td>
                                        <td>{classs.status==='approved' ? <button className="btn">progress</button> : <button disabled className="btn">progress</button>}
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
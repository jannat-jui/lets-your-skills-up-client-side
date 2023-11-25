import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    console.log(users)

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                alert('he is admin now')
                
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
                                    <th className="text-white font-semibold">Image</th>
                                    <th className="text-white font-semibold">Name</th>
                                    <th className="text-white font-semibold">Email</th>
                                    <th className="text-white font-semibold">Role</th>
                                  
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    users.map((user, index)=><tr key={user._id}>
                                        <th>{index+1}</th>
                                        <th><img src={user?.photo} alt="" /></th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                       
                                       
                                        <td className="">
                                           {
                                            user.role==='admin' ? 'Admin' :  <button onClick={()=>handleMakeAdmin(user)} className="btn  rounded-md  btn-neutral border-none btn-xs">Make Admin</button>
                                           }
                                        
                                        </td>
                                       
                                        
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>

            
        </div>
    );
};

export default AllUsers;
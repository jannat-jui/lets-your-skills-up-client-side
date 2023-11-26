import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";


const AllUsers = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (e)=>{
        e.preventDefault();
         const search = e.target.search.value;
         setSearch(search)
    }
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?search=${search.toString()}`)
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
            <div>
            <form onSubmit={handleSearch} className="flex mt-6">
                            <input type="text" name="search" placeholder="Search Here" className="input input-bordered input-success w-full rounded-r-none max-w-xs bg-white" />
                            
                            <input className="btn rounded-l-none  btn-success text-black capitalize text-lg" type="submit" value="search" />
                            </form>
            </div>
            <div className="overflow-x-auto rounded-tl-2xl rounded-tr-2xl mt-8">
                        <table className="table  rounded-tl-2xl rounded-tr-2xl">
                            {/* head */}
                            <thead className="bg-gray-400 h-[4.5rem] rounded-tl-2xl rounded-tr-2xl">
                                <tr>
                                    <th className="text-white font-semibold"></th>
                                    
                                    <th className="text-white font-semibold">Name</th>
                                    <th className="text-white font-semibold">Email</th>
                                    <th className="text-white font-semibold">Image</th>
                                    <th className="text-white font-semibold">Role</th>
                                  
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    users.map((user, index)=><tr key={user._id}>
                                        <th>{index+1}</th>
                                        
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <th><img src={user?.photo} alt="" /></th>
                                       
                                        <td className="">
                                           {
                                            user.role==='admin' ? <button disabled className="btn  rounded-md  btn-neutral border-none btn-xs">Make Admin</button> :  <button onClick={()=>handleMakeAdmin(user)} className="btn  rounded-md  btn-neutral border-none btn-xs">Make Admin</button>
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
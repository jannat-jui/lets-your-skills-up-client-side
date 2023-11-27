import { useQuery } from "@tanstack/react-query";
import DisplayAllClasses from "./DisplayClasses/DisplayAllClasses";
import axios from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const AllClasses = () => {
    const axiosPublic = useAxiosPublic()
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosPublic.get('/addclasses/adminroute/approved')
            return res.data;
        }
    })
    console.log(classes)
    return (
        <div className="px-[8%]">

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-20 pt-20 justify-items-center items-center gap-8">
                {
                    classes.map(classs=><DisplayAllClasses classs={classs} key={classs._id}/>)
                }
            </div>
            
        </div>
    );
};

export default AllClasses;
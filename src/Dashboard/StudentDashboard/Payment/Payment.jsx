import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    const {id} = useParams()

    const axiosPublic = useAxiosPublic()
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosPublic.get('/addclasses/adminroute/approved')
            return res.data;
        }
    })
    const classData = classes.find(item=>item._id===id)
    console.log(classData)
    const price = parseFloat(classData?.price)
    // console.log(price)
    return (
        <div>
            <h1>please payment</h1>
            
            <div>
            <Elements stripe={stripePromise}>
                    <CheckOutForm classData={classData} price={price}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
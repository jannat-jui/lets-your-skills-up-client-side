import profile from "../../assets/images/Profile.svg"
import play from "../../assets/images/Play.svg"
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
const ClassDetails = () => {
    return (
        <div>
            <Card className="w-full max-w-[80vw] mx-auto mt-32 flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                        <div className="flex items-center gap-2 text-lg">
                            <img src={profile} alt="" />
                            <p>120 Students</p>
                        </div>
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Lyft launching cross-platform service this week
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                        Like so many organizations these days, Autodesk is a company in
                        transition. It was until recently a traditional boxed software company
                        selling licenses. Yet its own business model disruption is only part
                        of the story
                    </Typography>
                   
                    <Typography className="mb-8 font-normal flex items-center gap-3">
                        <img className="w-[4rem] h-[4rem] rounded-[50%]" src={play} alt="" />
                        <h1 className="text-xl font-medium">Md Nahid Alam Instructor</h1>
                    </Typography>

                    <Typography className=" flex justify-between items-center gap-3">
                       <p className="text-[#FB9C46] font-bold text-3xl">$ 300</p>
                       <button className="btn btn-neutral bg-[#FB9C46] border-none text-white text-lg w-[9rem]">Pay</button>
                    </Typography>
                    

                </CardBody>
            </Card>
        </div>
    );
};

export default ClassDetails;
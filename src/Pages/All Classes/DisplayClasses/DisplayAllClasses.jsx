import AllClassesCard from "./AllClassesCard";


const DisplayAllClasses = ({classs}) => {
    return (
        <div className="mt-32 grid">
            <AllClassesCard classs={classs}/>
            
        </div>
    );
};

export default DisplayAllClasses;
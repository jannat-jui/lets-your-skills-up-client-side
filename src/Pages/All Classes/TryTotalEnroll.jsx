import { useEffect, useState } from "react";


const TryTotalEnroll = () => {
    const [enrollments, setEnrollments] = useState([]);
    useEffect(() => {
        // Fetch enrollments from the server
        fetch('https://b8a12-server-side-jannat-jui.vercel.app/api/enrollments')
            .then((response) => response.json())
            .then((data) => setEnrollments(data))
            .catch((error) => console.error('Error fetching enrollments:', error));
    }, []);
    return (
        <div>
            <h2>Enrollment List</h2>
            <ul>
                {enrollments?.map((enrollment) => (
                    <li key={enrollment.courseId}>
                        {enrollment.courseName}: {enrollment.totalEnrollments} students
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TryTotalEnroll;
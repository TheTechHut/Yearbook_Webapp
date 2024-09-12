import React, { useEffect, useState } from "react";
import StudentsData from "./StudentsData";
import "./StudentStyles.css";
import white_arrow from '../assets/white-arrow.png';

function Student() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        async function fetchStudents() {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/students/');
                const data = await response.json();
                console.log('Students data received:', data);  // Log the received data
                setStudents(data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        }
        fetchStudents();
    }, []);

    if (students.length === 0) {
        return <p>No students found</p>;
    }

    return (
        <div className="trip">
            <h1>Meet Our Students</h1>
            <p>Their Year, Their EBook, Their Legacy</p>
            <div className="trip-card">
                {students.map((student) => (
                    <StudentsData
                        key={student.id}
                        image={student.photo}  // Display the student photo
                        heading={student.name}  // Display the student name
                        text={`Class: ${student.student_class}, Email: ${student.email}`}  // Display more details
                    />
                ))}
            </div>
            <button className='dark-btn'>
                See more here <img src={white_arrow} alt="" />
            </button>
        </div>
    );
}

export default Student;

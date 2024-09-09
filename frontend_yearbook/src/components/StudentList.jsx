import React, { useEffect, useState } from 'react';
import api from '../api';
import './StudentList.css'; // Import a CSS file for additional styling

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await api.get('students/');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="student-list-container">
      <h1 className="page-title">Student List</h1>
      <div className="student-list">
        {students.map(student => (
          <div key={student.id} className="student-card">
            {student.photo && (
              <img 
                src={student.photo} 
                alt={student.name} 
                className="student-photo"
              />
            )}
            <div className="student-info">
              <h3 className="student-name">{student.name}</h3>
              <p className="student-class">Class: {student.student_class}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;

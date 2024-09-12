import React, { useState } from 'react';
import axios from 'axios';
import './StudentDetails.css'; // Import CSS 
import { useNavigate } from 'react-router-dom'; // For redirection

const StudentDetails = () => {
  const [formData, setFormData] = useState({
    student_class: '',
    name: '',
    photo: null,
  });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({
        ...formData,
        photo: files[0], // Handle file upload
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentId = localStorage.getItem('studentId'); // Assuming the ID is stored on signup
    
    const form = new FormData(); // Use FormData to handle file uploads
    form.append('student_class', formData.student_class);
    form.append('name', formData.name);
    if (formData.photo) {
      form.append('photo', formData.photo); // Append photo if present
    }

    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/students/${studentId}/update/`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setMessage('Student details updated successfully!');
        // Redirect to the next step
        navigate('/projects/create');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data); // Show errors 
      } else {
        setMessage('Failed to update student details.');
      }
    }
  };

  return (
    <div className="student-details-container">
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name[0]}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="student_class">Class:</label>
          <input
            type="text"
            id="student_class"
            name="student_class"
            value={formData.student_class}
            onChange={handleChange}
            required
          />
          {errors.student_class && <p className="error">{errors.student_class[0]}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="photo">Upload Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
          {errors.photo && <p className="error">{errors.photo[0]}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default StudentDetails;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddDetails.css'; 

const AddDetails = () => {
  const [formData, setFormData] = useState({
    student_class: '',
    name: '',
    photo: null
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('student_class', formData.student_class);
    data.append('name', formData.name);
    data.append('photo', formData.photo);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/students/add-details/', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 201) {
        setMessage('Student details updated successfully!');
        //navigate('/project/create'); // Redirect to project creation
      }
    } catch (error) {
      setMessage('Failed to update student details.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-details-container">
      <form className="add-details-form" onSubmit={handleSubmit}>
        <h2>Add Student Details</h2>
        <div className="form-group">
          <label>Class:</label>
          <input type="text" name="student_class" value={formData.student_class} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Photo:</label>
          <input type="file" name="photo" onChange={handleFileChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddDetails;

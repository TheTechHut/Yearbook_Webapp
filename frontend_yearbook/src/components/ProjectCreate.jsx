import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProjectCreate = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/projects/', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`  // Assuming token is stored after login
        }
      });
      if (response.status === 201) {
        setMessage('Project created successfully!');
        navigate('/portfolio');  // Redirect to portfolio page or wherever you want
      }
    } catch (error) {
      setMessage('Project creation failed.');
    }
  };

  return (
    <div>
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <button type="submit">Create Project</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProjectCreate;

import React, { useState } from 'react';
import api from '../api';
import './StudentForm.css'; // Import the CSS file

const StudentForm = () => {
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('student_class', studentClass);
    formData.append('email', email);
    if (photo) {
      formData.append('photo', photo);
    }

    try {
      await api.post('students/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Optionally, handle success (e.g., reset form or show a success message)
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={studentClass}
        onChange={(e) => setStudentClass(e.target.value)}
        placeholder="Class"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="file"
        onChange={(e) => setPhoto(e.target.files[0])}
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;

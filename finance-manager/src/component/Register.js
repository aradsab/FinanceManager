import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import PersonalInfo from './PersonalInfo';
import TransactionForm from './TransactionFrom';
import ExpenseForm from './ExpenseForm';

function Register() {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
        navigate('/login');
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="flex-grow">
        <h2 className="text-center text-xl font-bold mb-4">Register</h2>
        <PersonalInfo />
        <TransactionForm />
        <ExpenseForm />
      </div>
      <div className="flex justify-center mb-6 gap-4">
        <button
          onClick={() => navigate('/login')} // Navigate back to login
          className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
        >
          Back to Login
        </button>
        <button
          onClick={handleSubmit} // Submit and navigate to web app
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Register;
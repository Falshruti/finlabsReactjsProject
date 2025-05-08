import React, { useState } from 'react';
import axios from 'axios';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    product: '',
    solution: '',
    service: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/submit', formData);
      alert('Lead saved!');
    } catch (err) {
      console.error('Submit error:', err);
      alert('Error saving lead.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" required onChange={handleChange} placeholder="Your Name" />
      <input name="email" required onChange={handleChange} placeholder="Your Email" />
      <input name="phone" required onChange={handleChange} placeholder="Phone Number" />
      <input name="company" onChange={handleChange} placeholder="Company Name" />
      <input name="website" onChange={handleChange} placeholder="Website" />

      <select name="product" required onChange={handleChange}>
        <option value="">Select Product</option>
        <option value="Product A">Product A</option>
        <option value="Product B">Product B</option>
      </select>

      <select name="solution" required onChange={handleChange}>
        <option value="">Select Solution</option>
        <option value="Solution X">Solution X</option>
        <option value="Solution Y">Solution Y</option>
      </select>

      <select name="service" required onChange={handleChange}>
        <option value="">Select Service</option>
        <option value="Service 1">Service 1</option>
        <option value="Service 2">Service 2</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LeadForm;

import React, { useState } from 'react';
import './LeadForm.css';

function LeadForm() {
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert('Lead submitted successfully');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          product: '',
          solution: '',
          service: ''
        });
      } else {
        alert('Failed to submit');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lead-form">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
      <input name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" />
      <input name="website" value={formData.website} onChange={handleChange} placeholder="Website" />
      <select name="product" value={formData.product} onChange={handleChange} required>
        <option value="">Select Product</option>
        <option value="None">None</option>
        <option value="Product A">Product A</option>
      </select>
      <select name="solution" value={formData.solution} onChange={handleChange} required>
        <option value="">Select Solution</option>
        <option value="None">None</option>
        <option value="Solution A">Solution A</option>
      </select>
      <select name="service" value={formData.service} onChange={handleChange} required>
        <option value="">Select Service</option>
        <option value="None">None</option>
        <option value="Service A">Service A</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LeadForm;

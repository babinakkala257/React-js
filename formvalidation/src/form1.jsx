import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
    mobile: '',
    gender: '',
    role: '',
    zip: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value ? '' : 'Name is required.';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Valid email is required.';
      case 'password':
        return value.length >= 6 ? '' : 'Password must be at least 6 characters.';
      case 'dob':
        return value ? '' : 'Date of birth is required.';
      case 'mobile':
        return /^[0-9]{10}$/.test(value) ? '' : 'Valid mobile number is required.';
      case 'gender':
        return value ? '' : 'Gender is required.';
      case 'role':
        return value ? '' : 'Role is required.';
      case 'zip':
        return /^\d{6}$/.test(value) ? '' : 'Valid zip code is required.';
      default:
        return '';
    }
  };

  const validate = () => {
    const tempErrors = {};
    for (const [name, value] of Object.entries(formData)) {
      const error = validateField(name, value);
      if (error) tempErrors[name] = error;
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data submitted:", formData);
      setFormData({
        name: '',
        email: '',
        password: '',
        dob: '',
        mobile: '',
        gender: '',
        role: '',
        zip: '',
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(formData).map(([key, value]) => (
        <div key={key}>
          <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          {key === 'gender' ? (
            <select name={key} value={value} onChange={handleChange}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          ) : (
            <input 
              type={key === 'password' ? 'password' : (key === 'dob' ? 'date' : 'text')} 
              name={key} 
              value={value} 
              onChange={handleChange} 
            />
          )}
          {errors[key] && <span>{errors[key]}</span>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

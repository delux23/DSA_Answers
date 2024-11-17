import React, { useState } from 'react';
import '../styles/FormValidation.css';

const FormValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordCriteria = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 chars, 1 letter, 1 number

  const validateEmail = (email) => {
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Invalid email format';
    return '';
  };

  const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (!passwordCriteria.test(password)) {
      return 'Password must be 8+ chars, include 1 letter and 1 number';
    }
    return '';
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailError = validateEmail(value);
    setErrors((prev) => ({ ...prev, email: emailError }));
    checkFormValidity(value, password);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const passwordError = validatePassword(value);
    setErrors((prev) => ({ ...prev, password: passwordError }));
    checkFormValidity(email, value);
  };

  const checkFormValidity = (email, password) => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    setIsFormValid(!emailError && !passwordError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fix the errors before submitting.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className={errors.email ? 'invalid' : ''}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className={errors.password ? 'invalid' : ''}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default FormValidation;

"use client"
import "../form/s.css"
import Navbar from "../form/navbar";
import Stage1 from "../form/Stage 1"
import Stage2 from "../form/Stage 2"
import React, { useState, useRef } from 'react';
import axios from 'axios';


const SuperAgentForm = () => {
  const [form, setForm] = useState({
    businessRegNo: '',
    referralCode: '',
    businessName: '',
    businessAddress: '',
    businessEmail: '',
    businessType: '',
    businessPhoneNo: '',
    state: '',
    lga: '',
    nationality: '',
    passport: null,
    idcard: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const inputRefs = {
    businessRegNo: Array(15).fill().map(() => useRef(null)),
    referralCode: Array(10).fill().map(() => useRef(null)),
    businessPhoneNo: Array(15).fill().map(() => useRef(null)),
    alternativePhoneNo: Array(15).fill().map(() => useRef(null)),
    businessName: useRef(null),
    businessAddress: useRef(null),
    businessEmail: useRef(null),
    middleName: useRef(null),
    firstName: useRef(null),
    dateOfBirth: useRef(null),
    passport: useRef(null),
    idcard: useRef(null),
  };

  const handleChange = (e, field, index) => {
    const value = e.target.value;
    if (field === 'businessPhoneNo' || field === 'alternativePhoneNo' || field === 'businessRegNo' || field === 'referralCode') {
      const newFieldValue = form[field].split('');
      newFieldValue[index] = value;
      setForm({ ...form, [field]: newFieldValue.join('') });

      if (value && index < inputRefs[field].length - 1) {
        inputRefs[field][index + 1].current.focus();
      }
    } else if (field === 'passport') {
      setForm({ ...form, passport: e.target.files[0] });
    } else {
      setForm({ ...form, [field]: value });
    }
  };

  const handleKeyDown = (e, field, index) => {
    if (e.key === 'Backspace' && (field === 'businessPhoneNo' || field === 'alternativePhoneNo' || field === 'businessRegNo' || field === 'referralCode') && !form[field][index] && index > 0) {
      inputRefs[field][index - 1].current.focus();
    } else if (e.key === 'ArrowRight' && (field === 'businessPhoneNo' || field === 'alternativePhoneNo' || field === 'businessRegNo' || field === 'referralCode') && index < inputRefs[field].length - 1) {
      inputRefs[field][index + 1].current.focus();
    } else if (e.key === 'ArrowLeft' && (field === 'businessPhoneNo' || field === 'alternativePhoneNo' || field === 'businessRegNo' || field === 'referralCode') && index > 0) {
      inputRefs[field][index - 1].current.focus();
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(form).forEach(field => {
      if (!form[field]) {
        newErrors[field] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const formData = new FormData();
      Object.keys(form).forEach(key => {
        formData.append(key, form[key]);
      });

      // Send data to the server
      const serverResponse = await axios.post('https://example.com/api/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Form submitted successfully to server:', serverResponse.data);

      // Send data via businessEmail
      const businessEmailResponse = await businessEmailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          ...form,
          passport: form.passport ? form.passport.name : '', // Include file name in businessEmail template
          idcard: form.idcard ? form.idcard.name : ''
        },
        'YOUR_USER_ID'
      );
      console.log('Form submitted successfully via businessEmail:', businessEmailResponse);

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const renderCharInput = (field, length) => {
    return Array.from({ length }, (_, index) => (
      <input
        key={index}
        type="text"
        maxLength="1"
        value={form[field][index] || ''}
        onChange={(e) => handleChange(e, field, index)}
        onKeyDown={(e) => handleKeyDown(e, field, index)}
        ref={inputRefs[field][index]}
        className="char-input"
      />
    ));
  };

  if (submitted) {
    return (
      <div className="submission-success">
        <h2>Form submitted successfully!</h2>
      </div>
    );
  }

  return (
    <form className="super-agent-form" onSubmit={handleSubmit}>
      <header className="header-container">
      <h1>PROTOTYPE SUPER AGENT REGISTRATION FORM</h1>
      <p>
        Thank you for your interest in becoming a Super Agent for ALS. As a Super Agent, you will play a crucial role in expanding our network and driving sales across Nigeria. Please fill out the following application form carefully. Ensure that all information provided is accurate and complete.
      </p>
    </header>

      <label>
        businessname
        <input
          type="text"
          value={form.businessName}
          onChange={(e) => handleChange(e, 'businessName')}
          ref={inputRefs.businessName}
        />
        {errors.businessName && <div className="error">{errors.businessName}</div>}
      </label>

      <label>
        First Name
        <input
          type="text"
          value={form.firstName}
          onChange={(e) => handleChange(e, 'firstName')}
          ref={inputRefs.firstName}
        />
        {errors.firstName && <div className="error">{errors.firstName}</div>}
      </label>

      <label>
        Middle Name
        <input
          type="text"
          value={form.middleName}
          onChange={(e) => handleChange(e, 'middleName')}
          ref={inputRefs.middleName}
        />
        {errors.middleName && <div className="error">{errors.middleName}</div>}
      </label>

      <label>
        Passport Upload
        <input
          type="file"
          onChange={(e) => handleChange(e, 'passport')}
          ref={inputRefs.passport}
        />
        {errors.passport && <div className="error">{errors.passport}</div>}
      </label>

      <label>
        Contact Phone Number
        <div className="char-input-group">
          {renderCharInput('businessPhoneNo', 15)}
        </div>
        {errors.businessPhoneNo && <div className="error">{errors.businessPhoneNo}</div>}
      </label>

      <label>
        Alternative Phone Number.
        <div className="char-input-group">
          {renderCharInput('alternativePhoneNo', 15)}
        </div>
        {errors.alternativePhoneNo && <div className="error">{errors.alternativePhoneNo}</div>}
      </label>

      <label>
        Residential businessAddress
        <input
          type="text"
          value={form.businessAddress}
          onChange={(e) => handleChange(e, 'businessAddress')}
          ref={inputRefs.businessAddress}
        />
        {errors.businessAddress && <div className="error">{errors.businessAddress}</div>}
      </label>

      <label>
        LGA (Local Government Area)
        <input
          type="text"
          value={form.lga}
          onChange={(e) => handleChange(e, 'lga')}
        />
        {errors.lga && <div className="error">{errors.lga}</div>}
      </label>

      <label>
        State
        <input
          type="text"
          value={form.state}
          onChange={(e) => handleChange(e, 'state')}
        />
        {errors.state && <div className="error">{errors.state}</div>}
      </label>

      <label>
        Postal Code
        <div className="char-input-group">
          {renderCharInput('referralCode', 10)}
        </div>
        {errors.referralCode && <div className="error">{errors.referralCode}</div>}
      </label>

      <label>
        Gender
        <div className="radio-group">
          <label>
          Male
            <input
              type="radio"
              value="Male"
              checked={form.gender === 'Male'}
              onChange={(e) => handleChange(e, 'gender')}
            />
           
          </label>
          <label>
          Female
            <input
              type="radio"
              value="Female"
              checked={form.gender === 'Female'}
              onChange={(e) => handleChange(e, 'gender')}
            />
            
          </label>
        </div>
        {errors.gender && <div className="error">{errors.gender}</div>}
      </label>
      <label>
        Date of Birth
        <input
          type="date"
          value={form.dateOfBirth}
          onChange={(e) => handleChange(e, 'dateOfBirth')}
          ref={inputRefs.dateOfBirth}
        />
        {errors.dateOfBirth && <div className="error">{errors.dateOfBirth}</div>}
      </label>
      <label>
        ID Type
        <div className="radio-group">
          <label>
            Passport   
            <input
              type="radio"
              value="Passport"
              checked={form.businessType === 'Passport'}
              onChange={(e) => handleChange(e, 'businessType')}
            />
            
          </label>
          <label>
            Driver's License
            <input
              type="radio"
              value="Driver's License"
              checked={form.businessType === "Driver's License"}
              onChange={(e) => handleChange(e, 'businessType')}
            />
            
          </label>
          <label>
            National ID
            <input
              type="radio"
              value="National ID"
              checked={form.businessType === 'National ID'}
              onChange={(e) => handleChange(e, 'businessType')}
            />
            
          </label>
        </div>
        {errors.businessType && <div className="error">{errors.businessType}</div>}
      </label>

      <label>
        ID Number
        <div className="char-input-group">
          {renderCharInput('businessRegNo', 15)}
        </div>
        {errors.businessRegNo && <div className="error">{errors.businessRegNo}</div>}
      </label>

      <label>
        ID Upload
        <input
          type="file"
          onChange={(e) => handleChange(e, 'idcard')}
          ref={inputRefs.idcard}
        />
        {errors.idcard && <div className="error">{errors.idcard}</div>}
      </label>

      <label>
        businessEmail businessAddress
        <input
          type="businessEmail"
          value={form.businessEmail}
          onChange={(e) => handleChange(e, 'businessEmail')}
          ref={inputRefs.businessEmail}
        />
        {errors.businessEmail && <div className="error">{errors.businessEmail}</div>}
      </label>

      <label>
        Nationality
        <input
          type="text"
          value={form.nationality}
          onChange={(e) => handleChange(e, 'nationality')}
        />
        {errors.nationality && <div className="error">{errors.nationality}</div>}
      </label>
      

      

      

      

      <button type="submit">Submit</button>
    </form>
  );
};

export default SuperAgentForm;


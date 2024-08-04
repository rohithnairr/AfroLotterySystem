import React, { useState } from 'react';

const SuperAgentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    surname: '',
    firstName: '',
    middleName: '',
    contactPhoneNumber: '',
    alternativePhoneNumber: '',
    residentialAddress: '',
    lga: '',
    state: '',
    postalCode: '',
    gender: '',
    dateOfBirth: '',
    emailAddress: '',
    nationality: '',
    idType: '',
    referralCode: '',
    agreement: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.surname) newErrors.surname = 'Surname is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.middleName) newErrors.middleName = 'Middle name is required';
    if (!formData.contactPhoneNumber) newErrors.contactPhoneNumber = 'Contact phone number is required';
    if (!formData.alternativePhoneNumber) newErrors.alternativePhoneNumber = 'Alternative phone number is required';
    if (!formData.residentialAddress) newErrors.residentialAddress = 'Residential address is required';
    if (!formData.lga) newErrors.lga = 'LGA is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.postalCode) newErrors.postalCode = 'Postal code is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.emailAddress) newErrors.emailAddress = 'Email address is required';
    if (!formData.nationality) newErrors.nationality = 'Nationality is required';
    if (!formData.idType) newErrors.idType = 'ID type is required';
    if (!formData.referralCode) newErrors.referralCode = 'Referral code is required';
    if (!formData.agreement) newErrors.agreement = 'You must agree to the terms';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form data:', formData);
      // Add form submission logic here
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="form-container"> 
    <form onSubmit={handleSubmit}>
      <h1>PROTOTYPE SUPER AGENT REGISTRATION FORM</h1>

      <div className="form-group">
      <label>
        Surname:
        <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
        {errors.surname && <p className="error">{errors.surname}</p>}
      </label>
      </div>
      <div className="form-group">

      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </label>
      </div>
      <div className="form-group">

      <label>
        Middle Name:
        <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
        {errors.middleName && <p className="error">{errors.middleName}</p>}
      </label>
      </div>

      <div className="form-group">
      <label>
        Contact Phone Number:
        <input type="text" name="contactPhoneNumber" value={formData.contactPhoneNumber} onChange={handleChange} />
        {errors.contactPhoneNumber && <p className="error">{errors.contactPhoneNumber}</p>}
      </label></div>

      <div className="form-group"><label>
        Alternative Phone Number:
        <input type="text" name="alternativePhoneNumber" value={formData.alternativePhoneNumber} onChange={handleChange} />
        {errors.alternativePhoneNumber && <p className="error">{errors.alternativePhoneNumber}</p>}
      </label></div>

      <div className="form-group"><label>
        Residential Address:
        <input type="text" name="residentialAddress" value={formData.residentialAddress} onChange={handleChange} />
        {errors.residentialAddress && <p className="error">{errors.residentialAddress}</p>}
      </label></div>

      <div className="form-group"><label>
        LGA:
        <input type="text" name="lga" value={formData.lga} onChange={handleChange} />
        {errors.lga && <p className="error">{errors.lga}</p>}
      </label></div>

      <div className="form-group"><label>
        State:
        <input type="text" name="state" value={formData.state} onChange={handleChange} />
        {errors.state && <p className="error">{errors.state}</p>}
      </label></div>

      <div className="form-group"><label>
        Postal Code:
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
        {errors.postalCode && <p className="error">{errors.postalCode}</p>}
      </label></div>

      <div className="form-group"><label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <p className="error">{errors.gender}</p>}
      </label></div>

      <div className="form-group"><label>
        Date of Birth:
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
      </label></div>

      <div className="form-group"><label>
        Email Address:
        <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
        {errors.emailAddress && <p className="error">{errors.emailAddress}</p>}
      </label></div>

      <div className="form-group"><label>
        Nationality:
        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
        {errors.nationality && <p className="error">{errors.nationality}</p>}
      </label></div>

      <div className="form-group"><label>
        ID Type:
        <select name="idType" value={formData.idType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="passport">Passport</option>
          <option value="driversLicense">Driver’s License</option>
          <option value="nationalID">National ID</option>
          <option value="votersCard">Voter’s Card</option>
        </select>
        {errors.idType && <p className="error">{errors.idType}</p>}
      </label></div>

      <div className="form-group"><label>
        Referral Code:
        <input type="text" name="referralCode" value={formData.referralCode} onChange={handleChange} />
        {errors.referralCode && <p className="error">{errors.referralCode}</p>}
      </label></div>

      <div className="form-group"><label>
        Agreement:
        <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} />
        {errors.agreement && <p className="error">{errors.agreement}</p>}
      </label></div>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default SuperAgentRegistrationForm;

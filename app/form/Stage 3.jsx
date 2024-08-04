const SuperAgentForm = () => {
    const [form, setForm] = useState({
      businessRegNo: '',
      contactPhoneNo: '',
      postalCode: '',
      surName: '',
      address: '',
      email: '',
      middleName: '',
      firstName: '',
      idNumber: '',
      phoneNumber: '',
    });
  
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
  
    const inputRefs = {
      businessRegNo: Array(10).fill().map(() => useRef(null)),
      contactPhoneNo: Array(15).fill().map(() => useRef(null)),
      postalCode: Array(6).fill().map(() => useRef(null)),
      surName: useRef(null),
      address: useRef(null),
      email: useRef(null),
      middleName: useRef(null),
      firstName: useRef(null),
      idNumber: useRef(null),
      phoneNumber: useRef(null),
    };
  
    const handleChange = (e, field, index) => {
      const value = e.target.value;
      if (field === 'businessRegNo' || field === 'contactPhoneNo' || field === 'postalCode') {
        const newFieldValue = form[field].split('');
        newFieldValue[index] = value;
        setForm({ ...form, [field]: newFieldValue.join('') });
  
        if (value && index < inputRefs[field].length - 1) {
          inputRefs[field][index + 1].current.focus();
        }
      } else {
        setForm({ ...form, [field]: value });
      }
    };
  
    const handleKeyDown = (e, field, index) => {
      if (e.key === 'Backspace' && (field === 'businessRegNo' || field === 'contactPhoneNo' || field === 'postalCode') && !form[field][index] && index > 0) {
        inputRefs[field][index - 1].current.focus();
      } else if (e.key === 'ArrowRight' && (field === 'businessRegNo' || field === 'contactPhoneNo' || field === 'postalCode') && index < inputRefs[field].length - 1) {
        inputRefs[field][index + 1].current.focus();
      } else if (e.key === 'ArrowLeft' && (field === 'businessRegNo' || field === 'contactPhoneNo' || field === 'postalCode') && index > 0) {
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
        // Send data to the server
        const serverResponse = await axios.post('https://example.com/api/register', form);
        console.log('Form submitted successfully to server:', serverResponse.data);
  
        // Send data via email
        const emailResponse = await emailjs.send(
          'YOUR_SERVICE_ID', 
          'YOUR_TEMPLATE_ID', 
          form, 
          'YOUR_USER_ID'
        );
        console.log('Form submitted successfully via email:', emailResponse);
  
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
        <h1>PROTOTYPE SUPER AGENT REGISTRATION FORM</h1>

        <h2>Personal Details</h2>
  
        <label>
          Surname
          <input
            type="text"
            value={form.surName}
            onChange={(e) => handleChange(e, 'surName')}
            ref={inputRefs.surName}
          />
          {errors.surName && <div className="error">{errors.surName}</div>}
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
          Contact Phone Number
          <div className="char-input-group">
            {renderCharInput('contactPhoneNo', 15)}
          </div>
          {errors.contactPhoneNo && <div className="error">{errors.contactPhoneNo}</div>}
        </label>

        <label>
          Address
          <input
            type="text"
            value={form.address}
            onChange={(e) => handleChange(e, 'address')}
            ref={inputRefs.address}
          />
          {errors.address && <div className="error">{errors.address}</div>}
        </label>
  
        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange(e, 'email')}
            ref={inputRefs.email}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </label>
  
        
  
        <label>
          Business Reg. No.
          <div className="char-input-group">
            {renderCharInput('businessRegNo', 10)}
          </div>
          {errors.businessRegNo && <div className="error">{errors.businessRegNo}</div>}
        </label>
  
        
  
        <label>
          Postal Code
          <div className="char-input-group">
            {renderCharInput('postalCode', 6)}
          </div>
          {errors.postalCode && <div className="error">{errors.postalCode}</div>}
        </label>
  
       
  
        <label>
          ID Number
          <input
            type="text"
            value={form.idNumber}
            onChange={(e) => handleChange(e, 'idNumber')}
            ref={inputRefs.idNumber}
          />
          {errors.idNumber && <div className="error">{errors.idNumber}</div>}
        </label>
  
        <label>
          Phone Number
          <input
            type="text"
            value={form.phoneNumber}
            onChange={(e) => handleChange(e, 'phoneNumber')}
            ref={inputRefs.phoneNumber}
          />
          {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
        </label>
  
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default SuperAgentForm;
  
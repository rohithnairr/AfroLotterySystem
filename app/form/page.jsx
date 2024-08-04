"use client"
import "../form/s.css"
import Navbar from "../form/navbar";
import Stage1 from "../form/Stage 1"
import Stage2 from "../form/Stage 2"
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

const NigerianStatesLGAs = {
  "Abia": ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma Ngwa", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu Nneochi"],
  "Adamawa": ["Demsa", "Fufore", "Ganye", "Girei", "Gombi", "Guyuk", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", "Mayo Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"],
  "Akwa Ibom": ["Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono-Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat-Enin", "Nsit-Atai", "Nsit-Ibom", "Nsit-Ubium", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung-Uko", "Ukanafun", "Uruan", "Urue-Offong/Oruko", "Uyo"],
  "Anambra": ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"],
  "Bauchi": ["Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Gamawa", "Ganjuwa", "Giade", "Itas/Gadau", "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki"],
  "Bayelsa": ["Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"],
  "Benue": ["Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina-Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Otukpo", "Tarka", "Ukum", "Ushongo", "Vandeikya"],
  "Borno": ["Abadam", "Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere", "Kaga", "Kala/Balge", "Konduga", "Kukawa", "Kwaya Kusar", "Mafa", "Magumeri", "Maiduguri", "Marte", "Mobbar", "Monguno", "Ngala", "Nganzai", "Shani"],
  "Cross River": ["Abi", "Akamkpa", "Akpabuyo", "Bakassi", "Bekwarra", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Etung", "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Yakuur", "Yala"],
  "Delta": ["Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ethiope East", "Ethiope West", "Ika North East", "Ika South", "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Okpe", "Oshimili North", "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Ukwuani", "Uvwie", "Warri North", "Warri South", "Warri South West"],
  "Ebonyi": ["Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu", "Onicha"],
  "Edo": ["Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba-Okha", "Orhionmwon", "Oredo", "Ovia North-East", "Ovia South-West", "Owan East", "Owan West", "Uhunmwonde"],
  "Ekiti": ["Ado Ekiti", "Efon", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", "Gbonyin", "Ido Osi", "Ijero", "Ikere", "Ikole", "Ilejemeje", "Irepodun/Ifelodun", "Ise/Orun", "Moba", "Oye"],
  "Enugu": ["Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo Uwani"],
  "FCT": ["Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council"],
  "Gombe": ["Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Kwami", "Nafada", "Shongom", "Yamaltu/Deba"],
  "Imo": ["Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte", "Ideato North", "Ideato South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", "Oguta", "Ohaji/Egbema", "Okigwe", "Onuimo", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", "Owerri North", "Owerri West"],
  "Jigawa": ["Auyo", "Babura", "Biriniwa", "Birnin Kudu", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Gwaram", "Gwiwa", "Hadejia", "Jahun", "Kafin Hausa", "Kaugama", "Kazaure", "Kiri Kasama", "Kiyawa", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule Tankarkar", "Taura", "Yankwashi"],
  "Kaduna": ["Birnin Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarok", "Kajuru", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", "Soba", "Zangon Kataf", "Zaria"],
  "Kano": ["Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garun Mallam", "Gaya", "Gezawa", "Gwale", "Gwarzo", "Kabo", "Kano Municipal", "Karaye", "Kibiya", "Kiru", "Kumbotso", "Kunchi", "Kura", "Madobi", "Makoda", "Minjibir", "Nasarawa", "Rano", "Rimin Gado", "Rogo", "Shanono", "Sumaila", "Takai", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"],
  "Katsina": ["Bakori", "Batagarawa", "Batsari", "Baure", "Bindawa", "Charanchi", "Dandume", "Danja", "Dan Musa", "Daura", "Dutsi", "Dutsin Ma", "Faskari", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Kankia", "Katsina", "Kurfi", "Kusada", "Mai'Adua", "Malumfashi", "Mani", "Mashi", "Matazu", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"],
  "Kebbi": ["Aleiro", "Arewa Dandi", "Argungu", "Augie", "Bagudo", "Birnin Kebbi", "Bunza", "Dandi", "Fakai", "Gwandu", "Jega", "Kalgo", "Koko/Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Wasagu/Danko", "Yauri", "Zuru"],
  "Kogi": ["Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela Odolu", "Ijumu", "Kabba/Bunu", "Kogi", "Lokoja", "Mopa Muro", "Ofu", "Ogori/Magongo", "Okehi", "Okene", "Olamaboro", "Omala", "Yagba East", "Yagba West"],
  "Kwara": ["Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South", "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero", "Oyun", "Pategi"],
  "Lagos": ["Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti Osa", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere"],
  "Nasarawa": ["Akwanga", "Awe", "Doma", "Karu", "Keana", "Keffi", "Kokona", "Lafia", "Nasarawa", "Nasarawa Egon", "Obi", "Toto", "Wamba"],
  "Niger": ["Agaie", "Agwara", "Bida", "Borgu", "Bosso", "Chanchaga", "Edati", "Gbako", "Gurara", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama", "Mariga", "Mokwa", "Muya", "Paikoro", "Rafi", "Rijau", "Shiroro", "Suleja", "Tafa", "Wushishi"],
  "Ogun": ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Egbado North", "Egbado South", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu North East", "Ijebu Ode", "Ikenne", "Imeko Afon", "Ipokia", "Obafemi Owode", "Odeda", "Odogbolu", "Ogun Waterside", "Remo North", "Shagamu"],
  "Ondo": ["Akoko North-East", "Akoko North-West", "Akoko South-East", "Akoko South-West", "Akure North", "Akure South", "Ese Odo", "Idanre", "Ifedore", "Ilaje", "Ile Oluji/Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"],
  "Osun": ["Aiyedaade", "Aiyedire", "Atakunmosa East", "Atakunmosa West", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Egbedore", "Ejigbo", "Ife Central", "Ife East", "Ife North", "Ife South", "Ifedayo", "Ifelodun", "Ila", "Ilesa East", "Ilesa West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun", "Odo Otin", "Ola Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"],
  "Oyo": ["Afijio", "Akinyele", "Atiba", "Atisbo", "Egbeda", "Ibadan North", "Ibadan North-East", "Ibadan North-West", "Ibadan South-East", "Ibadan South-West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Kajola", "Lagelu", "Ogbomosho North", "Ogbomosho South", "Ogo Oluwa", "Olorunsogo", "Oluyole", "Ona Ara", "Orelope", "Ori Ire", "Oyo East", "Oyo West", "Saki East", "Saki West", "Surulere"],
  "Plateau": ["Bokkos", "Barkin Ladi", "Bassa", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang North", "Langtang South", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"],
  "Rivers": ["Abua/Odual", "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni", "Asari-Toru", "Bonny", "Degema", "Eleme", "Emuoha", "Etche", "Gokana", "Ikwerre", "Khana", "Obio/Akpor", "Ogba/Egbema/Ndoni", "Ogu/Bolo", "Okrika", "Omuma", "Opobo/Nkoro", "Oyigbo", "Port Harcourt", "Tai"],
  "Sokoto": ["Binji", "Bodinga", "Dange Shuni", "Gada", "Goronyo", "Gudu", "Gwadabawa", "Illela", "Isa", "Kebbe", "Kware", "Rabah", "Sabon Birni", "Shagari", "Silame", "Sokoto North", "Sokoto South", "Tambuwal", "Tangaza", "Tureta", "Wamako", "Wurno", "Yabo"],
  "Taraba": ["Ardo Kola", "Bali", "Donga", "Gashaka", "Gassol", "Ibi", "Jalingo", "Karim Lamido", "Kurmi", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", "Yorro", "Zing"],
  "Yobe": ["Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", "Jakusko", "Karasuwa", "Machina", "Nangere", "Nguru", "Potiskum", "Tarmuwa", "Yunusari", "Yusufari"],
  "Zamfara": ["Anka", "Bakura", "Birnin Magaji/Kiyaw", "Bukkuyum", "Bungudu", "Chafe", "Gummi", "Gusau", "Kaura Namoda", "Maradun", "Maru", "Shinkafi", "Talata Mafara", "Zurmi"]
};


const SuperAgentForm = () => {
  const [form, setForm] = useState({
    idNumber: '',
    alternativePhoneNo: '',
    postalCode: '',
    surName: '',
    address: '',
    email: '',
    middleName: '',
    firstName: '',
    idType: '',
    contactPhoneNo: '',
    dateOfBirth: '',
    gender: '',
    state: '',
    lga: '',
    nationality: '',
    passport: null,
    idcard: null,
    experience: '',
    experience2: '',
    experience3: '',
    experience4: '',
    qualifications: '',
    refName1: '',
    refName2: '',
    refEmail1:'',
    refEmail2:'',
    relationship1:'',
    relationship2:'',
    question1: '',
    question2: '',
    question3: '',
    refContact1: '',
    refContact2: '',
    businessAddress: '',
    businessPhoneNo: '',
    businessRegNo: '',
    businessName: '',
    businessMail: '',
    businessCity: '',
    businessState: '',
    businessLga: '',
    businessPostalCode: '',
    state1: '',
    state2: '',
    state3: '',
    signature: '',
    declarationDate: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [passportPreview, setPassportPreview] = useState(null);
  const [idCardPreview, setIdCardPreview] = useState(null);
  const [lgas, setLgas] = useState([]);

  const inputRefs = {
    idNumber: Array(15).fill().map(() => useRef(null)),
    postalCode: Array(10).fill().map(() => useRef(null)),
    contactPhoneNo: Array(15).fill().map(() => useRef(null)),
    alternativePhoneNo: Array(15).fill().map(() => useRef(null)),
    refContact1: Array(15).fill().map(() => useRef(null)),
    refContact2: Array(15).fill().map(() => useRef(null)),
    businessPhoneNo: Array(15).fill().map(() => useRef(null)),
    businessRegNo: Array(15).fill().map(() => useRef(null)),
    surName: useRef(null),
    address: useRef(null),
    email: useRef(null),
    middleName: useRef(null),
    firstName: useRef(null),
    dateOfBirth: useRef(null),
    passport: useRef(null),
    idcard: useRef(null),
    businessName: useRef(null),
    businessMail:useRef(null),
    businessCity:useRef(null),
    businessState:useRef(null),
    businessLga: useRef(null),
    refEmail1:useRef(null),
    refEmail2:useRef(null),
    relationship1:useRef(null),
    relationship2:useRef(null),
    businessPostalCode: Array(15).fill().map(() => useRef(null)),
  };


  useEffect(() => {
    if (form.state) {
      setLgas(NigerianStatesLGAs[form.state] || []);
    }
  }, [form.state]);
  
  

  

  const handleChange = (e, field, index) => {
    const value = e.target.value;
    if (field === 'refContact2' || field === 'refContact1' ||field === 'businessPhoneNo' || field === 'businessRegNo' ||
      field === 'contactPhoneNo' || field === 'alternativePhoneNo' || field === 'idNumber' || field === 'postalCode' || field === 'businessPostalCode') {
      const newFieldValue = form[field].split('');
      newFieldValue[index] = value;
      setForm({ ...form, [field]: newFieldValue.join('') });

      if (value && index < inputRefs[field].length - 1) {
        inputRefs[field][index + 1].current.focus();
      }
    }
    else if (field === 'passport' || field === 'idCard') {
        const file = e.target.files[0];
        setForm({ ...form, [field]: file });
  
        const reader = new FileReader();
        reader.onloadend = () => {
          if (field === 'passport') {
            setPassportPreview(reader.result);
          } else if (field === 'idCard') {
            setIdCardPreview(reader.result);
          }
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      } else {
        setForm({ ...form, [field]: value });
      }
    };

  const handleKeyDown = (e, field, index) => {
    if (e.key === 'Backspace' && (field === 'refContact2' || field === 'refContact1' ||field === 'businessPhoneNo' || field === 'businessRegNo' ||
      field === 'contactPhoneNo' || field === 'alternativePhoneNo' || field === 'idNumber' || field === 'postalCode' || field === 'businessPostalCode') && !form[field][index] && index > 0) {
      inputRefs[field][index - 1].current.focus();
    } else if (e.key === 'ArrowRight' && (field === 'refContact2' || field === 'refContact1' ||field === 'businessPhoneNo' || field === 'businessRegNo' ||
      field === 'contactPhoneNo' || field === 'alternativePhoneNo' || field === 'idNumber' || field === 'postalCode' || field === 'businessPostalCode') && index < inputRefs[field].length - 1) {
      inputRefs[field][index + 1].current.focus();
    } else if (e.key === 'ArrowLeft' && (field === 'refContact2' || field === 'refContact1' ||field === 'businessPhoneNo' || field === 'businessRegNo' ||
      field === 'contactPhoneNo' || field === 'alternativePhoneNo' || field === 'idNumber' || field === 'postalCode' || field === 'businessPostalCode') && index > 0) {
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

      // Send data via email
      const emailResponse = await emailjs.send(
        'ALS-email',
        'template_jo1jam5',
        {
          ...form,
          passport: form.passport ? form.passport.name : '', // Include file name in email template
          idCard: form.idCard ? form.idCard.name : '' // Include file name in email template
        },
        's03os7ZPZLdrBDQzL'
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
    <>
    <div className="container mx-auto p-4 lg:p-8 font-jakarta bg-blue-gray-100 text-black ">
    <Navbar />
    </div>
    <form className="super-agent-form" onSubmit={handleSubmit}>
      <header className="header-container">
      <h1>SUPER AGENT REGISTRATION FORM</h1>
      <p>
        Thank you for your interest in becoming a Super Agent for ALS. As a Super Agent, you will play a crucial role 
        in expanding our network and driving sales across Nigeria. Please fill out the following application form carefully. 
        Ensure that all information provided is accurate and complete.
      </p>
    </header>


    <h2>Stage 1: Personal Details of Business </h2>

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
        Passport Upload
        <input
          type="file"
          onChange={(e) => handleChange(e, 'passport')}
          ref={inputRefs.passport}
        />
        {errors.passport && <div className="error">{errors.passport}</div>}
        {passportPreview && <img src={passportPreview} alt="Passport Preview" className="file-preview" />}

      </label>

      <label>
        Contact Phone Number
        <div className="char-input-group">
          {renderCharInput('contactPhoneNo', 15)}
        </div>
        {errors.contactPhoneNo && <div className="error">{errors.contactPhoneNo}</div>}
      </label>

      <label>
        Alternative Phone Number.
        <div className="char-input-group">
          {renderCharInput('alternativePhoneNo', 15)}
        </div>
        {errors.alternativePhoneNo && <div className="error">{errors.alternativePhoneNo}</div>}
      </label>

      <label>
        Residential Address
        <input
          type="text"
          value={form.address}
          onChange={(e) => handleChange(e, 'address')}
          ref={inputRefs.address}
        />
        {errors.address && <div className="error">{errors.address}</div>}
      </label>

      <label>
        State
        <select
          name="state"
          value={form.state}
          onChange={(e) => handleChange(e, 'state')}
        >
          <option value="">Select State</option>
          {Object.keys(NigerianStatesLGAs).map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
        {errors.state && <div className="error">{errors.state}</div>}
      </label>

      <label>
        LGA (Local Government Area)
        <select name="lga" value={form.lga} onChange={(e) => handleChange(e, 'lga')} required>
          <option value="">Select LGA</option>
          {lgas.map((lga) => (
            <option key={lga} value={lga}>{lga}</option>
          ))}
        </select>
        {errors.lga && <div className="error">{errors.lga}</div>}
      </label>

      <label>
        Postal Code
        <div className="char-input-group">
          {renderCharInput('postalCode', 10)}
        </div>
        {errors.postalCode && <div className="error">{errors.postalCode}</div>}
      </label>

      <label>
        Gender
        <div className="radio-group">
          <label>
          Male{' '}
            <input
              type="radio"
              value="Male"
              checked={form.gender === 'Male'}
              onChange={(e) => handleChange(e, 'gender')}
            />
           
          </label>
          <label>
          Female{' '}
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
            Passport{' '}   
            <input
              type="radio"
              value="Passport"
              checked={form.idType === 'Passport'}
              onChange={(e) => handleChange(e, 'idType')}
            />
            
          </label>
          <label>
            Driver's License{' '}
            <input
              type="radio"
              value="Driver's License"
              checked={form.idType === "Driver's License"}
              onChange={(e) => handleChange(e, 'idType')}
            />
            
          </label>
          <label>
            National ID{' '}
            <input
              type="radio"
              value="National ID"
              checked={form.idType === 'National ID'}
              onChange={(e) => handleChange(e, 'idType')}
            />
            
          </label>
          <label>
            Voter's Card{' '}
            <input
              type="radio"
              value="Voter's Card"
              checked={form.idType === "Voter's Card"}
              onChange={(e) => handleChange(e, 'idType')}
            />
            
          </label>
        </div>
        {errors.idType && <div className="error">{errors.idType}</div>}
      </label>

      <label>
        ID Number
        <div className="char-input-group">
          {renderCharInput('idNumber', 15)}
        </div>
        {errors.idNumber && <div className="error">{errors.idNumber}</div>}
      </label>

      <label>
        ID Upload
        <input
          type="file"
          onChange={(e) => handleChange(e, 'idcard')}
          ref={inputRefs.idcard}
        />
        {errors.idcard && <div className="error">{errors.idcard}</div>}
        {idCardPreview && <img src={idCardPreview} alt="ID Card Preview" className="file-preview" />}

      </label>

      <label>
        Email Address
        <input
          type="email"
          value={form.email}
          onChange={(e) => handleChange(e, 'email')}
          ref={inputRefs.email}
        />
        {errors.email && <div className="error">{errors.email}</div>}
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

      <label>
        Referral Code
        <div className="char-input-group">
          {renderCharInput('postalCode', 10)}
        </div>
      </label>
      

      <h2>Stage 2: Business Information (fill up if you have any current business)</h2>
      <label>
        Business Name
        <input
          type="text"
          value={form.businessName}
          onChange={(e) => handleChange(e, 'businessName')}
          ref={inputRefs.businessName}
        />
      </label>

      <label>
        Business Address
        <input
          type="text"
          value={form.businessAddress}
          onChange={(e) => handleChange(e, 'businessAddress')}
          ref={inputRefs.businessAddress}
        />
      </label>

      <label>
        Business Registration Number
        <div className="char-input-group">
          {renderCharInput('businessRegNo', 15)}
        </div>
      </label>

      

      <label>
        State
        <input
          type="text"
          value={form.businessState}
          onChange={(e) => handleChange(e, 'businessState')}
        />
      </label>

      <label>
        City
        <input
          type="text"
          value={form.businessCity}
          onChange={(e) => handleChange(e, 'businessCity')}
        />
      </label>

      <label>
        Postal Code
        <div className="char-input-group">
          {renderCharInput('businessPostalCode', 10)}
        </div>
      </label>

      <label>
        LGA (Local Government Area)
        <input
          type="text"
          value={form.businessLga}
          onChange={(e) => handleChange(e, 'businessLga')}
        />
      </label>

      <label>
        Type of Business
        <div className="radio-group">
          <label>
            Sole Propreitorship{' '}  
            <input
              type="radio"
              value="Sole Propreitorship"
              checked={form.idType === 'Sole Propreitorship'}
              onChange={(e) => handleChange(e, 'idType')}
            />
            
          </label>
          <label>
            Partnership{' '}
            <input
              type="radio"
              value="Partnership"
              checked={form.idType === "Partnership"}
              onChange={(e) => handleChange(e, 'idType')}
            />
            
          </label>
          <label>
            Limited Liability{' '}
            <input
              type="radio"
              value="Limited Liability"
              checked={form.idType === 'Limited Liability'}
              onChange={(e) => handleChange(e, 'idType')}
            />
            
          </label>
        </div>
      </label>

      <label>
        Business Email Address
        <input
          type="email"
          value={form.email}
          onChange={(e) => handleChange(e, 'email')}
          ref={inputRefs.email}
        />
      </label>

      <label>
        Business Phone Number
        <div className="char-input-group">
          {renderCharInput('contactPhoneNo', 15)}
        </div>
      </label>

      <label>
        Business Website (if any)
        <input
          type="email"
          value={form.email}
          onChange={(e) => handleChange(e, 'email')}
          ref={inputRefs.email}
        />
      </label>

      <h2>Stage 3: Experience and Qualifications</h2>

      <label>
        Do you have any previous experience in agency or sales management?
        <div className="radio-group">
          <label>
            Yes{' '}
          <input
              type="radio"
              value="Yes"
              checked={form.question1 === 'Yes'}
              onChange={(e) => handleChange(e, 'question1')}
            />
          </label>
          <label>
            No{' '}
            <input
              type="radio"
              value="No"
              checked={form.question1 === 'No'}
              onChange={(e) => handleChange(e, 'question1')}
            />
          </label>
        </div>
        {errors.question1 && <div className="error">{errors.question1}</div>}
      </label>

      <label>
        If Yes, please provide details:
        <div>
        <textarea
          value={form.experience}
          onChange={(e) => handleChange(e, 'experience')}
        />
        {errors.experience && <div className="error">{errors.experience}</div>}
        </div>
      </label>

      <label>
        Have you previously worked with ALS or any similar companies?
        <div className="radio-group">
          <label>
            Yes{' '}
            <input
              type="radio"
              value="Yes"
              checked={form.question2 === 'Yes'}
              onChange={(e) => handleChange(e, 'question2')}
            />
            
          </label>
          <label>
            No{' '}
            <input
              type="radio"
              value="No"
              checked={form.question2 === 'No'}
              onChange={(e) => handleChange(e, 'question2')}
            />
            
          </label>
        </div>
        {errors.question2 && <div className="error">{errors.question2}</div>}
      </label>

      <label>
        If Yes, please provide details:
        <div>
        <textarea
          value={form.experience2}
          onChange={(e) => handleChange(e, 'experience2')}
        />
        {errors.experience2 && <div className="error">{errors.experience2}</div>}
      </div>
      </label>

      <label>
        DO you have any experience in Gaming and Lottery Agency?
        <div className="radio-group">
          <label>
            Yes{' '}
            <input
              type="radio"
              value="Yes"
              checked={form.question3 === 'Yes'}
              onChange={(e) => handleChange(e, 'question3')}
            />
            
          </label>
          <label>
            No{' '}
            <input
              type="radio"
              value="No"
              checked={form.question3 === 'No'}
              onChange={(e) => handleChange(e, 'question3')}
            />
            
          </label>
        </div>
        {errors.question3 && <div className="error">{errors.question3}</div>}
      </label>

      <label>
        If Yes, please provide details:
        <div>
        <textarea
          value={form.experience4}
          onChange={(e) => handleChange(e, 'experience4')}
        />
        {errors.experience4 && <div className="error">{errors.experience4}</div>}
      </div>
      </label>

      <label>
        Please describe your business experience and qualifications relevant to this role:
        <textarea
          value={form.qualifications}
          onChange={(e) => handleChange(e, 'qualifications')}
        />
        {errors.qualifications && <div className="error">{errors.qualifications}</div>}
      </label>

      <h2>Stage 4: Proposed Area of Operation</h2>

      <label>
        Indicate 3 states you wish to be considered for super agent(rank them according to your preference)
        <div>
        1.{' '}<input
          type="text"
          value={form.state1}
          onChange={(e) => handleChange(e, 'state1')}
        />
        {errors.state1 && <div className="error">{errors.state1}</div>}
        </div>
        <div>
        2.{' '}<input
          type="text"
          value={form.state2}
          onChange={(e) => handleChange(e, 'state2')}
        />
        {errors.state2 && <div className="error">{errors.state2}</div>}
        </div>
        <div>
        3.{' '}<input
          type="text"
          value={form.state3}
          onChange={(e) => handleChange(e, 'state3')}
        />
        {errors.state3 && <div className="error">{errors.state3}</div>}
        </div>
      </label>

      

      <h2>Stage 5: References</h2>

      <h3>REFERENCE 1:</h3>

      <label>
        Full Name 
        <input
          type="text"
          value={form.refName1}
          onChange={(e) => handleChange(e, 'refName1')}
        />
        {errors.refName1 && <div className="error">{errors.refName1}</div>}
      </label>

      <label>
        Email Address
        <input
          type="text"
          value={form.refEmail1}
          onChange={(e) => handleChange(e, 'refEmail1')}
          ref={inputRefs.refEmail1}
        />
        {errors.refEmail1 && <div className="error">{errors.refEmail1}</div>}
      </label>

      <label>
        Relationship
        <input
          type="text"
          value={form.relationship1}
          onChange={(e) => handleChange(e, 'relationship1')}
          ref={inputRefs.relationship1}
        />
        {errors.relationship1 && <div className="error">{errors.relationship1}</div>}
      </label>

      <label>
        Contact Number
        <div className="char-input-group">
          {renderCharInput('refContact1', 15)}
        </div>
        {errors.refContact1 && <div className="error">{errors.refContact1}</div>}
      </label>

      <h3>REFERENCE 2:</h3>

      <label>
      Full Name 
        <input
          type="text"
          value={form.refName2}
          onChange={(e) => handleChange(e, 'refName2')}
        />
        {errors.refName2 && <div className="error">{errors.refName2}</div>}
      </label>

      <label>
        Relationship
        <input
          type="text"
          value={form.relationship2}
          onChange={(e) => handleChange(e, 'relationship2')}
          ref={inputRefs.relationship2}
        />
        {errors.relationship2 && <div className="error">{errors.relationship2}</div>}
      </label>

      <label>
      Contact Number
        <div className="char-input-group">
          {renderCharInput('refContact2', 15)}
        </div>
        {errors.refContact2 && <div className="error">{errors.refContact2}</div>}
      </label>

      <label>
        Email Address
        <input
          type="text"
          value={form.refEmail2}
          onChange={(e) => handleChange(e, 'refEmail2')}
          ref={inputRefs.refEmail2}
        />
        {errors.refEmail2 && <div className="error">{errors.refEmail2}</div>}
      </label>

      <h2>Stage 6: Additional Information</h2>

      <label>
        Provide any additional information that can support your application
        <div>
        <textarea
          value={form.experience3}
          onChange={(e) => handleChange(e, 'experience3')}
        />
        {errors.experience3 && <div className="error">{errors.experience3}</div>}
      </div>
      </label>

      <h2>Stage 7: Financials (*will be requested once appointed as an agent)</h2>

      <h2>Stage 8: Declaration</h2>
      <p>
        *I hereby certify that the information provided above is accurate and complete to the best of my knowledge.
        I understand that providing false information may result in rejection of my application or termination of the 
        contract if selected.      
      </p>

      <label>
        Signature
        <input
          type="text"
          value={form.signature}
          onChange={(e) => handleChange(e, 'signature')}
        />
        {errors.signature && <div className="error">{errors.signature}</div>}
      </label>

      <label>
        Date
        <input
          type="date"
          value={form.declarationDate}
          onChange={(e) => handleChange(e, 'declarationDate')}
        />
        {errors.declarationDate && <div className="error">{errors.declarationDate}</div>}
      </label>
      <p>
        For any queries, please contact our support team at info@crowdafrik.com or call us on +234 809 099 9200    
      </p>


      


      

      

      

      

      

      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default SuperAgentForm;

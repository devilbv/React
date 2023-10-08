
import React, { useState } from 'react';

function EntryForm({ addEntryToPhoneBook }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the addEntryToPhoneBook function with an object containing firstName, lastName, and phoneNumber
    addEntryToPhoneBook({ firstName, lastName, phoneNumber });
    // Reset the form fields
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
  };

    return (
    <form onSubmit={handleSubmit} >
        <input type="text"
         name="firstName"
          id="firstName"
          placeholder="First Name"
          value={firstName}
           onChange={(e) => setFirstName(e.target.value) } />
        <input type="text"
         name="lastName" 
         id="lastName"
          placeholder="Last Name"
           value={lastName}
            onChange={(e) => setLastName(e.target.value) } />
        <input type="text"
         name="phoneNumber"
          id="phoneNumber" 
          placeholder="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value) } />
        <button type="submit" className='button1'>SUBMIT</button>
       

      </form>
    );
    
  }

  export default EntryForm;
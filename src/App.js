import { useState, useEffect } from 'react';
import DisplayEntries from './components/DisplayEntries';
import EntryForm from './components/EntryForm';
import './App.css';

function App() {
 const entryHandler = JSON.parse(localStorage.getItem("phoneBookEntry")) || [];
  const [entries, setEntries] = useState(entryHandler);
  
  useEffect(()=> {

    localStorage.setItem("phoneBookEntry", JSON.stringify(entries));

  },[entries])

 const addEntryToPhoneBook = (entry) => {
    setEntries([...entries, entry]);
  };

  const deleteEntryFromPhoneBook = (e) => {
     const deleteEntries = entries.filter((_, i) => i !== e);
     setEntries(deleteEntries)
  }


  return (
    <div className="phoneApp">
    <h1>Phonebook App</h1>
      <EntryForm addEntryToPhoneBook = {addEntryToPhoneBook} />
      <DisplayEntries entries={entries} deleteEntryFromPhoneBook ={deleteEntryFromPhoneBook} />
    </div>
  );
}


export default App;

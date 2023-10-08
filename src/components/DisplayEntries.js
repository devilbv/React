import React from "react";

function DisplayEntries({ entries , deleteEntryFromPhoneBook }) {
    return (  
        <div>
    <table>
        <thead>
          <tr>          
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        </table>

        
          {entries.map((entry, index) =>
          (
            
             <div key={index}>
                <ul className="listResult"> 
                <li>{entry.firstName}</li>
                <li>{entry.lastName}</li>
                <li>{entry.phoneNumber}</li>
                 <button onClick={() => deleteEntryFromPhoneBook(index)}>Delete</button> 
                 </ul>
            </div>  
              
            
      ))}
 
        </div>
      
    )
}

export default DisplayEntries;
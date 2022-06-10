import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setContact((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={setContact.fName}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={setContact.lName}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={setContact.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

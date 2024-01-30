import { useState } from 'react';
import '../components/Contact/contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
    // Function to handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevents default form submission behavior
      const userData = {
        name: name,
        email: email,
        phoneNumber: phoneNumber
      };
    
      // Log the user data object to the console
      const response = await fetch("https://contact-ecommece-default-rtdb.firebaseio.com/user.json",{
        method: "POST",
        body: JSON.stringify(userData),
        headers:{
            "Content-Type": 'application/json'
        }
      })
      const data = await response.json()
      console.log("data",data);
    //   console.log('Submitted Data:', userData);
    };
  
    return (
      <div className="contact-container">
        <h2 className="form-heading">User Data Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label" htmlFor="name">Name:</label>
            <input
              className="form-input"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="email">Email ID:</label>
            <input
              className="form-input"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="phone">Phone Number:</label>
            <input
              className="form-input"
              type="text"
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
  )
}

export default Contact;

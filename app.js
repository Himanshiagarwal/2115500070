import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [companyname, setCompanyName] = useState('problems');
  const [ownername, setOwnerName] = useState('XYZ');
  const [rollno, setRollNo] = useState('2115500070');
  const [email, setEmail] = useState('himanshi.agarwal_cs.aiml21@gla.ac.in');
  const [accesscode, setAccessCode] = useState('lIntgp');
  const [registered, setRegistered] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    const userData = { companyname, ownername, rollno, email, accesscode };
    fetch('http://20.244.56.144/test/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setRegistered(true);
        } else {
          alert('Registration failed');
        }
      })
      .catch(error => console.error(error));
    return () => mounted.current = false;
  }, []);

  return (
    <div>
      <h1>Register</h1>
      <form>
        <label>
          Company Name:
          <input type="text" value={companyname} onChange={e => setCompanyName(e.target.value)} />
        </label>
        <br />
        <label>
          Owner Name:
          <input type="text" value={ownername} onChange={e => setOwnerName(e.target.value)} />
        </label>
        <br />
        <label>
          Roll No.:
          <input type="number" value={rollno} onChange={e => setRollNo(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Access Code:
          <input type="password" value={accesscode} onChange={e => setAccessCode(e.target.value)} />
        </label>
        <br />
        {registered && <h2>Registration successful!</h2>}
      </form>
    </div>
  );
}

export default App;